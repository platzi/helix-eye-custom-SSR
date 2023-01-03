import React from 'react';
import { LandingCard } from '../LandingCard';
import { StyledHighlitedContent } from './styles';

export const HighlightedContent = () => {
  return (
    <StyledHighlitedContent>
      <h2>Descubre todo el universo observable</h2>
      <p className="message">
        Con una sola búsqueda accede a todo el historial y archivos públicos
        recogidos por la NASA
      </p>
      <div className="cards-wrapper">
        <LandingCard data="1k" message="imágenes" />
        <LandingCard data="300" message="videos" />
        <LandingCard data="60" message="años de historia" />
      </div>
    </StyledHighlitedContent>
  );
};
