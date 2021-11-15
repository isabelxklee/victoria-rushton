import React from 'react' // {useState, useEffect}
import {SelectedItem, TotalPrice} from './styles'
import {P, PSpace, Button, H3, Margin} from '../../styles'

const PriceBreakdown = ({font, selectedLicense, selectedFonts, totalPrice}) => {
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
            {selectedLicense && <PSpace>{selectedLicense.title} License</PSpace>}
            {selectedFonts &&
              selectedFonts.map((weightTitle) => (
                <SelectedItem key={weightTitle}>
                  <P>
                    {font.title} {weightTitle}
                  </P>
                  <P>${selectedLicense.price}</P>
                </SelectedItem>
              ))}

            {selectedFonts && totalPrice && (
              <SelectedItem>
                <TotalPrice>Subtotal</TotalPrice>
                <TotalPrice>${totalPrice}</TotalPrice>
              </SelectedItem>
            )}
          </>
        ) : (
          <PSpace>Add something to your cart.</PSpace>
        )}
      </Margin>

      {/* <form action="/create-checkout-session" method="POST">
        <button type="submit">Checkout</button>
      </form> */}

      <Button $disabled={selectedLicense || selectedFonts ? false : true}>Checkout</Button>
    </>
  )
}

export default PriceBreakdown
