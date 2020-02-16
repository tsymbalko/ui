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
        components: path.resolve('./src/components'),
        atoms: path.resolve('./src/components/atoms'),
        molecules: path.resolve('./src/components/molecules'),
        organisms: path.resolve('./src/components/organisms'),
        pages: path.resolve('./src/components/pages'),
        templates: path.resolve('./src/components/templates'),
        assets: path.resolve('./src/assets')
      }
    },
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
        context: 'src',
        fix: true,
        configFile: '.stylelintrc',
        lintDirtyModulesOnly: true
      }),
      new PrettierPlugin({
        encoding: 'utf-8',
        extensions: ['.js', '.vue'],
        fix: true,
        configFile: '.prettierrc'
      })
    ]
  }
}
