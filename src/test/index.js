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
          },
          related: {
            example: {
              fn: 'array_of_objects',
              args: [{
                url: {
                  example: {
                    fn: 'replace',
                    args: ['/{{word}}/{{word}}-{{word}}']
                  }
                },
                title: {
                  example: {
                    fn: 'title'
                  }
                },
                location: {
                  example: {
                    fn: 'city'
                  }
                }
              }, 3]
            }
          },
          replaceDate: {
            example: {
              fn: 'replace',
              args: ['{{date}}']
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
          slug: 'quis-molestiae-tempora',
          related: [
            {
              id: '1',
              location: 'Jaydeville',
              title: 'Reiciendis velit nobis',
              url: '/porro/quos-nihil'
            },
            {
              id: '2',
              location: 'North Maude',
              title: 'Qui quia odio',
              url: '/reprehenderit/in-nisi'
            },
            {
              id: '3',
              location: 'South Mertiemouth',
              title: 'Sit odio dolor',
              url: '/in/deserunt-id'
            }
          ],
          replaceDate: '1990-03-29'
        },
        {
          id: '2',
          color: 'silver',
          integer: 7,
          name: 'Eliane',
          populate: 'http://facebook.com/ea',
          slug: 'pariatur-quos-est',
          status: 'In Development',
          words: 'pariatur quos est',
          related: [
            {
              id: '1',
              location: 'West Xzavier',
              title: 'Commodi autem incidunt',
              url: '/quisquam/esse-quia'
            },
            {
              id: '2',
              location: 'South Cara',
              title: 'Iusto doloremque et',
              url: '/et/voluptas-explicabo'
            },
            {
              id: '3',
              location: 'Tyreeport',
              title: 'Molestiae placeat saepe',
              url: '/molestiae/beatae-enim'
            }
          ],
          replaceDate: '1993-09-27'
        }
      ]
    })
  })
})
