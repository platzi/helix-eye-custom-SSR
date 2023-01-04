import React from 'react';
import styled from 'styled-components';
import { GalaxiesLayout } from '../components/GalaxiesLayout';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { LOADING_STATUS, ERROR_STATUS, useFetchGalaxiesInfo } from '../hooks/useFetchGalaxiesInfo';

const GalaxiesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 3rem;
  width: calc(100% - 6rem);
`

export const Galaxies = (props) => {

  const renderLayout = () => {
    if (props.galaxies.length === 0) return <LoadingSpinner />

    return <GalaxiesLayout galaxies={props.galaxies} />
  }

  return (
    <GalaxiesPageWrapper>
      <h1>Galaxias</h1>
      {renderLayout()}
    </GalaxiesPageWrapper>
  );
}

Galaxies.defaultProps = {
  galaxies: []
}