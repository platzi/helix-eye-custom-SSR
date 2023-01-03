import React from 'react';
import { StyledAstronaut } from './styles';

const ASTRONAUT_IMAGE = "https://i.imgur.com/tBkWIfP.png"

export const AstronautSection = () => {
  return (
    <StyledAstronaut>
      <div className="background" />
      <div className="picture">
        <img src={ASTRONAUT_IMAGE} alt="astronaut ilustration" />
      </div>
    </StyledAstronaut>
  )
}