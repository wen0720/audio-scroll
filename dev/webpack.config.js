import path from 'path';
import { fileURLToPath } from 'url';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, 'index.js'),
    react: path.resolve(__dirname, 'react.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[fullhash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                modules: false,
                targets: {
                  browsers: [
                    '> 5%',
                    'last 2 versions',
                  ]
                }
              }],
              ['@babel/preset-react', {
                runtime: 'automatic'
              }]
            ],
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'react_dev.html'),
      filename: 'react_dev.html',
      chunks: ['react'],
    }),
  ],
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 3000,
  },
};
