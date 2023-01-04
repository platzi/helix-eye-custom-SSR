import express, { Express, Request, Response } from 'express'
import { config } from './config';
import { template } from './render/template';

const app: Express = express();

app.get('*', (req: Request, res: Response) => {
  res.send(template(`<h1>Hola desde la ruta: ${req.url}</h1>`))
})

app.listen(config.PORT, () => {
  console.log(`Listening in http://localhost:${config.PORT}`)
})