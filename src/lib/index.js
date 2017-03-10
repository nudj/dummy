let times = require('lodash/times')
let mapValues = require('lodash/mapValues')
let generators = require('./generators')

let item = (schema) => mapValues(schema, ({ example }) => generators[example.fn].apply(null, example.args))

let collection = (schema, count) => times(count, (index) => Object.assign({ id: index + 1 }, item(schema)))

module.exports = (options) => mapValues(options, (opts) => collection(opts.schema, opts.count))
