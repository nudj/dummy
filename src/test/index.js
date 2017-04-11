/* eslint-env mocha */

let chai = require('chai')
let dirtyChai = require('dirty-chai')
let expect = chai.expect

chai.use(dirtyChai)

let dummy = require('../lib')

describe('Dummy', function () {
  it('should work', function () {
    expect(dummy({
      cars: {
        schema: {
          color: {
            example: {
              fn: 'safe_color_name'
            }
          },
          name: {
            example: {
              fn: 'first_name'
            }
          },
          words: {
            example: {
              fn: 'words',
              args: [3]
            }
          },
          integer: {
            example: {
              fn: 'integer',
              args: [0, 10]
            }
          },
          status: {
            example: {
              fn: 'choice',
              args: [['Backlog', 'Ready', 'In Development', 'Done']]
            }
          },
          slug: {
            example: {
              fn: 'slug',
              args: ['words']
            }
          },
          populate: {
            example: {
              fn: 'replace',
              args: ['http://facebook.com/{{word}}']
            }
          }
        },
        count: 2
      }
    })).to.deep.equal({
      cars: [
        {
          id: '1',
          color: 'gray',
          integer: 7,
          name: 'Mervin',
          populate: 'http://facebook.com/porro',
          status: 'In Development',
          words: 'quis molestiae tempora',
          slug: 'quis-molestiae-tempora'
        },
        {
          id: '2',
          color: 'gray',
          integer: 4,
          name: 'Jennyfer',
          populate: 'http://facebook.com/culpa',
          slug: 'nihil-omnis-reiciendis',
          status: 'In Development',
          words: 'nihil omnis reiciendis'
        }
      ]
    })
  })
})
