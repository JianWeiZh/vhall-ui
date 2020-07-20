const utils = require('./utils')

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      src: utils.resolve('src'),
      components: utils.resolve('components'),
      'vhall-ui': utils.resolve('components/index.js')
    }
  }
}
