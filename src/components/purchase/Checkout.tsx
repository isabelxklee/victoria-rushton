/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components';

import { Flex, FONT_WEIGHTS } from '../../styles';
import { StyledButton } from '../sharedStyles';

import { LicenseType } from './License';
import { SimpleFontType } from './PurchaseFlow';

const Wrapper = styled(Flex)`
  justify-content: flex-end;
  margin-top: 10px;
`;

const CheckoutButton = styled(StyledButton)<{ $active: boolean }>`
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  cursor: ${({ $active }) => ($active ? 'pointer' : 'default')};
  pointer-events: ${({ $active }) => ($active ? 'auto' : 'none')};
  width: 100%;
  font-size: 20px;
  font-weight: ${FONT_WEIGHTS.MEDIUM};
`;

interface CheckoutProps {
  fontTitle: string;
  fonts?: SimpleFontType[];
  license?: LicenseType;
}

const Checkout = ({ fontTitle, fonts, license }: CheckoutProps) => {
  const [buttonLabel, setButtonLabel] = useState('Checkout');

  useEffect(() => {
    setButtonLabel(
      license && license.title === 'Trial' ? 'Download' : 'Checkout'
    );
  }, [license]);

  const handleSubmit = async (event: any) => {
    setButtonLabel('Loading...');

    event.preventDefault();

    const stripe: any = await loadStripe(process.env.GATSBY_STRIPE_SECRET!);
    const response = await fetch(
      `${process.env.GATSBY_SERVER_URL}/create-checkout-session`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          font: fontTitle,
          selectedFonts: fonts,
          license: license
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
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <CheckoutButton
          $active={!fonts.length < 1}
          $status={true}
          type="submit">
          {buttonLabel}
        </CheckoutButton>
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
            $active={!selectedLicense || selectedFonts.length < 1}>
            {buttonLabel}
          </Button>
        </form>
      )} */}
    </Wrapper>
  );
};

export default Checkout;
