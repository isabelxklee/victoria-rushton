import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import DownloadForm from '../components/DownloadForm';
import PageTemplate from '../components/PageTemplate';
import { H2, Text } from '../styles';

const Wrapper = styled.div`
  padding: 60px 0;
`;

interface DownloadTrialFontsProps {
  data: {
    contentfulFont: {
      name: string;
      slug: string;
    };
  };
}

const DownloadTrialFonts = ({ data }: DownloadTrialFontsProps) => {
  const font = data.contentfulFont;

  console.log(font);

  return (
    <PageTemplate>
      <Wrapper>
        <H2>Download trial fonts</H2>
        <Text>
          You will receive an email containing all trial font files once you’ve
          submitted the form.
        </Text>
        <DownloadForm font={font.name} />
      </Wrapper>
    </PageTemplate>
  );
};

export default DownloadTrialFonts;

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulFont(slug: { eq: $slug }) {
      name
      slug
    }
  }
`;
