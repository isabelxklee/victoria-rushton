import React, { FunctionComponent } from "react";
import type { graphql, PageProps, useStaticQuery } from "gatsby";

const IndexPage: React.FunctionComponent = () => {
  const data = useStaticQuery(query);

  console.log(data);

  return <h1>hello world</h1>;
};

export default IndexPage;

const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;
