'use strict'

var render = require('../lib/render')


exports.homePage = function *(next) {
  this.body = yield render('index', {
    page: 'index'
  })
}

