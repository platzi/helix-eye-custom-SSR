const express = require('express');
const path = require('path');
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.info(`Running app in production mode in http://localhost:${PORT}`)
});