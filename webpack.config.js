// Import the 'path' module to resolve file paths
const path = require('path');
// Import the 'ExtractTextPlugin' to extract CSS into separate files
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Define the Webpack configuration object
const config = {
  // Specify the entry point for the application
  entry: './src/index.js', // This is the starting point of the application

  // Define output settings for the bundled code
  output: {
    // Specify the directory where the bundled files will be saved
    path: path.resolve(__dirname, 'build'), // Resolves to a 'build' directory in the project root
    // Name of the output file containing the bundled JavaScript
    filename: 'bundle.js',
    // The base path for all assets within the application (useful for loading resources)
    publicPath: 'build/',
  },

  // Define rules for handling different file types
  module: {
    rules: [
      {
        // Apply this rule to all JavaScript files
        test: /\.js$/, // Matches files with a .js extension
        use: 'babel-loader', // Transpiles modern JavaScript to older versions for compatibility
      },
      {
        // Apply this rule to all CSS files
        test: /\.css$/, // Matches files with a .css extension
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader', // Converts CSS into CommonJS modules
        }),
        // Note: The commented-out 'use' array provides an alternative method
        // that uses both 'style-loader' and 'css-loader'. However, 'ExtractTextPlugin'
        // is used here to extract CSS into separate files instead of embedding it inline.
      },
      {
        // Apply this rule to image files
        test: /\.(jpe?g|png|gif|svg)$/i, // Matches various image file extensions (case-insensitive)
        use: [
          {
            loader: 'url-loader', // Converts images to base64 URLs if they are below a size limit
            options: {
              limit: 40000, // Images smaller than 40KB will be inlined as base64 strings
              mimeType: 'image/*', // Specifies the MIME type of the files
            },
          },
          'image-webpack-loader', // Optimizes and compresses image files
        ],
      },
    ],
  },

  // Define plugins to enhance Webpack's functionality
  plugins: [
    // This plugin extracts CSS from the JavaScript bundle into a separate file
    new ExtractTextPlugin('style.css'), // The extracted CSS will be saved as 'style.css'
  ],
};

// Export the configuration object so Webpack can use it
module.exports = config;
