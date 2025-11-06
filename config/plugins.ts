export default ({ env }) => ({
  // Deep Populate Plugin
  'deep-populate': {
    enabled: true,
    config: {
      useCache: true,        // caches queries
      replaceWildcard: true, // allows populate=*
    },
  },

  // Color Picker Plugin
  'color-picker': {
    enabled: true,
  },

  // // GraphQL Plugin
  // graphql: {
  //   enabled: true,
  //   config: {
  //     endpoint: '/graphql',
  //     shadowCRUD: true,
  //     playgroundAlways: false,
  //     depthLimit: 7,
  //     amountLimit: 100,
  //     apolloServer: {
  //       tracing: false,
  //     },
  //   },
  // },
});