/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useCallback, useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { Font } from '../pages';
import { Button, COLORS, ColumnFlex, H3, RowFlex, Text } from '../styles';

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
  const [selectedLicense, setSelectedLicense] = useState<LicenseItem>();
  const [selectedFonts, setSelectedFonts] = useState<FontWeight[]>([]);

  useEffect(() => {
    setSelectedLicense(licenses[0]);
  }, [licenses]);

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
          <div>
            <H3>Select License</H3>
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
          <div>
            <H3>Select Fonts</H3>
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
          <H3>Cart</H3>
          {selectedLicense && <Text>{selectedLicense.title} License</Text>}
          {selectedFonts.length > 0 &&
            selectedFonts.map((weight: FontWeight, index: number) => (
              <StyledRowFlex key={index}>
                <Text onClick={() => removeWeight(weight)}>
                  {font.name} {weight.title}
                </Text>
                <Text>${selectedLicense?.price}</Text>
              </StyledRowFlex>
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
