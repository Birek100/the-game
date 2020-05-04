const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './scripts.js'
  },
  module: {
  rules: [
    { 	test: /\.js$|jsx/, 
    	exclude: /node_modules/, 
    	loader: 'babel-loader',
    	query: {
    		presets: ['@babel/preset-env', "@babel/preset-react"]
    	} 
    }
  ]
}
};
