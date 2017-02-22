# dummy
Dummy data generator

## Usage

```
let generateDummyData = require('nudj/data')
let dummyData = generateDummyData({
  cars: {
    schema: require('./car-schema.json'),
    count: 20
  }
})
```
...dummyData equals...
```
{
  cars: [
    { dummy car 1 },
    { dummy car 1 },
    ...
    { dummy car 19 },
    { dummy car 20 },
  ]
}
```

### Schemas

An object where keys are mapped onto the dummy data objects. The values should be identifiers for [casual]() generator functions or custom casual functions as defined in `src/lib/generators.js`.

#### Example

The name, phone and city generators are used below:
```
{                                         {
  name: 'name',                             name: 'Dave',
  phone: 'phone',       ...becomes...       phone: '01234567890'
  location: 'city'                          location: 'Chicago'
}                                         }
```


## Contributing

### Dependencies

1. Docker
1. Make

### Development

1. `make build` to build the test image
1. `make test` to run the tests one time
1. `make tdd` to run the tdd watcher
