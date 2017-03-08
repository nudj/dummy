/* eslint-env mocha */

let chai = require('chai')
let expect = chai.expect

let dummy = require('../lib')

describe('Dummy', function () {
  it('should work', function () {
    expect(dummy({
      cars: {
        schema: {
          color: 'safe_color_name',
          name: 'first_name'
        },
        count: 3
      }
    })).to.deep.equal({
      cars: [
        { color: 'gray', name: 'Mervin' },
        { color: 'olive', name: 'Hilda' },
        { color: 'navy', name: 'Maryse' }
      ]
    })
  })
})
