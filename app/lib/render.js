'use strict'

var views = require('co-views')
var path = require('path')
var moment = require('moment')
var _package = require('../../package.json')
var config = require('../../config/config')
var dir = path.join(__dirname, '../', 'views')

// http://paularmstrong.github.io/node-templates/benchmarks.html
// swig is faster overall

// var filters = {
//   formatVersion: function(version) {
//     return '@v' + version
//   }
// }

// app.context.render = render({
//   root: path.join(__dirname, '../', 'views'),
//   ext: 'html',
//   locals: locals,
//   filters: filters
// })

module.exports = views(dir, {
  cache: true,
  map: {
    html: 'swig',
    md: 'hogan'
  },
  locals: {
    moment: moment,
    version: _package.version,
    online: config.online
  }
})
