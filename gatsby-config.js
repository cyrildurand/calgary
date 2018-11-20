require('dotenv').config();

let contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master'
};

console.log(contentfulConfig);

module.exports = {
  siteMetadata: {
    siteUrl: 'http://localhost:8000'
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: contentfulConfig.spaceId,
        accessToken: contentfulConfig.accessToken,
        environment: contentfulConfig.environment
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'GatsbyJS',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'minimal-ui',
        icon: 'src/images/favicon-512.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-react-helmet'
  ]
};