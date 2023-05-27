import React from 'react';

import { Text } from '../styles';
import { PreviewTextItem } from '../templates/fontPageTemplate';

interface PreviewTextProps {
  text: PreviewTextItem;
}

const PreviewText = ({ text }: PreviewTextProps) => {
  console.log(text);
  return (
    <div>
      <Text>{text.font.name}</Text>
    </div>
  );
};

export default PreviewText;
