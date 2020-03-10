const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const PrettierPlugin = require('prettier-webpack-plugin')
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
        assets: path.resolve('./src/assets'),
        mixins: path.resolve('./src/components/mixins'),
        atoms: path.resolve('./src/components/atoms'),
        pages: path.resolve('./src/components/pages'),
        organisms: path.resolve('./src/components/organisms'),
        skeletons: path.resolve('./src/components/skeletons'),
        templates: path.resolve('./src/components/templates')
      }
    },
    plugins: [
      new PrettierPlugin({
        encoding: 'utf-8',
        extensions: ['.js', '.vue'],
        fix: true,
        configFile: '.prettierrc'
      }),
      new StyleLintPlugin({
        files: ['**/*.{htm,html,css,sss,less,scss,sass}'],
        context: 'src',
        fix: true,
        configFile: '.stylelintrc',
        lintDirtyModulesOnly: true
      })
    ]
  }
}
