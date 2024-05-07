import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsFeatureCard extends Schema.Component {
  collectionName: 'components_components_feature_cards';
  info: {
    displayName: 'featureCard';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    text: Attribute.String;
  };
}

export interface LayoutFeatures extends Schema.Component {
  collectionName: 'components_layout_features';
  info: {
    displayName: 'features';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    features: Attribute.Component<'components.feature-card', true>;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    cta: Attribute.Component<'components.link'>;
    backgroundImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.feature-card': ComponentsFeatureCard;
      'components.link': ComponentsLink;
      'layout.features': LayoutFeatures;
      'layout.hero': LayoutHero;
    }
  }
}
