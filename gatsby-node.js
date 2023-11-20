exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulFont {
        nodes {
          name
          slug
        }
      }
    }
  `);
  data.allContentfulFont.nodes.forEach(node => {
    actions.createPage({
      path: `/${node.slug}`,
      component: require.resolve(`./src/templates/fontPageTemplate.tsx`),
      context: { slug: node.slug }
    });
    actions.createPage({
      path: `/${node.slug}/download-trial-font`,
      component: require.resolve(`./src/templates/downloadPageTemplate.tsx`),
      context: { slug: node.slug }
    });
  });
};
