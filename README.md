# Webpack JS Modules

This project is a hands-on exploration of Webpack 2, focusing on understanding JavaScript modules, configuring Webpack, and utilizing plugins for efficient build processes. The goal is to build a foundation for working with modern web development tools and techniques.

## Project Overview

This project introduces key Webpack concepts and demonstrates how to:

- Set up and configure Webpack.
- Use JavaScript modules to manage code.
- Leverage Webpack plugins for enhanced functionality.
- Optimize builds for production.

## Features

- **Entry Points:** Learn how Webpack starts bundling from a defined entry file.
- **Loaders:** Understand how to process different file types (e.g., JavaScript, CSS, images) with loaders.
- **Plugins:** Gain insights into plugins like `ExtractTextPlugin` and others for extended capabilities.
- **Output Configuration:** Customize the output files and directories.

## Requirements

To follow this project, you need:

- Node.js (>= 14.x recommended)
- npm (Node Package Manager) or Yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/guillermo-segura/webpack-js-modules.git
   cd webpack-js-modules
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project for production:
   ```bash
   npm run build
   ```

## Project Structure

```plaintext
learning-webpack/
├── src/               # Source files (JavaScript, etc.)
├── build/             # Output directory for bundled files
├── assets/            # Image files
├── styles/            # CSS files
├── webpack.config.js  # Webpack configuration
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## Key Concepts

- **Entry:** The starting point for bundling (`src/index.js`).
- **Loaders:** Convert file formats (e.g., `babel-loader` for JavaScript, `css-loader` for CSS).
- **Plugins:** Enhance functionality (e.g., `ExtractTextPlugin` for CSS extraction).
- **Output:** Specifies where and how bundled files are generated.

## Learning Objectives

- Understand the role of Webpack in modern web development.
- Learn to use JavaScript modules effectively.
- Gain practical experience configuring Webpack for different scenarios.

## Resources

- [Webpack Documentation](https://webpack.js.org/)
- [MDN Web Docs: JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Node.js](https://nodejs.org/)

