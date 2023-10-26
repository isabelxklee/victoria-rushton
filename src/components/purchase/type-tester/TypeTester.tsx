import React, { useEffect, useState } from 'react';

import { FontType } from '../../../pages';
import { SimpleFontType } from '../PurchaseFlow';

import TypeInput from './TypeInput';
import TypePreview from './TypePreview';

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

  useEffect(() => {
    if (previewText.length < 1) {
      setPreviewText('Hello world, this is Victoria Rushton.');
    }
  }, [previewText.length]);

  return (
    <>
      <TypeInput setPreviewText={setPreviewText} setSize={setSize} />
      <TypePreview
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
