import React from 'react'
import {graphql} from 'gatsby'
import PageTemplate from '../components/PageTemplate'

const FontPageTemplate = ({data}) => {
  console.log(data.contentfulFont)

  return <PageTemplate>hello world</PageTemplate>
}

export default FontPageTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulFont(slug: {eq: $slug}) {
      id
      slug
      name
      weights {
        id
        name
        value
      }
      heroCopy {
        heroCopy
      }
      description {
        description
      }
    }
  }
`
