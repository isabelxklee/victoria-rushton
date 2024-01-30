import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS, COLORS, Flex, SmallText } from '../styles';

import { ExternalLink } from './Links';

const Wrapper = styled(Flex)`
  background-color: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  padding: 20px 40px;
  height: 28px;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding: 20px;
  }

  @media (max-width: ${BREAKPOINTS.SMALL}) {
    height: 48px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <SmallText>
        Victoria Rushton 2023. See me on{' '}
        <ExternalLink light={true} url="https://twitter.com/victoriaalissia">
          Twitter
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink
          light={true}
          url="https://www.instagram.com/victoriaalissia/">
          Instagram
        </ExternalLink>
        .
      </SmallText>
    </Wrapper>
  );
};

export default Footer;
