/* eslint-env node */
module.exports = {
  plugins: [
    require('postcss-each-variables'),
    require('postcss-nested'),
    require('postcss-each')({
      plugins: {
        afterEach: [
          require('postcss-at-rules-variables')
        ],
        beforeEach: [
          require('postcss-for'),
          require('postcss-color-mix'),
          require('postcss-custom-properties')
        ]
      }
    }),
    
  ]
}