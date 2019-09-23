const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
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
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    contentBase: 'dist',
    noInfo: true,
    clientLogLevel: 'silent'
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            limit: 10 * 1024
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
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
          { loader: 'sass-loader', options: { sourceMap: true } }
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
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/',
      reload: false,
      notify: false
    })
  ]
};
