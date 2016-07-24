'use strict'

var koa = require('koa')
var path = require('path')
var serve = require('koa-static')
var logger = require('koa-logger')
var json = require('koa-json')
var oceanify = require('oceanify')
var config = require('./config/config')

var app = koa()


//app.use(serve('views'))
if (config.env === 'development') {
  app.use(serve('public'))
  app.use(oceanify({
    root: __dirname,
    dest: path.join(__dirname, 'public'),
    serveSource: true,
    importConfig: {
      map: {
        'templates/(\\d+)': '/templates/$1.js'
      }
    }
  }))
}

var Router = require('koa-router')
var router = new Router()
var application = require('./app/controllers/app')

router.get('/', application.homePage)

app
  .use(router.routes())
  .use(router.allowedMethods())

app.use(logger())
app.use(json({
  pretty: false, param: 'pretty'
}))

module.exports = app

if (!module.parent) {
  var PORT = process.env.PORT || 8000

  app.listen(PORT, function() {
    console.log('Server started at %s', PORT)
  })
}
