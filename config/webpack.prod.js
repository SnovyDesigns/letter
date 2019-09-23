const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sortCSSmq = require('sort-css-media-queries');

module.exports = {
  entry: {
    main: './index.js',
    homePageAnimations: './src/js/animations/masterHomePage.js',
    updatesPageAnimations: './src/js/animations/masterUpdatesPage.js',
    pricingPageAnimations: './src/js/animations/masterPricingPage.js',
    authenticationPageAnimations:
      './src/js/animations/masterAuthenticationPage.js'
  },
  output: {
    filename: '[name]-[contenthash]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: ''
  },
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: function() {
                return [
                  require('css-mqpacker')({ sort: sortCSSmq }),
                  require('postcss-combine-duplicated-selectors')({
                    removeDuplicatedProperties: true
                  }),
                  require('autoprefixer')
                ];
              }
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      },
      {
        test: /\.pug$/,
        use: ['pug-loader']
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name]-[contenthash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      chunks: ['main', 'homePageAnimations']
    }),
    new HtmlWebpackPlugin({
      template: './src/updates.pug',
      filename: 'updates.html',
      chunks: ['main', 'updatesPageAnimations']
    }),
    new HtmlWebpackPlugin({
      template: './src/pricing.pug',
      filename: 'pricing.html',
      chunks: ['main', 'pricingPageAnimations']
    }),
    new HtmlWebpackPlugin({
      template: './src/authentication.pug',
      filename: 'authentication.html',
      chunks: ['main', 'authenticationPageAnimations']
    }),
    new CompressionPlugin({
      test: /\.(html|css|js|svg)/,
      algorithm: 'gzip'
    }),
    new BrotliPlugin({
      test: /\.(html|css|js|svg)$/
    })
  ]
};
