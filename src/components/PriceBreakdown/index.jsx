import React from 'react'
import {SelectedItem, TotalPrice} from './styles'
import {P} from '../../styles'

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
      <h3>Cart</h3>
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
      </>
      {selectedLicense && (
        <SelectedItem>
          <P>{selectedLicense.title} License</P>
          <P>${licensePrice}</P>
        </SelectedItem>
      )}
      <SelectedItem>
        <TotalPrice>Subtotal</TotalPrice>
        <TotalPrice>
          ${licensePrice ? licensePrice + fontPrice : fontPrice} {currency}
        </TotalPrice>
      </SelectedItem>
    </>
  )
}

export default PriceBreakdown
