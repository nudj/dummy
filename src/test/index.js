/* eslint-env mocha */

let chai = require('chai')
let dirtyChai = require('dirty-chai')
let expect = chai.expect

chai.use(dirtyChai)

let dummy = require('../lib')

describe('Dummy', function () {
  it('work with these functions', function () {
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
              fn: 'schema[]',
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
          replacements: {
            example: {
              fn: 'array_of_replacements',
              args: ['{{word}}', 2]
            }
          }
        },
        count: 1
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
            location: 'Florianchester',
            title: 'Quos est quod',
            url: '/molestiae/harum-ullam'
          },
          replacements: ['esse', 'quia']
        }
      ]
    })
  })
  it('should output according to the count provided', function () {
    expect(dummy({
      cars: {
        schema: {
          color: {
            example: {
              fn: 'safe_color_name'
            }
          }
        },
        count: 2
      }
    })).to.deep.equal({
      cars: [
        {
          id: '1',
          color: 'silver'
        },
        {
          id: '2',
          color: 'purple'
        }
      ]
    })
  })
})
