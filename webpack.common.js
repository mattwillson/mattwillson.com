const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    app: './src/js/index.js',
    fullscreen: './src/js/fullscreen.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // removes unused files from the /dist folder before each build
    new CleanWebpackPlugin(),

    /**
     * generates HTML file with all webpack bundles
     * in the <body> using <script> tags
     */
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/img/liverbird.png',
      minify: true
    }),

    // creates a CSS file per JS file which contains CSS
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  optimization: {
    minimizer: [
      // minifies CSS files
      new OptimizeCSSAssetsPlugin({}),

      // minifies JS files
      new TerserJSPlugin({
        sourceMap: true
      })
    ]
  },
  module: {
    rules: [
      {
        // JavaScript files
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          // transpiles modern JavaScript for older browsers
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        // Sass files
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            // translates CSS into CommonJS
            loader: 'css-loader',
            options: {
              sourceMap: true,

              // recommended in postcss-loader docs
              importLoaders: 1
            }
          },
          {
            // enables autoprefixer
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: [
                require('autoprefixer')()
              ]
            }
          },
          {
            // compiles Sass to CSS using node-sass
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        // handles image loading for html files
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src']
          }
        }
      },
      {
        // image files
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        // font files
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};