const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'build'),
  JS: path.resolve(__dirname, 'src'),
  SRC: path.resolve(__dirname, './'),
};


module.exports = {
  entry: path.join(paths.JS, 'app.jsx'),
  output: {
    path: path.join(paths.DIST, 'js'),
    filename: 'app.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/src'),
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'],
        plugins: ['babel-plugin-transform-class-properties'],
      },
    }],
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
