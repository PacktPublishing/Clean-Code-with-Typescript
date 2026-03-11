const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  entry: './src/analysis/bundle-demo/index.tsx',
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }],
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  plugins: [new BundleAnalyzerPlugin()],
};
