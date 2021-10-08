import React from 'react' // {useState, useEffect}
import {SelectedItem, TotalPrice} from './styles'
import {P, PSpace, Button, H3} from '../../styles'

const PriceBreakdown = ({font, fontPrice, licensePrice, selectedLicense, selectedFonts}) => {
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
      {selectedFonts || selectedLicense ? (
        <>
          {selectedFonts &&
            selectedFonts.map((weightTitle) => (
              <SelectedItem key={weightTitle}>
                <P>
                  {font.title} {weightTitle}
                </P>
                <P>$100</P>
              </SelectedItem>
            ))}
          {selectedLicense && (
            <SelectedItem>
              <P>{selectedLicense.title} License</P>
              <P>${licensePrice}</P>
            </SelectedItem>
          )}
          <SelectedItem>
            <TotalPrice>Subtotal</TotalPrice>
            <TotalPrice>${licensePrice + fontPrice}</TotalPrice>
          </SelectedItem>
        </>
      ) : (
        <PSpace>Add something to your cart.</PSpace>
      )}

      {/* <form action="/create-checkout-session" method="POST">
        <button type="submit">Checkout</button>
      </form> */}

      <Button $disabled={selectedLicense || selectedFonts ? false : true}>Checkout</Button>
    </>
  )
}

export default PriceBreakdown
