const path = require('path');
module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[local]_[hash:base64:5]'
        },
        localsConvention: 'camelCaseOnly'
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        atoms: path.resolve('./src/components/atoms'),
        molecules: path.resolve('./src/components/molecules'),
        organisms: path.resolve('./src/components/organisms'),
        pages: path.resolve('./src/components/pages'),
        templates: path.resolve('./src/components/templates'),
        assets: path.resolve('./src/assets')
      }
    }
  }
}
