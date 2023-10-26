import React, { useCallback, useMemo, useState } from 'react';

import { FontType } from '../../pages';

import License from './License';
import TypeTester from './type-tester/TypeTester';

interface PurchaseFlowProps {
  font: FontType;
}

export interface SimpleFontType {
  slant: string;
  weightTitle: string;
  weightValue: number;
}

const PurchaseFlow = ({ font }: PurchaseFlowProps) => {
  const [selectedFonts, setSelectedFonts] = useState<SimpleFontType[]>([]);

  const availableFonts = useMemo(() => {
    const arr: SimpleFontType[] = [];

    if (font.slants.length < 2) {
      return font.weights.map(fontOption => {
        return {
          slant: 'Roman',
          weightTitle: fontOption.title,
          weightValue: fontOption.value
        };
      });
    } else {
      for (let i = 0; i < font.weights.length; i++) {
        for (let y = 0; y < font.slants.length; y++) {
          const obj = {
            slant: font.slants[y].title,
            weightTitle: font.weights[i].title,
            weightValue: font.weights[i].value
          };
          arr.push(obj);
        }
      }
    }

    return arr;
  }, [font.slants, font.weights]);

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
      <TypeTester
        addFont={addFont}
        availableFonts={availableFonts}
        font={font}
        removeFont={removeFont}
        selectedFonts={selectedFonts}
      />
      <License
        font={font}
        removeFont={removeFont}
        selectedFonts={selectedFonts}
      />
    </>
  );
};

export default PurchaseFlow;
