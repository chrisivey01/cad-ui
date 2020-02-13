const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    path.join(process.cwd() ,'src/polyfills.ts'),
    path.join(process.cwd() ,'src/vendor.ts'),
    path.join(process.cwd() ,'src/main.ts'),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
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
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[ext]'
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
    new webpack.ProvidePlugin({
        "$": "jquery",
        "jQuery": "jquery"
      }),
  ]
};
