import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import PageTemplate from '../components/PageTemplate'
import {H2, H3, Button, Text} from '../styles'

const About = () => {
  const data = useStaticQuery(pageQuery)
  const about = data.allContentfulAbout.nodes[0]
  const press = data.allContentfulPress.nodes

  return (
    <PageTemplate>
      <div>
        <H2>{about.greeting.greeting}</H2>
        <Text>{about.bio.bio}</Text>
        <Button>
          <a href={about.buttonURL}>{about.buttonLabel}</a>
        </Button>
      </div>
      <div>
        <H2>Speaking and Writing</H2>
        {press.map((press, index) => (
          <div key={index}>
            <H3>
              <a href={press.url}>{press.title}</a>
            </H3>
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
