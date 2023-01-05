const { HotModuleReplacementPlugin } = require('webpack')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const mode = process.env.NODE_ENV ?? 'production'
const isDev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT

let entries = ['./src/app/index.tsx']
let plugins = []

if(isDev){
  entries.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true')
  plugins.push(new HotModuleReplacementPlugin())
}

module.exports = {
  name: 'client',
  entry: entries,
  mode,
  devtool: isDev ? 'eval-source-map' : undefined,
  stats: 'errors-only',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.js',
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
      {
        test: /\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ]
  },
  plugins,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    hot: true,
    port: PORT,
    open: true,
    historyApiFallback: true
  },
};