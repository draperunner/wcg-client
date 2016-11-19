const path = require('path');

module.exports = {
  entry: {
    app: ['./app/main.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ],
  },
};
