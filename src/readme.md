# dummy
Dummy data generator

## Usage

```
let dummy = require('@nudj/dummy')
let dummyData = dummy({
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

An object where keys are mapped onto the dummy data objects. The values should be identifiers for [casual](https://www.npmjs.com/package/casual) generator functions or custom casual functions as defined in `src/lib/generators.js`.

#### Example

The name, phone and city generators are used below:
```
{                                         {
  name: 'name',                             name: 'Dave',
  phone: 'phone',       ...becomes...       phone: '01234567890'
  location: 'city'                          location: 'Chicago'
}                                         }
```
