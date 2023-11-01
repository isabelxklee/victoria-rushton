import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import DownloadForm from '../components/DownloadForm';
import PageTemplate from '../components/PageTemplate';
import { H2 } from '../styles';

const Wrapper = styled.div`
  padding: 60px 0;
`;

const DownloadTrialTemplate = ({ data }) => {
  const font = data.contentfulFont.name;

  return (
    <PageTemplate>
      <Wrapper>
        <H2>Download trial fonts</H2>
        <DownloadForm font={font} />
      </Wrapper>
    </PageTemplate>
  );
};

export default DownloadTrialTemplate;

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulFont(slug: { eq: $slug }) {
      name
    }
  }
`;
