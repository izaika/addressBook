const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

/**
 * @param { 'development' | 'production' } mode
 */
const getConfig = mode => ({
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      name: true,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: [/node_modules/, /dist/],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          symbolId: '[name].[hash]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx'],
  },
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, './build'),
    // publicPath: './',
    filename: '[name].[hash].js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ],
  mode,
  devServer: {
    contentBase: path.join(__dirname, 'build/'),
    compress: mode === 'production',
    port: 9000,
  },
});

// output: {
//   path: path.resolve(__dirname, '../../../staticresources/v3/lightning'),
// },
// mode: 'development',
// entry: {
//   app: './lightning/index.tsx',
// },
// plugins: [
//   new webpack.WatchIgnorePlugin([/scss\.d\.ts$/]),
//   new WebpackRequireFrom({ methodName: 'getChunkUrl' }),
//   // new BundleAnalyzerPlugin(),
// ],
// devServer: {
//   contentBase: './dist',
// },

module.exports = getConfig;
