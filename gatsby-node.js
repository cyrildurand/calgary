const path = require(`path`)

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions

  const loadVias = new Promise((resolve, reject) => {
    graphql(`
        {
          allContentfulViaFerrata{
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
      const posts = result.data.allContentfulViaFerrata.edges;

      posts.forEach((edge) => {
        createPage({
          path: `via-${edge.node.slug}/`,
          component: path.resolve('./src/templates/Detail.jsx'),
          context: {
            slug: edge.node.slug,
          },
        })
      });
      resolve();
    });

  });

  return Promise.all([loadVias]);
}

exports.onCreateWebpackConfig = ({
  stage,
  loaders,
  actions
}) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [{
          test: /leaflet/,
          use: loaders.null(),
        }, ],
      },
    })
  }
}