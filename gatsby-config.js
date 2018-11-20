require("dotenv").config();

let contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  accessToken: process.env.CONTENTFUL_ENVIRONMENT | "master"
};

module.exports = {
  siteMetadata: {
    siteUrl: "http://localhost:8000"
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
        environment: process.env.NODE_ENV
      }
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "minimal-ui",
        icon: "src/images/favicon-512.png" // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-react-helmet`
  ]
};
