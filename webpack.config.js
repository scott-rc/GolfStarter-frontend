const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

const appConfig = {
  entry: ['babel-polyfill', './src/app/app.js'],
  stats: 'minimal',
  target: 'web',
  devtool: prod ? 'source-map' : 'inline-source-map',
  performance: {
    hints: false,
  },

  output: {
    path: path.join(__dirname, prod ? 'dist' : 'build'),
    publicPath: '/static/',
    filename: 'golfstarters.js',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src/app')],
        use: [
          { loader: 'vue-loader', options: { esModule: true } },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src/app')],
        use: [
          { loader: 'babel-loader' },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/app/components'),
      typings: path.resolve(__dirname, 'src/app/typings'),
      store: path.resolve(__dirname, 'src/app/store/'),
      router: path.resolve(__dirname, 'src/app/router.ts'),
    },

    extensions: ['*', '.webpack.ts', '.ts', '.vue', '.js', '.json'],
  },
};

const serverConfig = {
  entry: ['babel-polyfill', './src/server/server.js'],
  stats: 'minimal',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  devtool: prod ? 'source-map' : 'inline-source-map',
  performance: {
    hints: false,
  },

  output: {
    path: path.join(__dirname, prod ? 'dist' : 'build'),
    filename: 'golfstarters-server.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src/server')],
        use: [
          { loader: 'babel-loader' },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.webpack.ts', '.ts', '.js', '.json'],
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/server/index.html',
      },
    ],
    {
      ignore: ['*.ts', '*.js', '*.xml', '*.iml'],
      copyUnmodified: false,
    }),
  ],
};

const productionPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
  }),

  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: "'production'",
    },
  }),

  new webpack.LoaderOptionsPlugin({
    minimize: true,
  }),
];

if (prod) {
  appConfig.plugins = (appConfig.plugins || []).concat(productionPlugins);
}

module.exports = [appConfig, serverConfig];
