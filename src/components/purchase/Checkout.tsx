/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components';

import { Button, Flex, FONT_WEIGHTS } from '../../styles';

import { LicenseType } from './License';
import { SimpleFontType } from './PurchaseFlow';

const Wrapper = styled(Flex)`
  justify-content: flex-end;
  margin-top: 10px;
`;

const CheckoutButton = styled(Button)<{ $active: boolean }>`
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  cursor: ${({ $active }) => ($active ? 'pointer' : 'default')};
  pointer-events: ${({ $active }) => ($active ? 'auto' : 'none')};
  width: 100%;
  font-weight: ${FONT_WEIGHTS.MEDIUM};
`;

interface CheckoutProps {
  fontTitle: string;
  fonts?: SimpleFontType[];
  license?: LicenseType;
}

const Checkout = ({ fontTitle, fonts, license }: CheckoutProps) => {
  const zipFiles = useMemo(() => {
    return fonts?.map(font => {
      return {
        filename: font.asset.filename,
        path: font.asset.url
      };
    });
  }, [fonts]);

  const handleSubmit = async (event: any) => {
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
          license: license,
          zipFiles: zipFiles
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
        <CheckoutButton $active={!fonts.length < 1} type="submit">
          Checkout
        </CheckoutButton>
      </form>
    </Wrapper>
  );
};

export default Checkout;
