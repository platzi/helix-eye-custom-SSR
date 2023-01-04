const path = require('path')
const dotenv = require('dotenv')
const nodeExternals = require('webpack-node-externals')

dotenv.config()

const mode = process.env.NODE_ENV ?? 'production'
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  name: 'server',
  entry: './src/server/index.ts',
  target: "node",
  mode,
  stats: 'errors-only',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
                minify: !isDev,
              }
            }
          }
        },
        exclude: /node_modules/,
      },
    ]
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};