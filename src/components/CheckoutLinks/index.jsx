import React, {useState, useEffect} from 'react'
import sanityClient from '../../client.js'
import {LinksContainer} from './styles'
import {H3, SmallText, TextLink} from '../../global-styles'
import {checkoutLinksQuery} from '../../queries'

const CheckoutLinks = () => {
  const [checkoutLinks, setCheckoutLinks] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(checkoutLinksQuery)
      .then((data) => setCheckoutLinks(data))
      .catch(console.error)
  }, [])

  return (
    <LinksContainer>
      <H3>More resources</H3>
      {checkoutLinks.map((link) => (
        <SmallText key={link._id}>
          <TextLink inputWeight={400} href={link.url} rel="no_referrer" target="_blank">
            {link.linkText}
          </TextLink>
        </SmallText>
      ))}
    </LinksContainer>
  )
}

export default CheckoutLinks
