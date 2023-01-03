import React from 'react';
import { StyledHero } from './styles'

const LOGO_IMAGE = "https://i.imgur.com/w9Smf8E.png"
const LOGO_IMAGE_WIDE = "https://i.imgur.com/7D6PLq3.png"

export const Hero = () => {
  return (
    <StyledHero>
      <h1>helix eye</h1>
      <picture>
        <source srcSet={LOGO_IMAGE_WIDE} media="(min-width: 600px)"/>
        <img src={LOGO_IMAGE} alt="helix eye" />
      </picture>
      <p>
        Toda el conocimiento del espacio en un solo lugar
      </p>
    </StyledHero>
  )
}