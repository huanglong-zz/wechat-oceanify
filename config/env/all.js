'use strict'

// https://jslinterrors.com/option-jshint-camelcase

var path = require('path')
var rootPath = path.join(__dirname, '/../..')

module.exports = {
  root: rootPath,
  //port: process.env.PORT || 8000,
  port: 8000,
  name: 'CR',
  hostname: 'www.campusroom.com'
}
