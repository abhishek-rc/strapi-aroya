import type { Schema, Struct } from '@strapi/strapi';

export interface FaqFaqCategories extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_categories';
  info: {
    displayName: 'Faq Categories';
  };
  attributes: {
    category_title: Schema.Attribute.String & Schema.Attribute.Required;
    display_order: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    faq_items: Schema.Attribute.Component<'faq.faq-items', true>;
    is_active: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface FaqFaqItems extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_items';
  info: {
    displayName: 'Faq Items';
  };
  attributes: {
    display_order: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    faq_answer: Schema.Attribute.Blocks & Schema.Attribute.Required;
    faq_question: Schema.Attribute.Blocks & Schema.Attribute.Required;
    is_active: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface InformationInfo extends Struct.ComponentSchema {
  collectionName: 'components_information_infos';
  info: {
    displayName: 'info';
  };
  attributes: {
    info: Schema.Attribute.Component<'shared.info-section', true>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    buttonBorderColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    buttonBorderHoverColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    buttonColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    buttonHoverColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    buttonTextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    link_url: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    textHoverColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    faq_categories: Schema.Attribute.Component<'faq.faq-categories', true>;
    faq_description: Schema.Attribute.Text;
    faq_title: Schema.Attribute.String;
  };
}

export interface SharedFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_sections';
  info: {
    displayName: 'Feature Section';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.RichText;
    tab_items: Schema.Attribute.Component<'tab.tab-item', true>;
  };
}

export interface SharedFooterLegalLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_legal_links_s';
  info: {
    displayName: 'Footer Legal Links ';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedGalleryItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_gallery_items';
  info: {
    displayName: 'Gallery Item';
  };
  attributes: {
    has_tabs: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    media: Schema.Attribute.Component<'shared.media', true>;
    tab_name: Schema.Attribute.String;
  };
}

export interface SharedHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_banners';
  info: {
    displayName: 'Hero Banner';
  };
  attributes: {
    hero_banner: Schema.Attribute.Component<'shared.slider', true>;
  };
}

export interface SharedImageAndTextSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_and_text_sections';
  info: {
    displayName: 'Image & Text Section';
  };
  attributes: {
    content_alignment: Schema.Attribute.Enumeration<
      ['start', 'center', 'end']
    > &
      Schema.Attribute.DefaultTo<'start'>;
    cta: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.RichText;
    has_cta: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    image_position: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.RichText;
  };
}

export interface SharedInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_sections';
  info: {
    displayName: 'Info section';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    contentAlignment: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    heading: Schema.Attribute.RichText & Schema.Attribute.Required;
    headingAlignment: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    image: Schema.Attribute.Component<'shared.media', true>;
    tip: Schema.Attribute.Component<'shared.tip', true>;
  };
}

export interface SharedLegalLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_legal_links';
  info: {
    displayName: 'Legal Links';
  };
  attributes: {
    footer_legal_links: Schema.Attribute.Component<
      'shared.footer-legal-links',
      true
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    cta: Schema.Attribute.Component<'shared.button', true>;
    has_content: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    has_cta: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imageDesktopAlignment: Schema.Attribute.Enumeration<
      ['left', 'right', 'center']
    > &
      Schema.Attribute.DefaultTo<'center'>;
    imageMobileAlignment: Schema.Attribute.Enumeration<['top', 'bottom']> &
      Schema.Attribute.DefaultTo<'top'>;
    need_alignment: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    res: Schema.Attribute.String & Schema.Attribute.DefaultTo<'title'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    no_Archive: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    no_Follow: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    no_Index: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    cta_button: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Blocks;
    desktop_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    heading: Schema.Attribute.Blocks;
    mobile_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    textAlign: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

export interface SharedSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Links';
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedTip extends Struct.ComponentSchema {
  collectionName: 'components_shared_tips';
  info: {
    displayName: 'tip';
  };
  attributes: {
    tipText: Schema.Attribute.Text;
    tipType: Schema.Attribute.Enumeration<['proTip', 'tip']> &
      Schema.Attribute.DefaultTo<'tip'>;
  };
}

export interface TabTabItem extends Struct.ComponentSchema {
  collectionName: 'components_tab_tab_items';
  info: {
    displayName: 'Tab Item';
  };
  attributes: {
    tab_item: Schema.Attribute.Component<'shared.gallery-item', true>;
  };
}

export interface TestTestFaqCategories extends Struct.ComponentSchema {
  collectionName: 'components_test_test_faq_categories';
  info: {
    displayName: 'Test Faq Categories';
  };
  attributes: {
    category_heading: Schema.Attribute.String;
    test_faq_item: Schema.Attribute.Component<'test.test-faq-item', true>;
  };
}

export interface TestTestFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_test_test_faq_items';
  info: {
    displayName: 'Test Faq item';
  };
  attributes: {
    answers: Schema.Attribute.Blocks;
    markdown: Schema.Attribute.RichText;
    questions: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'faq.faq-categories': FaqFaqCategories;
      'faq.faq-items': FaqFaqItems;
      'information.info': InformationInfo;
      'shared.button': SharedButton;
      'shared.faq': SharedFaq;
      'shared.feature-section': SharedFeatureSection;
      'shared.footer-legal-links': SharedFooterLegalLinks;
      'shared.gallery-item': SharedGalleryItem;
      'shared.hero-banner': SharedHeroBanner;
      'shared.image-and-text-section': SharedImageAndTextSection;
      'shared.info-section': SharedInfoSection;
      'shared.legal-links': SharedLegalLinks;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-links': SharedSocialLinks;
      'shared.tip': SharedTip;
      'tab.tab-item': TabTabItem;
      'test.test-faq-categories': TestTestFaqCategories;
      'test.test-faq-item': TestTestFaqItem;
    }
  }
}
