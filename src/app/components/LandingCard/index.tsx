import React from 'react';
import { StyledLandingCard } from './styles';

interface LandingCardTypes {
  data: string,
  message: string
} 

export const LandingCard = ({ data, message }: LandingCardTypes) => {

  return (
    <StyledLandingCard>
      <p className="message">Más de</p>
      <p className="data">{data}</p>
      <p className="message">{message}</p>
    </StyledLandingCard>
  );
};
