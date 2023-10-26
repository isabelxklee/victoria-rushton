import React, { useState } from 'react';

import { FontType } from '../../../pages';

import TypeTesterInput from './TypeInput';
import TypeTesterPreview from './TypePreview';
import { SimpleFontType } from '../PurchaseFlow';

export interface TypeTesterProps {
  addFont: (arg0: SimpleFontType) => void;
  availableFonts: SimpleFontType[];
  font: FontType;
  removeFont: (arg0: SimpleFontType) => void;
  selectedFonts: SimpleFontType[];
}

const TypeTester = ({
  addFont,
  availableFonts,
  font,
  removeFont,
  selectedFonts
}: TypeTesterProps) => {
  const [size, setSize] = useState<string>('40');
  const [previewText, setPreviewText] = useState<string>(
    'Hello world, this is Victoria Rushton.'
  );

  return (
    <>
      <TypeTesterInput />
      <TypeTesterPreview
        addFont={addFont}
        availableFonts={availableFonts}
        font={font}
        previewText={previewText}
        removeFont={removeFont}
        selectedFonts={selectedFonts}
        size={size}
      />
    </>
  );
};

export default TypeTester;
