const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@src': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loaders: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test   : /\.scss$/,
        loader : ['style-loader', 'css-loader', 'sass-loader'],
        include: path.join(__dirname, 'src')
    }
    ]
  }
};
