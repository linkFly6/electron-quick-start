const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let common_config = {
  node: {
    __dirname: true
  },
  mode: process.env.ENV || 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        // options: {
          // configFile: path.resolve(__dirname, './src/renderer/tsconfig.json'),
        // }
        // exclude: [
        //   /node_modules/,
        //   path.resolve(__dirname, '')
        // ]
      },
      {
        test: /\.styl$/,
        // exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              // import: [path.resolve(__dirname, './renderer/style/base.styl')]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        // exclude: /node_modules\//,
        use: [
          'style-loader',
          'css-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     // 'plugins': [
          //     //   require('postcss-pxtorem')({ rootValue: 100, propWhiteList: [] })
          //     // ]
          //   }
          // }
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        // include: [resolve('renderer/assets/icons')],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('./', 'img/[name].[hash:7].[ext]')
        },
        // exclude: [/node_modules/],
      },
      {
        test: /\.(wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('./', 'media/[name].[hash:7].[ext]')
        },
        // exclude: /node_modules/,
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('./', 'fonts/[name].[hash:7].[ext]')
        },
        // exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/renderer'),
    }
  },
};

module.exports = [
  Object.assign({}, common_config, {
    target: 'electron-renderer',
    entry: {
      index: './src/renderer/index.tsx',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/renderer')
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.ENV),
      }),
      /**
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          ascii_only: true
        }
        // sourceMap: true
      }),
       */
      /**
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      }),
       */
      new HtmlWebpackPlugin({
        // filename: 'index.html',
        template: './src/renderer/index.html',
        inject: true,
        minify: {
          // minifyJS: true,
          removeComments: false,
          // collapseWhitespace: true,
          removeAttributeQuotes: true
          // more options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
      }),
    ],
    optimization: {
      splitChunks: {
        name: true,
        minChunks: 2
      }
    }
  })
]