import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const About = () => {
  const data = useStaticQuery(pageQuery);
  const about = data.allContentfulAbout.nodes[0];
  const press = data.allContentfulPress.nodes;

  console.log(press);

  return (
    <>
      <div>
        <h2>{about.greeting.greeting}</h2>
        <p>{about.bio.bio}</p>
        <button>
          <a href={about.buttonURL}>{about.buttonLabel}</a>
        </button>
      </div>
      <div>
        <h2>Speaking and Writing</h2>
        {press.map((press, index) => (
          <div key={index}>
            <h3>
              <a href={press.url} target="_blank" rel="no_referrer">
                {press.title}
              </a>
            </h3>
            <p>{press.description}</p>
          </div>
        ))}
      </div>
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
