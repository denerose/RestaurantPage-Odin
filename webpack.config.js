const path = require('path');
const { Module } = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module: {
    rules: [
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',
        }
    ]
}