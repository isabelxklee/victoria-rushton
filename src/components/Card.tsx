import React, { ReactElement } from 'react';

import { H3 } from '../styles';

interface CardProps {
  children: ReactElement;
  title: string;
}

const Card = ({ children, title }: CardProps) => {
  return (
    <>
      <H3>{title}</H3>
      {children}
    </>
  );
};

export default Card;
