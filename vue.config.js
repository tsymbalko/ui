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
        helpers: path.resolve('./src/helpers'),
        mixins: path.resolve('./src/ui-kit/mixins'),
        components: path.resolve('./src/ui-kit/components'),
        pages: path.resolve('./src/ui-kit/pages'),
        organisms: path.resolve('./src/ui-kit/organisms'),
        skeletons: path.resolve('./src/ui-kit/skeletons'),
        templates: path.resolve('./src/ui-kit/templates')
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
