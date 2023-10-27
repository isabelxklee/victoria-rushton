/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useMemo, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { FontType } from '../../pages';
import { COLORS, ColumnFlex, H3, RowFlex, Text } from '../../styles';
import { Select } from '../sharedStyles';

import Checkout from './Checkout';
import { SimpleFontType } from './PurchaseFlow';

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

const Wrapper = styled.div`
  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  border-radius: 20px;
  padding: 60px;
  margin-top: 60px;
`;

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
  width: 60%;
  padding-right: 60px;
  gap: 20px;
`;

const Right = styled.div`
  width: 40%;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const CartWrapper = styled(ColumnFlex)`
  gap: 8px;
`;

const BulletPointText = styled(Text)`
  line-height: 1.8;
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
    <Wrapper>
      <StyledRowFlex>
        <Left>
          <H3>Select a license</H3>
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
          <div>
            <Text>For uses, not exceeding:</Text>
            {selectedLicense && (
              <>
                <BulletPointText>
                  • {selectedLicense.desktopWorkstations.toLocaleString()}{' '}
                  Desktop Workstations
                </BulletPointText>
                <BulletPointText>
                  • {selectedLicense.webVisitors.toLocaleString()} Web Visitors
                </BulletPointText>
                <BulletPointText>
                  • {selectedLicense.eBooks.toLocaleString()} E-Books
                </BulletPointText>
              </>
            )}
          </div>
        </Left>
        <Right>
          <H3>Cart</H3>
          <CartWrapper>
            {selectedLicense && (
              <Text>License size - {selectedLicense.title}</Text>
            )}
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
        </Right>
      </StyledRowFlex>
    </Wrapper>
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
