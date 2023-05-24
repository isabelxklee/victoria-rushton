exports.createPages = async function ({actions, graphql}) {
  const {data} = await graphql(`
    query {
      allContentfulFont {
        nodes {
          slug
        }
      }
    }
  `)
  data.allContentfulFont.nodes.forEach((node) => {
    actions.createPage({
      path: `/${node.slug}`,
      component: require.resolve(`./src/templates/fontPageTemplate.jsx`),
      context: {slug: node.slug},
    })
  })
}
