import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import DownloadForm from '../components/DownloadForm';
import PageTemplate from '../components/PageTemplate';
import { H2, Text } from '../styles';

const Wrapper = styled.div`
  padding: 60px 0;
`;

const DownloadTrialFonts = ({ data }) => {
  const allFonts = data.allContentfulFont.nodes;

  return (
    <PageTemplate>
      <Wrapper>
        <H2>Download trial fonts</H2>
        <Text>
          You will receive an email containing all trial font files once you’ve
          submitted the form.
        </Text>
        <DownloadForm allFonts={allFonts} />
      </Wrapper>
    </PageTemplate>
  );
};

export default DownloadTrialFonts;

export const pageQuery = graphql`
  query {
    allContentfulFont {
      nodes {
        name
      }
    }
  }
`;
