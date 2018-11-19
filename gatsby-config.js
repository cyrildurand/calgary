module.exports = {
    plugins: [
        'gatsby-plugin-typescript',
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `at9a6gmz24f5`,
                accessToken: `f16f4802d47cbccd31f69d4eda867cda19636b8562412f623cf5d0da8ab52a8c`
            }
        },
        // 'gatsby-plugin-sitemap',
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: "GatsbyJS",
              short_name: "GatsbyJS",
              start_url: "/",
              background_color: "#6b37bf",
              theme_color: "#6b37bf",
              display: "minimal-ui",
              icon: "src/images/favicon-512.png", // This path is relative to the root of the site.
            },
          },
          `gatsby-plugin-react-helmet`
    ]
}