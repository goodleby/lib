const { resolve } = require('path');
const { BannerPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { name, homepage, version, license } = require('./package.json');

const camelize = (string, isUpper = false) => {
  const result = string.replace(/[^a-z]+([a-z])?/gi, (_, letter) =>
    letter ? letter.toUpperCase() : ''
  );
  return isUpper ? result : result[0].toLowerCase() + result.slice(1);
};

const camelName = camelize(name);

const info = [
  { content: homepage, prefix: '@link' },
  { content: version, prefix: '@version' },
  { content: license, prefix: '@licence' },
];
const banner = info
  .filter(({ content }) => !!content)
  .map(({ content, prefix, postfix }) =>
    [prefix, content, postfix].filter((item) => !!item).join(' ')
  )
  .join(', ');

module.exports = {
  target: 'browserslist',
  entry: {
    [camelName]: './src/index.ts',
  },
  output: {
    path: resolve(__dirname, 'build'),
    clean: true,
    // library setup
    library: camelName,
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  plugins: [new MiniCssExtractPlugin(), new BannerPlugin(banner)],
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ca]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.[tj]s$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
