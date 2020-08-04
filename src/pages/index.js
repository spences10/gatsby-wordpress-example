import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      {data.allWordpressPost.nodes.map(p => {
        return (
          <Link key={p.slug} to={p.slug}>
            <h2 dangerouslySetInnerHTML={{ __html: p.title }} />
            <h4
              dangerouslySetInnerHTML={{ __html: p.excerpt.substring(0, 150) }}
            />
          </Link>
        )
      })}
    </Layout>
  )
}

export const indexQuery = graphql`
  {
    allWordpressPost(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        excerpt
        date
      }
    }
  }
`
