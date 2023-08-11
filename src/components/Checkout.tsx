/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import { Button } from '../styles';

import { LicenseType, SimpleFontType } from './License';

interface CheckoutProps {
  fonts?: SimpleFontType[];
  license?: LicenseType;
}

const Checkout = ({ fonts, license }: CheckoutProps) => {
  const [buttonLabel, setButtonLabel] = useState('Checkout');

  useEffect(() => {
    setButtonLabel(
      selectedLicense && selectedLicense.title === 'Trial'
        ? 'Download'
        : 'Checkout'
    );
  }, [selectedLicense]);

  const handleSubmit = async (event: any) => {
    setButtonLabel('Loading...');

    event.preventDefault();

    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_SECRET);
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/create-checkout-session`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          font: currentFont.title,
          selectedFonts: selectedFonts,
          license: selectedLicense
        })
      }
    )
      .then(r => r.json())
      .then(session => stripe.redirectToCheckout({ sessionId: session.id }));

    if (!response) {
      console.log(response.error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Button
          type="submit"
          // $disabled={!selectedLicense || selectedFonts.length < 1}
        >
          {buttonLabel}
        </Button>
      </form>
      {/* {selectedLicense && selectedLicense.title === 'Trial' ? (
        <FormikForm
          selectedLicense={selectedLicense}
          selectedFonts={selectedFonts}
        />
      ) : (
        <form onSubmit={handleSubmit}>
          <Button
            type="submit"
            $disabled={!selectedLicense || selectedFonts.length < 1}>
            {buttonLabel}
          </Button>
        </form>
      )} */}
    </>
  );
};

export default Checkout;
