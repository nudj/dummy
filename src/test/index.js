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
          }
        },
        count: 2
      }
    })).to.deep.equal({
      cars: [
        {
          id: 1,
          color: 'gray',
          integer: 7,
          name: 'Mervin',
          status: 'In Development',
          words: 'quis molestiae tempora',
          slug: 'quis-molestiae-tempora'
        },
        {
          id: 2,
          color: 'gray',
          integer: 10,
          name: 'Millie',
          status: 'Ready',
          words: 'quos nihil omnis',
          slug: 'quos-nihil-omnis'
        }
      ]
    })
  })
})
