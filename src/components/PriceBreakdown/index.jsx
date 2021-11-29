import React, {useState, useEffect} from 'react'
import sanityClient from '../../client.js'
import {SelectedItem, TotalPrice, LinksContainer, RemoveIcon, Right} from './styles'
import {P, PSpace, Button, H3, Margin, TextLink, SmallText} from '../../styles'

const PriceBreakdown = ({font, selectedLicense, setSelectedFonts, selectedFonts, totalPrice}) => {
  const [checkoutLinks, setCheckoutLinks] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "checkoutLink"] {
            _id,
            title,
            linkText,
            url
        }`
      )
      .then((data) => setCheckoutLinks(data))
      .catch(console.error)
  }, [])

  console.log(checkoutLinks)

  const disableCheckout = () => {
    if (!selectedLicense) {
      return true
    } else if (!selectedFonts) {
      return true
    } else if (selectedFonts.length < 1) {
      return true
    }
  }

  const handleRemove = (deletedFont) => {
    setSelectedFonts((selectedFonts) => selectedFonts.filter((font) => font !== deletedFont))
  }

  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://victoria-rushton-express.herokuapp.com/express-backend')
  //     // const response = await fetch('https://localhost:5000')
  //     const body = await response.json()
  //     setData(body.express)
  //   }
  //   fetchData()
  // }, [])

  // console.log(data)

  return (
    <>
      <H3>Cart</H3>
      <Margin $margin="16px 0">
        {selectedFonts || selectedLicense ? (
          <>
            {selectedLicense && (
              <PSpace inputMargin="8px 0">{selectedLicense.title} License</PSpace>
            )}
            {selectedFonts &&
              selectedFonts.map((weightTitle) => (
                <SelectedItem key={weightTitle}>
                  <P>
                    {font.title} {weightTitle}
                  </P>
                  <Right>
                    <P>${selectedLicense.price}</P>
                    <RemoveIcon onClick={() => handleRemove(weightTitle)} />
                  </Right>
                </SelectedItem>
              ))}

            {selectedFonts && selectedFonts.length > 0 && totalPrice && (
              <SelectedItem>
                <TotalPrice>Subtotal</TotalPrice>
                <TotalPrice>${totalPrice}</TotalPrice>
              </SelectedItem>
            )}
          </>
        ) : (
          <PSpace inputMargin="16px 0">Add something to your cart.</PSpace>
        )}
      </Margin>

      {/* <form action="/create-checkout-session" method="POST">
        <button type="submit">Checkout</button>
      </form> */}

      <Button $disabled={disableCheckout()}>Checkout</Button>

      <LinksContainer>
        {checkoutLinks.map((link) => (
          <SmallText key={link._id}>
            <TextLink href={link.url} rel="no_referrer" target="_blank">
              {link.linkText}
            </TextLink>
          </SmallText>
        ))}
      </LinksContainer>
    </>
  )
}

export default PriceBreakdown
