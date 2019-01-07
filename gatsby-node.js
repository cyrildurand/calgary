const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  // Gatsby only understand index and not Index (case sensitivity)
  createPage({
    path: `/`,
    component: path.resolve('./src/pages/Index.jsx'),
  });
  createPage({
    path: `/list`,
    component: path.resolve('./src/pages/List.jsx'),
  });

  const loadVias = new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allContentfulViaFerrata {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        const vias = result.data.allContentfulViaFerrata.edges;

        vias.forEach(edge => {
          createPage({
            path: `via-${edge.node.slug}/`,
            component: path.resolve('./src/templates/Detail.jsx'),
            context: {
              slug: edge.node.slug,
            },
          });
        });
      })
    );
  });

  const loadBlogList = new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allContentfulBlogPost(filter: { node_locale: { eq: "fr" } }) {
            totalCount
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create blog-list pages
        const postsCount = result.data.allContentfulBlogPost.totalCount;
        const postsPerPage = 10;
        const pageCount = Math.ceil(postsCount / postsPerPage);
        Array.from(
          {
            length: pageCount,
          },
          (_, i) => {
            createPage({
              path: i === 0 ? `/blog` : `/blog/${i + 1}`,
              component: path.resolve('./src/templates/BlogList.jsx'),
              context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                pageCount,
                currentPageIndex: i,
              },
            });
          }
        );
      })
    );
  });

  return Promise.all([loadVias, loadBlogList]);
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /leaflet/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
