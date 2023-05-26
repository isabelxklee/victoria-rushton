import React, { useState } from 'react';

import { Font } from '../pages';

const TypeTester = ({ font }: Font) => {
  const [darkMode, setDarkMode] = useState(false);

  console.log(font);

  return (
    <>
      <div>
        <p>Weight</p>
        <p>Size</p>
      </div>
      <div>
        <textarea>hello world</textarea>
      </div>
    </>
  );
};

export default TypeTester;
