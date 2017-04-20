const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { join } = require('path');

const rootDir = join(__dirname, './');
const appDir = join(rootDir, 'app');
const distDir = join(rootDir, 'dist');
// const publicDir = join(appDir, 'public');
const entryFile = join(appDir, 'index.js');
const indexFile = join(appDir, 'index.html');


module.exports = (env) => {
  return {
    context: __dirname,
    devtool: 'source-map',
    // devtool: env ? 'source-map' : 'eval',
    entry: [
      // 'react-hot-loader/patch',
      // 'webpack-dev-server/client?http://localhost:3000',
      // 'webpack/hot/only-dev-server',
      entryFile
    ],
    output: {
      path: distDir,
      pathinfo: true,
      filename: 'assets/app.js',
      publicPath: ''
    },
    devServer: {
      host: 'localhost',
      port: 3000,
      contentBase: appDir,
      compress: true,
      watchContentBase: true,
      hot: true,
      inline: true
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      modules: ['node_modules', appDir]
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: false
    },
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          include: appDir,
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!sass-loader'
          }),
          include: appDir,
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: indexFile
        // filename: 'index.html',
      }),
      new ExtractTextPlugin('assets/main.css')
    ]
  };
};
