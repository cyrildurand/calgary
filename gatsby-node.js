const path = require('path');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  return new Promise(resolve => {
    const oldPage = Object.assign({}, page);

    // our conventions requires filename to be PascalCase but we wan't lowercase for path in url
    // Gatsby don't use /Index.jsx but /index.jsx
    if (page.path === '/Index/') {
      page.path = '/';
    } else {
      page.path = page.path.toLowerCase();
    }

    if (page.path !== oldPage.path) {
      deletePage(oldPage);
      createPage(page);
    }
    resolve();
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const createVias = new Promise((resolve, reject) => {
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

  const createBlogList = new Promise((resolve, reject) => {
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

  return Promise.all([createVias, createBlogList]);
};

// modules that should not go through webpack because it use window global variable which is not compatible with gatsby SSR
const excludedModules = ['leaflet', 'leaflet.locatecontrol', 'react-leaflet-fullscreen-control'];
const excludedModulePaths = excludedModules.map(module => path.resolve(`./node_modules/${module}`));

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: path => {
              return excludedModulePaths.some(excludedModulePath =>
                path.startsWith(excludedModulePath)
              );
            },
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
