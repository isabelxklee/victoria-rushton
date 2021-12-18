import React, {useState, useEffect} from 'react'
import sanityClient from '../../client.js'
import {SelectedItem, TotalPrice, LinksContainer, RemoveIcon, Right} from './styles'
import {P, PSpace, H3, Margin, TextLink, SmallText} from '../../styles'
import Checkout from '../Checkout'

const PriceBreakdown = ({
  font,
  selectedLicense,
  setSelectedFonts,
  selectedFonts,
  totalPrice,
  variableFont,
  setVariableFont,
}) => {
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

  console.log(variableFont)

  return (
    <>
      <H3>Cart</H3>
      <Margin $margin="16px 0">
        {selectedFonts || selectedLicense ? (
          <>
            {selectedLicense && (
              <>
                <PSpace inputMargin="8px 0">{selectedLicense.title} License</PSpace>
                <SelectedItem $disabled={!variableFont}>
                  <P>{font.title} Variable Font</P>
                  <Right>
                    <P>FREE</P>
                  </Right>
                </SelectedItem>
              </>
            )}
            {selectedFonts &&
              selectedFonts.map((weightTitle) => (
                <SelectedItem key={weightTitle} $disabled={false}>
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
              <SelectedItem $disabled={false}>
                <TotalPrice>Subtotal</TotalPrice>
                <TotalPrice>${totalPrice}</TotalPrice>
              </SelectedItem>
            )}
          </>
        ) : (
          <PSpace inputMargin="16px 0">Add something to your cart.</PSpace>
        )}
      </Margin>

      <Checkout
        disableCheckout={disableCheckout}
        selectedLicense={selectedLicense}
        selectedFonts={selectedFonts}
        font={font.title}
      />

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
    </>
  )
}

export default PriceBreakdown
