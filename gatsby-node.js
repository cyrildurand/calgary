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

  createPage({
    path: `/contact`,
    component: path.resolve('./src/templates/Contact.jsx'),
  });
  createPage({
    path: `/contact/success`,
    component: path.resolve('./src/templates/Contact.jsx'),
    context: {
      success: true,
    },
  });

  const createGenericContent = graphql(`
    {
      allContentfulPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    const pages = result.data.allContentfulPage.edges;

    pages.forEach(edge => {
      createPage({
        path: edge.node.slug,
        component: path.resolve('./src/templates/GenericContent.jsx'),
        context: {
          slug: edge.node.slug,
        },
      });
    });
  });

  const createVias = graphql(`
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
      throw result.errors;
    }
    const vias = result.data.allContentfulViaFerrata.edges;

    vias.forEach(edge => {
      createPage({
        path: `/via-${edge.node.slug}/`,
        component: path.resolve('./src/templates/Detail.jsx'),
        context: {
          slug: edge.node.slug,
        },
      });
    });
  });

  const createBlogList = graphql(`
    {
      allContentfulBlogPost(filter: { node_locale: { eq: "fr" } }) {
        totalCount
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

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
  });

  return Promise.all([createGenericContent, createVias, createBlogList]);
};

// modules that should not go through webpack because it use window global variable which is not compatible with gatsby SSR
const excludedModules = ['leaflet', 'leaflet.locatecontrol', 'leaflet-fullscreen'];
const excludedModulePaths = excludedModules.map(
  module => path.resolve(`./node_modules/${module}`) + path.sep
);

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: path => {
              return excludedModulePaths.some(
                excludedModulePath => path.startsWith(excludedModulePath) && path.endsWith('.js')
              );
            },
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
