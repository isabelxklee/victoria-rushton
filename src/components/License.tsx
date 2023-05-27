/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useCallback, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { Font } from '../pages';
import { Button, COLORS, ColumnFlex, RowFlex, Text } from '../styles';

import { Select } from './sharedStyles';

interface LicenseProps {
  font: Font;
}

interface LicenseItem {
  desktopWorkstations: number;
  eBooks: number;
  price: number;
  title: string;
  webVisitors: number;
}

interface FontWeight {
  title: string;
  value: number;
}

const StyledRowFlex = styled(RowFlex)`
  justify-content: space-between;
`;

const Left = styled(ColumnFlex)`
  width: 50%;
  padding-right: 40px;
  gap: 20px;
`;

const Right = styled.div`
  width: 50%;
  border-left: 2px solid ${COLORS.BLACK};
  padding-left: 40px;
`;

const License = ({ font }: LicenseProps) => {
  const data = useStaticQuery(pageQuery);
  const licenses = data.allContentfulLicense.nodes;

  const [selectedLicense, setSelectedLicense] = useState<
    LicenseItem | undefined
  >(undefined);
  const [selectedFonts, setSelectedFonts] = useState<FontWeight[]>([]);

  const handleClick = useCallback((weight: FontWeight) => {
    setSelectedFonts((selectedFonts: FontWeight[]) =>
      selectedFonts.includes(weight)
        ? selectedFonts.filter(font => font !== weight)
        : [...selectedFonts, weight]
    );
  }, []);

  const removeWeight = useCallback((weight: FontWeight) => {
    setSelectedFonts((selectedFonts: FontWeight[]) =>
      selectedFonts.filter(font => font !== weight)
    );
  }, []);

  return (
    <div>
      <h2>License this font</h2>
      <StyledRowFlex>
        <Left>
          <label>Select License</label>
          <Select
            $width="fixed"
            onChange={event =>
              setSelectedLicense(JSON.parse(event.target.value))
            }>
            {licenses.map((license: LicenseItem, index: number) => (
              <option key={index} value={JSON.stringify(license)}>
                {license.title}
              </option>
            ))}
          </Select>

          <Text>For uses, not exceeding:</Text>

          <div>
            <label>Select Fonts</label>
            <ColumnFlex>
              {font.weights
                .sort((a, b) => a.value - b.value)
                .map((weight: FontWeight, index: number) => (
                  <Button key={index} onClick={() => handleClick(weight)}>
                    {weight.title}
                  </Button>
                ))}
            </ColumnFlex>
          </div>
        </Left>
        <Right>
          <Text>Cart</Text>
          {selectedLicense && <Text>License: {selectedLicense.title}</Text>}
          {selectedFonts.length > 0 &&
            selectedFonts.map((font: FontWeight, index: number) => (
              <Text key={index} onClick={() => removeWeight(font)}>
                {font.title}
              </Text>
            ))}
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
