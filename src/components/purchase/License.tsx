/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { FontType } from '../../pages';
import {
  BREAKPOINTS,
  COLORS,
  ColumnFlex,
  Flex,
  H3,
  Text,
  TextLink
} from '../../styles';
import { Select } from '../sharedStyles';

import Cart from './Cart';
import { SimpleFontType } from './PurchaseFlow';

interface CheckoutResource {
  linkText: string;
  url: string;
}

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

const Card = styled.div`
  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  border-radius: 20px;
  padding: 60px;
  margin-top: 60px;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    margin-top: 0;
  }
`;

const Wrapper = styled(Flex)`
  gap: 20px;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    flex-direction: column;
    margin-top: 60px;
  }
`;

const LeftWrapper = styled(Card)`
  width: 30%;
  height: 100%;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    width: auto;
  }
`;

const RightWrapper = styled(Card)`
  flex: 1;
`;

const Left = styled(ColumnFlex)`
  gap: 20px;
`;

const Right = styled(ColumnFlex)`
  gap: 10px;
`;

const BulletPointText = styled(Text)`
  line-height: 1.8;
`;

const StyledTextLink = styled(TextLink)`
  color: ${COLORS.WHITE};
  font-weight: 300;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    opacity: 0.5;
  }
`;

const ResourcesWrapper = styled.div`
  margin-top: 20px;
`;

const License = ({ font, removeFont, selectedFonts }: LicenseProps) => {
  const data = useStaticQuery(pageQuery);
  const licenses = data.allContentfulLicense.nodes;
  const checkoutResources = data.allContentfulCheckoutResource.nodes;
  const [selectedLicense, setSelectedLicense] = useState<LicenseType>(
    licenses[0]
  );

  return (
    <Wrapper>
      <LeftWrapper>
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
                  desktop workstations
                </BulletPointText>
                <BulletPointText>
                  • {selectedLicense.webVisitors.toLocaleString()} web visitors
                  per month
                </BulletPointText>
                <BulletPointText>
                  • {selectedLicense.eBooks.toLocaleString()} e-books
                </BulletPointText>
              </>
            )}
          </div>
          <ResourcesWrapper>
            <Text>Resources</Text>
            {checkoutResources.map(
              (resource: CheckoutResource, index: number) => (
                <StyledTextLink key={index} href={resource.url} target="_blank">
                  {resource.linkText} <br />
                </StyledTextLink>
              )
            )}
          </ResourcesWrapper>
        </Left>
      </LeftWrapper>
      <RightWrapper>
        <Right>
          <Cart
            font={font}
            removeFont={removeFont}
            selectedFonts={selectedFonts}
            selectedLicense={selectedLicense}
          />
        </Right>
      </RightWrapper>
    </Wrapper>
  );
};

export default License;

const pageQuery = graphql`
  query {
    allContentfulCheckoutResource {
      nodes {
        linkText
        url
      }
    }
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
