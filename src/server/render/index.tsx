import React from 'react';
import { App } from '../../app/containers/App';
import { StaticRouter } from 'react-router-dom/server'
import { renderToString } from 'react-dom/server'
import { template } from './template';

export const render = (url: string, initialProps={}) => {
  const stream = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )

  const html = template(stream, initialProps)

  return html
}