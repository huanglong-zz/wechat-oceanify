'use strict'

const koa = require('koa')
const path = require('path')
const serve = require('koa-static')
const logger = require('koa-logger')
const json = require('koa-json')
const oceanify = require('oceanify')
const config = require('./config/config')

const app = koa()

//app.use(serve('views'))
if (config.app.env === 'development') {
  app.use(serve('public'))
  app.use(oceanify({
    root: __dirname,
    dest: path.join(__dirname, 'public'),
    serveSource: true,
    loaderConfig: {
      preload: 'zepto',
      map: {
        'templates/(\\d+)': '/templates/$1.js'
      }
    }
  }))
}

const Router = require('koa-router')
const router = new Router()
const application = require('./app/controllers/app')

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
  const PORT = process.env.PORT || 8000

  app.listen(PORT, function() {
    console.log('Server started at %s', PORT)
  })
}
