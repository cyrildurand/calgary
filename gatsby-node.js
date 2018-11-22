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
                    component: path.resolve('./src/templates/ViaFerrata.jsx'),
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