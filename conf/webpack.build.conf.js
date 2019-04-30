const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  plugins: [
    new ImageminPlugin({
      test: 'img/**',
      pngquant: ({quality: 87}),
      plugins: [imageminMozjpeg({quality: 87})]
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
