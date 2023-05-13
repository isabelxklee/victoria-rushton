import React, { FunctionComponent } from "react";
import { graphql, useStaticQuery } from "gatsby";

const About: FunctionComponent = () => {
  // const data = useStaticQuery(pageQuery);
  // const fonts = data.allContentfulFont.nodes;

  // console.log(fonts);

  return <h1>About</h1>;
};

export default About;

// const pageQuery = graphql`
//   query HomePageQuery {
//     allContentfulFont {
//       nodes {
//         name
//         slug
//         description {
//           description
//         }
//         heroCopy {
//           heroCopy
//         }
//         weights {
//           name
//           value
//         }
//       }
//     }
//   }
// `;
