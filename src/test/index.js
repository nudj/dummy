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
          nested: {
            example: {
              fn: 'schema',
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
              }]
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
          nested: {
            id: '1',
            location: 'Florianchester',
            title: 'Quos est quod',
            url: '/molestiae/harum-ullam'
          },
          replaceDate: '1989-10-21'
        },
        {
          id: '2',
          color: 'purple',
          integer: 2,
          name: 'Madelyn',
          populate: 'http://facebook.com/maiores',
          slug: 'commodi-autem-incidunt',
          status: 'Ready',
          words: 'commodi autem incidunt',
          related: [
            {
              id: '1',
              location: 'South Cara',
              title: 'Iusto doloremque et',
              url: '/et/voluptas-explicabo'
            },
            {
              id: '2',
              location: 'Tyreeport',
              title: 'Molestiae placeat saepe',
              url: '/molestiae/beatae-enim'
            },
            {
              id: '3',
              location: 'West Marjorie',
              title: 'Sed corporis voluptatem',
              url: '/et/laudantium-fuga'
            }
          ],
          nested: {
            id: '1',
            location: 'Feeneyport',
            title: 'Atque dolores',
            url: '/et/repudiandae-magnam'
          },
          replaceDate: '1990-09-27'
        }
      ]
    })
  })
})
