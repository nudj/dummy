let casual = require('casual')
let kebabCase = require('lodash/kebabCase')
let times = require('lodash/times')
let mapValues = require('lodash/mapValues')
let reduce = require('lodash/reduce')

let item = (schema) => reduce(schema, (result, { example }, key) => {
  result[key] = generators[example.fn].apply(null, (example.args || []).concat(result))
  return result
}, {})
let collection = (schema, count) => times(count, (index) => Object.assign({ id: `${index + 1}` }, item(schema)))

casual.seed(123)
casual.define('choice', (options) => casual.random_element(options))
casual.define('replace', (options) => casual.populate(options))
casual.define('slug', (field, target) => kebabCase(target[field]))
casual.define('array_of_objects', collection)

const generators = casual.functions()

module.exports = (options) => mapValues(options, (opts) => collection(opts.schema, opts.count))
