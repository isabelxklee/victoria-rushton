import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const About = () => {
  const data = useStaticQuery(pageQuery);
  const about = data.allContentfulAbout.nodes[0];
  const press = data.allContentfulPress.nodes;

  console.log(press);

  return (
    <>
      <h2>{about.greeting.greeting}</h2>
      <p>{about.bio.bio}</p>
      <button>
        <a href={about.buttonURL}>{about.buttonLabel}</a>
      </button>
    </>
  );
};

export default About;

const pageQuery = graphql`
  query MyQuery {
    allContentfulAbout {
      nodes {
        buttonURL
        buttonLabel
        bio {
          bio
        }
        greeting {
          greeting
        }
      }
    }
    allContentfulPress {
      nodes {
        title
        description
        url
      }
    }
  }
`;
