import React, { FunctionComponent } from "react";
import { graphql, useStaticQuery } from "gatsby";

const IndexPage: FunctionComponent = () => {
  const data = useStaticQuery(pageQuery);

  console.log(data);

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
