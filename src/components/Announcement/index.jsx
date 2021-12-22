import React, {useState, useEffect} from 'react'
import {P, H3} from '../../styles'
import {AnnouncementContainer, GIF} from './styles'
import sanityClient from '../../client.js'
import {announcementQuery} from '../../queries.js'
import GIF1 from '../../assets/GIFs/Cecilie-Sans-Variable-1.gif'
import GIF2 from '../../assets/GIFs/Cecilie-Sans-Variable-2.gif'

const Announcement = () => {
  const [message, setMessage] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(announcementQuery)
      .then((data) => setMessage(data[0]))
      .catch(console.error)
  }, [])

  return (
    <>
      {message && (
        <>
          <GIF src={GIF1} alt="The word 'Variable' grows and shrinks." />
          <GIF src={GIF2} alt="The phrase 'weight and italic axes' grows and shrinks." />
          <AnnouncementContainer>
            <H3>{message.title}</H3>
            <P>{message.description}</P>
          </AnnouncementContainer>
        </>
      )}
    </>
  )
}

export default Announcement
