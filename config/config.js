'use strict'

var _ = require('lodash')
var path = require('path')

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// Load app configuration
var base = {
	app: {
		root: path.normalize(path.join(__dirname, '/..')),
		env: env
	}
}

var config = _.extend(
  require('./env/all.js'),
  require('./env/' + env + '.json') || {})


module.exports = _.merge(base, config)
