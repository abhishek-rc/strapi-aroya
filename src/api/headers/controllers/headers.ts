/**
 * header controller
 * 
 * Extends the core header controller to include navigation data
 * in the response. Fetches header_navigation data and combines it
 * with header content in a single API call.
 */

import { factories } from '@strapi/strapi';

const NAVIGATION_SLUG = 'header-navigation';

/**
 * Fetches navigation data by slug
 * @param {Object} strapi - Strapi instance
 * @param {string} slug - Navigation slug to fetch
 * @returns {Promise<Object|null>} Navigation data or null if not found
 */
async function fetchNavigation(strapi, slug = NAVIGATION_SLUG) {
    try {
        // Check if navigation plugin is installed
        const navigationPlugin = strapi.plugin('navigation');
        if (!navigationPlugin) {
            return null;
        }

        // First, fetch all navigations to see what exists
        let navigation = await strapi.entityService.findMany('plugin::navigation.navigation', {
            populate: {
                items: {
                    populate: {
                        parent: true,
                        related: true,
                        audience: true,
                    },
                },
            },
        });

	console.log(">>>>>>>>>>>>>>>>", navigation)

        // Find navigation with matching slug
        if (navigation && navigation.length > 0) {
            const navData = navigation.find((nav) => nav.slug === slug) || navigation[0];
	
	    console.log("###########", navData);

            // Try to render navigation using the plugin's render service
            try {
                const renderService = navigationPlugin.service('render');
		console.log("bbbbbbbbbbbb", navigationPlugin.service)
		console.log('Available services:', Object.keys(navigationPlugin.service || {}));
		console.log("aaaaaaaaaaaa", renderService);
                if (renderService?.render) {
                    return await renderService.render(slug);
                }
            } catch (error) {
                console.log('Failed to render header_navigation: navigation plugin not installed', error);
                return null;
            }
        }
        return null;
    } catch (error) {
        console.log('Failed to fetch header_navigation:', error);
        return null;
    }
}
export default factories.createCoreController('api::headers.headers', ({ strapi }) => ({
    /**
     * Find all headers with navigation data
     * @param {Object} ctx - Koa context
     * @returns {Promise<Object>} Response with header and navigation data
     */
    async find(ctx) {
        const { data, meta } = await super.find(ctx);
        const headerNavigation = await fetchNavigation(strapi);

	console.log("%%%%%%%%%%%%%%%", headerNavigation);

        return {
            data: Array.isArray(data)
                ? data.map((item) => ({
                    ...item,
                    header_navigation: headerNavigation,
                }))
                : {
                    ...data,
                    header_navigation: headerNavigation,
                },
            meta,
        };
    },

    /**
     * Find one header with navigation data
     * @param {Object} ctx - Koa context
     * @returns {Promise<Object>} Response with header and navigation data
     */
    async findOne(ctx) {
        const { data, meta } = await super.findOne(ctx);
        const headerNavigation = await fetchNavigation(strapi);

        return {
            data: {
                ...data,
                header_navigation: headerNavigation,
            },
            meta,
        };
    },
}));
