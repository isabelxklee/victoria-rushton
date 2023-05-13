import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(pageQuery);
  const fonts = data.allContentfulFont.nodes;

  console.log(fonts);

  return <h1>hello world</h1>;
};

export default IndexPage;

const pageQuery = graphql`
  query HomePageQuery {
    allContentfulFont {
      nodes {
        name
        slug
        description {
          description
        }
        heroCopy {
          heroCopy
        }
        weights {
          name
          value
        }
      }
    }
  }
`;
