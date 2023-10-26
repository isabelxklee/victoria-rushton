import React, { useCallback, useState } from 'react';

import { FontType } from '../pages';

import TypeTesterInput from './type-tester/TypeTesterInput';
import License from './License';

interface PurchaseFlowProps {
  font: FontType;
}

export interface SimpleFontType {
  slant: string;
  value: number;
  weight: string;
}

const PurchaseFlow = ({ font }: PurchaseFlowProps) => {
  const [selectedFonts, setSelectedFonts] = useState<SimpleFontType[]>([]);

  const addFont = useCallback((item: SimpleFontType) => {
    setSelectedFonts((selectedFonts: SimpleFontType[]) =>
      selectedFonts.includes(item)
        ? selectedFonts.filter(font => font !== item)
        : [...selectedFonts, item]
    );
  }, []);

  const removeFont = useCallback((item: SimpleFontType) => {
    setSelectedFonts((selectedFonts: SimpleFontType[]) =>
      selectedFonts.filter(font => font !== item)
    );
  }, []);

  return (
    <>
      <TypeTesterInput addFont={addFont} font={font} removeFont={removeFont} />
      <License
        font={font}
        removeFont={removeFont}
        selectedFonts={selectedFonts}
      />
    </>
  );
};

export default PurchaseFlow;
