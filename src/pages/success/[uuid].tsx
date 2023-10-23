import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful-management';

// import { ExternalLink } from '../components/Links';
import PageTemplate from '../../components/PageTemplate';
// import { FlexContainer } from '../components/styles';
// import { BREAKPOINTS, Button, COLORS, FONT_WEIGHTS, H2, Text } from '../styles';

const Success = () => {
  const [uuid, setUuid] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.GATSBY_SERVER_URL}/uuid`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await response.json();

      setUuid(data.message);
    };

    fetchData();

    const createEntry = () => {
      const client = createClient({
        accessToken: 'CFPAT-9gSmzdu2f4ioLPkjvUGimqjrwfFmzEPUlqbjyGqOFb4'
      });

      client.getSpace('6l1e28rigfdw').then(space => {
        space
          .getEnvironment('master')
          .then(environment => {
            environment.createEntry('customerLink', {
              fields: {
                customerName: 'testing',
                customerEmail: 'testing@gmail.com',
                url: uuid
              }
            });
          })
          .then(entry => console.log(entry))
          .catch(console.error);
      });
    };

    createEntry();
  }, [uuid]);

  // save UUID to contentful

  const handleDownload = () => {
    console.log(uuid);
  };

  return (
    <PageTemplate>
      <p>Congratulations on your purchase!</p>
      <button onClick={() => handleDownload()}>Download files</button>
    </PageTemplate>
  );
};

export default Success;
