import React from 'react';

import { FontType } from '../pages';

import TypeTesterInput from './type-tester/TypeTesterInput';
import License from './License';

interface PurchaseFlowProps {
  font: FontType;
}

const PurchaseFlow = ({ font }: PurchaseFlowProps) => {
  return (
    <>
      <TypeTesterInput font={font} />
      <License font={font} />
    </>
  );
};

export default PurchaseFlow;
