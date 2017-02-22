let casual = require('casual')
let sample = require('lodash/sample')

casual.seed(123)

casual.define('logo', () => sample([
  'http://cdn.madten.com/wp-content/uploads/2014/05/amazon-logo1-730x430.jpg?x74538',
  'http://cdn.hiphopwired.com/wp-content/uploads/2015/03/beats-by-dre-logo.jpg',
  'https://d1hekt5vpuuw9b.cloudfront.net/assets/0e428aa2b62a4d66bc2be05b7d3e06f0_Starbucks-Logo-300x300_gallery.jpg',
  'http://www.companyfolders.com/blog/media/2015/01/apple-300x300.jpg',
  'http://www.thedesignlove.com/wp-content/uploads/2012/10/Adobe-Logo.jpg'
]))

module.exports = casual.functions()
