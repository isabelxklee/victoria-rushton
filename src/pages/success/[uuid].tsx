import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful-management';

// import { ExternalLink } from '../components/Links';
import PageTemplate from '../../components/PageTemplate';
// import { FlexContainer } from '../components/styles';
// import { BREAKPOINTS, Button, COLORS, FONT_WEIGHTS, H2, Text } from '../styles';

const Success = () => {
  const [uuid, setUuid] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.GATSBY_SERVER_URL}/purchase-info`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }
      );

      const data = await response.json();

      setUuid(data.uuid);
      setCustomerEmail(data.customerEmail);
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
                customerName: {
                  'en-US': 'testing'
                },
                customerEmail: {
                  'en-US': 'testing@gmail.com'
                },
                url: {
                  'en-US': `${process.env.GATSBY_SERVER_URL}/success/${uuid}`
                }
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
    console.log(uuid, customerEmail);
  };

  return (
    <PageTemplate>
      <p>Congratulations on your purchase!</p>
      <button onClick={() => handleDownload()}>Download files</button>
    </PageTemplate>
  );
};

export default Success;
