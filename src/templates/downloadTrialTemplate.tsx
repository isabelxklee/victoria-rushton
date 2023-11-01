import React from 'react';
import styled from 'styled-components';

import PageTemplate from '../components/PageTemplate';
import { H2 } from '../styles';

const Wrapper = styled.div`
  padding: 60px 0;
`;

const DownloadTrialTemplate = () => {
  return (
    <PageTemplate>
      <Wrapper>
        <H2>Download trial fonts</H2>
      </Wrapper>
    </PageTemplate>
  );
};

export default DownloadTrialTemplate;
