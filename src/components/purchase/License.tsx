/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { FontType } from '../../pages';
import { COLORS, ColumnFlex, H3, Text } from '../../styles';
import { Select, StyledRowFlex } from '../sharedStyles';

import Cart from './Cart';
import { SimpleFontType } from './PurchaseFlow';

export interface LicenseProps {
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

const BulletPointText = styled(Text)`
  line-height: 1.8;
`;

const License = ({ font, removeFont, selectedFonts }: LicenseProps) => {
  const data = useStaticQuery(pageQuery);
  const licenses = data.allContentfulLicense.nodes;
  const [selectedLicense, setSelectedLicense] = useState<LicenseType>(
    licenses[0]
  );

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
          <div>
            <H3>Resources</H3>
          </div>
        </Left>
        <Right>
          <Cart
            font={font}
            removeFont={removeFont}
            selectedFonts={selectedFonts}
            selectedLicense={selectedLicense}
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
