/* eslint-disable space-before-function-paren */
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
  },
  devServer: {
  }
// eslint-disable-next-line eol-last
}