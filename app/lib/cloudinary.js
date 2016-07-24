'use strict'

const cloudinary = require('cloudinary')
const Promise = require('bluebird')

exports.uploadAsync = function(image, folder) {
  return new Promise(function(resolve, reject) {
    cloudinary.uploader.upload(image, function(result) {
      resolve(result.public_id)
    }, {
      folder: folder
    })
  })
}
