let times = require('lodash/times')
let mapValues = require('lodash/mapValues')
let reduce = require('lodash/reduce')
let generators = require('./generators')

let item = (schema) => reduce(schema, (result, { example }, key) => {
  result[key] = generators[example.fn].apply(null, (example.args || []).concat(result))
  return result
}, {})

let collection = (schema, count) => times(count, (index) => Object.assign({ id: index + 1 }, item(schema)))

module.exports = (options) => mapValues(options, (opts) => collection(opts.schema, opts.count))
