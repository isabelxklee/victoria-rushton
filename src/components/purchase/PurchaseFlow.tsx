import React, { useCallback, useMemo, useState } from 'react';

import { FontType } from '../../pages';
import { FontWeightType } from '../../templates/fontPageTemplate';

import TypeTester from './type-tester/TypeTester';
import License from './License';

interface PurchaseFlowProps {
  font: FontType;
  sortedWeights: FontWeightType[];
}

export interface SimpleFontType {
  slant: string;
  weightTitle: string;
  weightValue: number;
}

const PurchaseFlow = ({ font, sortedWeights }: PurchaseFlowProps) => {
  const [selectedFonts, setSelectedFonts] = useState<SimpleFontType[]>([]);

  const availableFonts = useMemo(() => {
    const arr: SimpleFontType[] = [];

    if (font.slants.length < 2) {
      return sortedWeights.map(fontOption => {
        return {
          slant: 'Roman',
          weightTitle: fontOption.title,
          weightValue: fontOption.value
        };
      });
    } else {
      for (let i = 0; i < sortedWeights.length; i++) {
        for (let y = 0; y < font.slants.length; y++) {
          const obj = {
            slant: font.slants[y].title,
            weightTitle: sortedWeights[i].title,
            weightValue: sortedWeights[i].value
          };
          arr.push(obj);
        }
      }
    }

    return arr;
  }, [font.slants, sortedWeights]);

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
