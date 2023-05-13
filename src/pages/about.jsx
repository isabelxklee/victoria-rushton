import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import PageTemplate from '../components/PageTemplate'
import {H2, Text} from '../styles'

const About = () => {
  const data = useStaticQuery(pageQuery)
  const about = data.allContentfulAbout.nodes[0]
  const press = data.allContentfulPress.nodes

  return (
    <PageTemplate>
      <div>
        <H2>{about.greeting.greeting}</H2>
        <Text>{about.bio.bio}</Text>
        <button>
          <a href={about.buttonURL}>{about.buttonLabel}</a>
        </button>
      </div>
      <div>
        <h2>Speaking and Writing</h2>
        {press.map((press, index) => (
          <div key={index}>
            <h3>
              {/* <a href={press.url} target="_blank" rel="no_referrer">
                {press.title}
              </a> */}
            </h3>
            <p>{press.description}</p>
          </div>
        ))}
      </div>
    </PageTemplate>
  )
}

export default About

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
`
