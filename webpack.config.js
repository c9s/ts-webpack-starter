var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');
module.exports = {
  'entry': {
    'bundle': ['./entry'],
  },
  'output': {
    'path': __dirname,
    'filename': '[name].js'
  },
  'debug': true,
  'devtool': 'source-map',
  'module': {
    'loaders': [
      {
        'test': /\.tsx?$/,
        'loaders': ['ts-loader'],
        'exclude': [/node_modules/,nodeModulesPath]
      },
      // babel-loader for pure javascript (es6)
      {
        'test': /\.(jsx?)$/,
        'loaders': ['babel'],
        'exclude': [/node_modules/,nodeModulesPath]
      }
    ]
  },
  'externals': {
    // don't bundle the 'react' npm package with our bundle.js
    // but get it from a global 'React' variable
    'react': 'React'
  },
  'plugins': [],
  'resolve': {
    'root': [path.resolve('./src')],
    'extensions': ['', '.ts', '.tsx', '.js', '.jsx'],

    // this is only required when we "import 'jquery'"
    // 'alias': { 'jquery': path.join(__dirname, "vendor", "jquery-2.2.0.min.js") }
  }
};
