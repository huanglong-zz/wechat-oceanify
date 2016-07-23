'use strict'

var cloudinary = require('cloudinary')
var Promise = require('bluebird')

exports.uploadAsync = function(image, folder) {
  return new Promise(function(resolve, reject) {
    cloudinary.uploader.upload(image, function(result) {
      resolve(result.public_id)
    }, {
      folder: folder
    })
  })
}
