import React from "react"
import Layout from "../components/layout"

export default ({ data }) => {
  const { title, content, date } = data.wordpressPost
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <main dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export const postQuery = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
      date(formatString: "YYYY MMM Do")
    }
  }
`
