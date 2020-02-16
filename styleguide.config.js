const path = require('path')
module.exports = {
  // set your styleguidist configuration here
  title: 'UIKit',
  components: 'src/components/**/[A-Z]*.vue',
  theme: './styleguidetheme.js',
  styles:{
    Editor: {
      root: {
        isolate: true
      }
    }
  },
  require: [
    path.resolve('./src/assets/css/common.css')
  ],
  usageMode: 'expand',
  exampleMode: 'expand'
}
