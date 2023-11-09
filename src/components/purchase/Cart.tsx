/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import SVG from '../../assets/icon-close.svg';
import {
  BREAKPOINTS,
  COLORS,
  ColumnFlex,
  H3,
  H4,
  RowFlex,
  Text
} from '../../styles';

import Checkout from './Checkout';
import { LicenseProps, LicenseType } from './License';
import { SimpleFontType } from './PurchaseFlow';

const Wrapper = styled.div``;

const Icon = styled(SVG)`
  width: 24px;
  height: 24px;
  opacity: 0.3;
`;

const TextWrapper = styled(RowFlex)`
  justify-content: space-between;
  width: 100%;
  padding-right: 20px;
`;

const LineItem = styled(RowFlex)<{ $disableHover?: boolean }>`
  cursor: ${({ $disableHover }) => ($disableHover ? 'default' : 'pointer')};
  transition: 0.2s;
  justify-content: space-between;

  &:hover {
    opacity: ${({ $disableHover }) => ($disableHover ? 1 : 0.4)};
  }
`;

const CartWrapper = styled(ColumnFlex)`
  gap: 8px;
`;

const SubtotalWrapper = styled(RowFlex)`
  justify-content: space-between;
  margin: 40px 0;
  border-top: 2px solid ${COLORS.BLACK};
  padding: 10px 0;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    margin: 40px 0 0 0;
  }
`;

const FontsWrapper = styled.div`
  margin-top: 20px;
`;

interface CartProps extends LicenseProps {
  selectedLicense: LicenseType;
  setSelectedFonts: (value: any) => void;
}

const Cart = ({
  font,
  removeFont,
  selectedFonts,
  selectedLicense,
  setSelectedFonts
}: CartProps) => {
  const [variableFont, setVariableFont] = useState<boolean>(false);

  const variableFontObj = useMemo(() => {
    return {
      slant: 'Variable',
      weightTitle: 'Variable',
      weightValue: 0
    };
  }, []);

  useEffect(() => {
    if (selectedFonts.length > 4) {
      setVariableFont(true);
    } else {
      setVariableFont(false);
    }
  }, [selectedFonts]);

  const priceCalculation = useMemo(() => {
    return selectedLicense ? selectedFonts.length * selectedLicense.price : 0;
  }, [selectedFonts.length, selectedLicense]);

  return (
    <Wrapper>
      <CartWrapper>
        <H4>License size</H4>
        <Text>{selectedLicense && selectedLicense.title}</Text>
        <FontsWrapper>
          <H4>Fonts</H4>
          {selectedFonts.length < 1 && <Text>No fonts selected yet.</Text>}
          {selectedFonts.map((fontOption: SimpleFontType, index) => (
            <LineItem key={index} onClick={() => removeFont(fontOption)}>
              <TextWrapper>
                <Text>
                  {font.name} {fontOption.weightTitle}{' '}
                  {fontOption.slant !== 'Roman' && fontOption.slant}
                </Text>
                <Text>${selectedLicense?.price}</Text>
              </TextWrapper>
              <Icon />
            </LineItem>
          ))}
          {variableFont && (
            <LineItem $disableHover={true}>
              <TextWrapper>
                <Text>Variable Font</Text>
                <Text>
                  <strong>FREE</strong>
                </Text>
              </TextWrapper>
            </LineItem>
          )}
        </FontsWrapper>
      </CartWrapper>
      <SubtotalWrapper>
        <H3>Subtotal</H3>
        <H3>${priceCalculation}</H3>
      </SubtotalWrapper>
      <Checkout
        fontTitle={font.name}
        fonts={selectedFonts}
        license={selectedLicense}
      />
    </Wrapper>
  );
};

export default Cart;
