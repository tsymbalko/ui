const path = require('path')
module.exports = {
  // set your styleguidist configuration here
  title: 'UIKit',
  components: 'src/ui-kit/**/[A-Z]*.vue',
  styles: {
    Editor: {
      root: {
        isolate: true
      }
    },
    Code: {
      code: {
        margin: '0 1px',
        background: '#f2f4f5',
        padding: '.2em .4em',
        borderRadius: '3px',
        fontSize: '.9em',
        border: '1px solid #eee'
      }
    }
  },
  template: {
    favicon: './public/favicon.svg'
  },
  require: [
    path.resolve('./src/assets/css/common.css')
  ],
  usageMode: 'expand',
  exampleMode: 'expand',
  pagePerSection: true
}
