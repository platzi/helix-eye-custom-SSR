import React from 'react';
import { Spinner, SpinnerLayout } from './styles';

export const LoadingSpinner = () => (
  <SpinnerLayout>
    <Spinner>
      <div />
      <div />
      <div />
      <div />
    </Spinner>
  </SpinnerLayout>
);