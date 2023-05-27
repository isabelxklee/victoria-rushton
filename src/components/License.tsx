import React from 'react';

import { Font } from '../pages';

interface LicenseProps {
  font: Font;
}

const License = ({ font }: LicenseProps) => {
  console.log(font);
  return <div></div>;
};

export default License;
