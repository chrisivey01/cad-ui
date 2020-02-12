const webpack = require('webpack');
const path = require('path');

module.exports = {

  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize:false
        }
      },



      {
        test: /\.css$/,
        use: ['to-string-loader','style-loader', 'css-loader', 'resolve-url-loader']
      },
      {
          test: require.resolve('jquery'),
          use: [
              {
                  loader: 'expose-loader',
                  options: 'jQuery',
              },
              {
                  loader: 'expose-loader',
                  options: '$',
              },
          ],
      },
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, 'src'),  // location of your src
      {
          // your Angular Async Route paths relative to this root directory
      }
  ),
    new webpack.ProvidePlugin({
        "$": "jquery",
        "jQuery": "jquery"
      }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['app', 'vendor', 'polyfills']
    // }),

  ]
};