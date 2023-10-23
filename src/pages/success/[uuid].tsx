import React, { useEffect, useState } from 'react';

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
  }, [uuid]);

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
