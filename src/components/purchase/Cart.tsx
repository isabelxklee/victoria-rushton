import React, { useMemo } from 'react';
import styled from 'styled-components';

import { ColumnFlex, H3, RowFlex, Text } from '../../styles';
import { StyledRowFlex } from '../sharedStyles';

import Checkout from './Checkout';
import { LicenseProps, LicenseType } from './License';
import { SimpleFontType } from './PurchaseFlow';

const LineItem = styled(StyledRowFlex)`
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.4;
  }
`;

const CartWrapper = styled(ColumnFlex)`
  gap: 8px;
`;

interface CartProps extends LicenseProps {
  selectedLicense: LicenseType;
}

const Cart = ({
  font,
  removeFont,
  selectedFonts,
  selectedLicense
}: CartProps) => {
  const priceCalculation = useMemo(() => {
    return selectedLicense ? selectedFonts.length * selectedLicense.price : 0;
  }, [selectedFonts.length, selectedLicense]);

  return (
    <>
      <H3>Cart</H3>
      <CartWrapper>
        {selectedLicense && <Text>License size - {selectedLicense.title}</Text>}
        {selectedFonts.map((fontOption: SimpleFontType, index) => (
          <LineItem key={index} onClick={() => removeFont(fontOption)}>
            <Text>
              {font.name} {fontOption.weightTitle}{' '}
              {fontOption.slant !== 'Roman' && fontOption.slant}
            </Text>
            <RowFlex style={{ gap: '32px' }}>
              <Text>${selectedLicense?.price}</Text>
            </RowFlex>
          </LineItem>
        ))}
      </CartWrapper>
      <StyledRowFlex>
        <H3>Subtotal</H3>
        <H3>${priceCalculation}</H3>
      </StyledRowFlex>
      <Checkout
        fontTitle={font.name}
        fonts={selectedFonts}
        license={selectedLicense}
      />
    </>
  );
};

export default Cart;
