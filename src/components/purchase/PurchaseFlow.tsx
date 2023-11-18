/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useMemo, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { FontType } from '../../pages';
import { H2 } from '../../styles';
import TypeTester from '../type-tester/TypeTester';

import License from './License';

interface PurchaseFlowProps {
  font: FontType;
}

export interface SimpleFontType {
  asset: any;
  slant: string;
  weightTitle: string;
  weightValue: number;
}

const Wrapper = styled.div`
  padding: 40px 0;
`;

const PurchaseFlow = ({ font }: PurchaseFlowProps) => {
  const data = useStaticQuery(pageQuery);
  const assets = data.allContentfulAsset.nodes;

  const [selectedFonts, setSelectedFonts] = useState<SimpleFontType[]>([]);

  const findAsset = useCallback(
    (weight: string, slant: string) => {
      const formattedFontName = font.name.split(' ').join('-');
      const filename =
        slant === 'Roman'
          ? `${formattedFontName}-${weight}`
          : `${formattedFontName}-${weight}-${slant}`;

      return assets.find(
        (asset: any) =>
          asset.filename === `${filename}.zip` &&
          asset.mimeType === 'application/zip'
      );
    },
    [assets, font.name]
  );

  const availableFonts = useMemo(() => {
    const arr: any[] = [];

    font.slants.forEach(slant => {
      font.weights.forEach(weight => {
        const obj: any = {
          fontTitle: font.name,
          slant: slant.title,
          weightTitle: weight.title,
          weightValue: weight.value,
          asset: findAsset(weight.title, slant.title)
        };

        arr.push(obj);
      });
    });

    return arr;
  }, [findAsset, font.name, font.slants, font.weights]);

  console.log(availableFonts);

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
      {/* <TypeTester
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
      /> */}
    </Wrapper>
  );
};

export default PurchaseFlow;

const pageQuery = graphql`
  query {
    allContentfulAsset {
      nodes {
        mimeType
        filename
        url
      }
    }
  }
`;
