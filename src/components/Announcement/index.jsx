import React, {useState, useEffect} from 'react'
import {P, H3} from '../../styles'
import {AnnouncementContainer} from './styles'
import sanityClient from '../../client.js'
import {announcementQuery} from '../../queries.js'

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
        <AnnouncementContainer>
          <H3>{message.title}</H3>
          <P>{message.description}</P>
        </AnnouncementContainer>
      )}
    </>
  )
}

export default Announcement
