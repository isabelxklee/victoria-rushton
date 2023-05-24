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
  data.allMarkdownRemark.nodes.forEach((node) => {
    const slug = node.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/fontPageTemplate.jsx`),
      context: {slug: slug},
    })
  })
}
