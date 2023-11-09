import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import { FontType } from '../../pages';
import { H2 } from '../../styles';
import { FontWeightType } from '../../templates/fontPageTemplate';
import TypeTester from '../type-tester/TypeTester';

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

const Wrapper = styled.div`
  padding: 40px 0;
`;

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
    <Wrapper>
      <H2>Font styles</H2>
      <TypeTester
        addFont={addFont}
        availableFonts={availableFonts}
        font={font}
        removeFont={removeFont}
        selectedFonts={selectedFonts}
        setSelectedFonts={setSelectedFonts}
      />
      <License
        font={font}
        removeFont={removeFont}
        selectedFonts={selectedFonts}
        setSelectedFonts={setSelectedFonts}
      />
    </Wrapper>
  );
};

export default PurchaseFlow;
