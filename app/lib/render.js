'use strict'

const views = require('co-views')
const path = require('path')
const moment = require('moment')
const _package = require('../../package.json')
const config = require('../../config/config')
const dir = path.join(__dirname, '../', 'views')

// http://paularmstrong.github.io/node-templates/benchmarks.html
// swig is faster overall

// const filters = {
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
