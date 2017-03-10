let casual = require('casual')

casual.seed(123)

casual.define('choice', (options) => casual.random_element(options))

module.exports = casual.functions()
