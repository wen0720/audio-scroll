import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';

export default {
  mode: isProduction ? 'production' : 'development',
  entry: {
    index: path.resolve(__dirname, 'src/dom.js'),
    react: path.resolve(__dirname, 'src/react/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[fullhash].js',
    clean: true,
    library: {
      type: 'umd',
      name: 'scrollAudio',
    }
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      module: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      module: 'react-dom'
    }
    // 'react': {
    //   module: 'react'
    // },
    // 'react-dom': {
    //   module: 'react-dom'
    // }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
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
            ]
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
};
