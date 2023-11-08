import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Confirmation from '../components/Confirmation';
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
  const [emailSent, setEmailSent] = useState(false);
  const font = data.contentfulFont;

  useEffect(() => {
    setEmailSent(false);
  }, []);

  console.log(emailSent);

  return (
    <PageTemplate>
      <Wrapper>
        {emailSent ? (
          <Confirmation />
        ) : (
          <DownloadForm font={font.name} setEmailSent={setEmailSent} />
        )}
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
