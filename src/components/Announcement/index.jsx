import React, {useState, useEffect} from 'react'
import {P, H3} from '../../styles'
import {AnnouncementContainer, GIF} from './styles'
import sanityClient from '../../client.js'
import {announcementQuery} from '../../queries.js'
import gif1 from '../../assets/Cecilie-Sans-Variable-1.gif'
import gif2 from '../../assets/Cecilie-Sans-Variable-2.gif'

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
          <GIF src={gif1} alt="" />
          <GIF src={gif2} alt="" />
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
