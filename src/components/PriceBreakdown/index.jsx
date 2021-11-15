import React from 'react' // {useState, useEffect}
import {SelectedItem, TotalPrice, LinksContainer} from './styles'
import {P, PSpace, Button, H3, Margin, TextLink, SmallText} from '../../styles'

const PriceBreakdown = ({font, selectedLicense, selectedFonts, totalPrice}) => {
  const disableCheckout = () => {
    if (!selectedLicense) {
      return true
    } else if (!selectedFonts) {
      return true
    } else if (selectedFonts.length < 1) {
      return true
    }
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
                  <P>${selectedLicense.price}</P>
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
        <SmallText>
          <TextLink href="/" rel="no_referrer" target="_blank">
            Type Network
          </TextLink>{' '}
          for larger licenses and hosted webfonts
        </SmallText>
        <SmallText>
          <TextLink href="/" rel="no_referrer" target="_blank">
            Licensing details
          </TextLink>
        </SmallText>
        <SmallText>
          <TextLink href="/" rel="no_referrer" target="_blank">
            Get in touch
          </TextLink>{' '}
          for more info
        </SmallText>
      </LinksContainer>
    </>
  )
}

export default PriceBreakdown
