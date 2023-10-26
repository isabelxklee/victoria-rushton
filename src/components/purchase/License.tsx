/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useMemo, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { FontType } from '../../pages';
import { COLORS, ColumnFlex, H3, RowFlex, Text } from '../../styles';

import Checkout from './Checkout';
import { SimpleFontType } from './PurchaseFlow';
import { Select } from '../sharedStyles';

interface LicenseProps {
  font: FontType;
  removeFont: (arg0: SimpleFontType) => void;
  selectedFonts: SimpleFontType[];
}

export interface LicenseType {
  desktopWorkstations: number;
  eBooks: number;
  price: number;
  title: string;
  webVisitors: number;
}

const StyledRowFlex = styled(RowFlex)`
  justify-content: space-between;
`;

const LineItem = styled(StyledRowFlex)`
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.4;
  }
`;

const Left = styled(ColumnFlex)`
  width: 50%;
  padding-right: 60px;
  gap: 20px;
`;

const Right = styled.div`
  width: 50%;
  border-left: 2px solid ${COLORS.BLACK};
  padding-left: 60px;
`;

const CartWrapper = styled(ColumnFlex)`
  gap: 8px;
`;

const License = ({ font, removeFont, selectedFonts }: LicenseProps) => {
  const data = useStaticQuery(pageQuery);
  const licenses = data.allContentfulLicense.nodes;
  const [selectedLicense, setSelectedLicense] = useState<LicenseType>(
    licenses[0]
  );

  const priceCalculation = useMemo(() => {
    return selectedLicense ? selectedFonts.length * selectedLicense.price : 0;
  }, [selectedFonts.length, selectedLicense]);

  return (
    <div>
      <h2>License this font</h2>
      <StyledRowFlex>
        <Left>
          <div>
            <H3>Select License</H3>
            <Select
              $width="fixed"
              onChange={event =>
                setSelectedLicense(JSON.parse(event.target.value))
              }>
              {licenses.map((license: LicenseType, index: number) => (
                <option key={index} value={JSON.stringify(license)}>
                  {license.title}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <H3>For uses, not exceeding:</H3>
            {selectedLicense && (
              <>
                <Text>
                  {selectedLicense.desktopWorkstations.toLocaleString()} Desktop
                  Workstations
                </Text>
                <Text>
                  {selectedLicense.webVisitors.toLocaleString()} Web Visitors
                </Text>
                <Text>{selectedLicense.eBooks.toLocaleString()} E-Books</Text>
              </>
            )}
          </div>
        </Left>
        <Right>
          <H3>Cart</H3>
          <CartWrapper>
            {selectedLicense && <Text>{selectedLicense.title} License</Text>}
            {selectedFonts.map((fontOption: SimpleFontType, index) => (
              <LineItem key={index} onClick={() => removeFont(fontOption)}>
                <Text>
                  {font.name} {fontOption.weightTitle}{' '}
                  {fontOption.slant !== 'Roman' && fontOption.slant}
                </Text>
                <RowFlex style={{ gap: '32px' }}>
                  <Text>${selectedLicense?.price}</Text>
                  <img
                    alt=""
                    src="https://images.ctfassets.net/6l1e28rigfdw/4vHJUE4MABJFmeBhAoowDT/2aefe149687c6b52efe8185a49deb59a/icon-remove.svg"
                  />
                </RowFlex>
              </LineItem>
            ))}
          </CartWrapper>
          <StyledRowFlex>
            <H3>Subtotal</H3>
            <H3>${priceCalculation}</H3>
            <Checkout
              fontTitle={font.name}
              fonts={selectedFonts}
              license={selectedLicense}
            />
          </StyledRowFlex>
        </Right>
      </StyledRowFlex>
    </div>
  );
};

export default License;

const pageQuery = graphql`
  query {
    allContentfulLicense(sort: { price: ASC }) {
      nodes {
        title
        price
        desktopWorkstations
        eBooks
        webVisitors
      }
    }
  }
`;
