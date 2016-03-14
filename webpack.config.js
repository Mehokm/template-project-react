const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'src/app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  // Entry accepts a path or an object of entries.
  // The build chapter contains an example of the latter.
  entry: PATHS.app,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }, {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app,
        exclude: '/node_modules/'
      }, {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: "file-loader"
      }

    ]
  }
};
