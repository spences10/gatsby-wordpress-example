const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      posts: allWordpressPost {
        nodes {
          slug
          title
          excerpt
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(`Error loading posts`, JSON.stringify(result.errors))
  }

  result.data.posts.nodes.forEach(post => {
    actions.createPage({
      path: `/${post.slug}`,
      component: path.resolve(`src/templates/post.js`),
      context: { slug: post.slug },
    })
  })
}
