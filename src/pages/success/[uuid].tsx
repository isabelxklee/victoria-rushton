import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import PageTemplate from '../../components/PageTemplate';
import { Button, ColumnFlex, H2, Text, TextLink } from '../../styles';

const TextWrapper = styled(ColumnFlex)`
  gap: 40px;
  margin-top: 40px;
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
    console.log(uuid);
  };

  const URL = useMemo(() => {
    return `${process.env.GATSBY_LINK}/success/${uuid}`;
  }, [uuid]);

  return (
    <PageTemplate>
      <H2>Thank you for your purchase!</H2>
      <Button onClick={() => handleDownload()}>Download files</Button>
      <TextWrapper>
        <Text>Here is your unique purchase link:</Text>{' '}
        <TextLink href={URL} target="_blank">
          {' '}
          {URL}
        </TextLink>
        <Text>
          You can always come back to this link and download your font files.
          Feel free to email Victoria at{' '}
          <TextLink href="mailto:hello@victoriarushton.com">
            hello@victoriarushton.com
          </TextLink>{' '}
          if you have any questions.
        </Text>
      </TextWrapper>
    </PageTemplate>
  );
};

export default Success;
