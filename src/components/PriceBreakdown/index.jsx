import React from 'react'
import {SelectedItem, TotalPrice} from './styles'
import {P, PSpace, Button, H3} from '../../styles'

const PriceBreakdown = ({
  font,
  fontPrice,
  licensePrice,
  selectedLicense,
  selectedFonts,
  currency,
}) => {
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
            <TotalPrice>
              ${licensePrice + fontPrice} {currency}
            </TotalPrice>
          </SelectedItem>
        </>
      ) : (
        <PSpace>Add something to your cart.</PSpace>
      )}
      <Button $disabled={selectedLicense || selectedFonts ? false : true}>Checkout</Button>
    </>
  )
}

export default PriceBreakdown
