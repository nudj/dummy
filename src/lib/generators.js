let casual = require('casual')
let kebabCase = require('lodash/kebabCase')

casual.seed(123)

casual.define('choice', (options) => casual.random_element(options))
casual.define('slug', (field, target) => kebabCase(target[field]))

module.exports = casual.functions()
