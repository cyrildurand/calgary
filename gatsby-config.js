// @noflow
require('dotenv').config();

let contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
};

var config = {
  siteMetadata: {
    siteUrl: 'http://localhost:8000',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: contentfulConfig.spaceId,
        accessToken: contentfulConfig.accessToken,
        environment: contentfulConfig.environment,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images-contentful',
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['node_modules'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Calgary',
        short_name: 'Calgary',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'fullscreen',
        icon: 'src/images/favicon-512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-flow',
  ],
};

if (process.env.NODE_ENV == 'production') {
  config.plugins = config.plugins.concat([
    'gatsby-plugin-offline',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-netlify',
  ]);
}

module.exports = config;
