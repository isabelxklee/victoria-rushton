import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import PageTemplate from '../../components/PageTemplate';
import { Button, ColumnFlex, H2, Text, TextLink } from '../../styles';

const Wrapper = styled.div`
  padding: 120px 160px;
`;

const TextWrapper = styled(ColumnFlex)`
  gap: 20px;
  margin-bottom: 40px;
`;

const Success = () => {
  const [uuid, setUuid] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.GATSBY_SERVER_URL}/uuid`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await response.json();

      setUuid(data.uuid);
    };

    fetchData();
  }, [uuid]);

  const handleDownload = () => {
    fetch(`${process.env.GATSBY_SERVER_URL}/download-font-files`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
  };

  const URL = useMemo(() => {
    return `${process.env.GATSBY_LINK}/success/${uuid}`;
  }, [uuid]);

  return (
    <PageTemplate>
      <Wrapper>
        <H2>Thank you for your purchase!</H2>
        <TextWrapper>
          <Text>
            Here is your unique purchase link:
            <TextLink href={URL} target="_blank">
              {' '}
              {URL}
            </TextLink>
            .
          </Text>
          <Text>
            You can always come back to this link and download your font files.
            Feel free to email Victoria at{' '}
            <TextLink href="mailto:hello@victoriarushton.com">
              hello@victoriarushton.com
            </TextLink>{' '}
            if you have any questions!
          </Text>
        </TextWrapper>
        <Button onClick={() => handleDownload()}>Download font files</Button>
      </Wrapper>
    </PageTemplate>
  );
};

export default Success;
