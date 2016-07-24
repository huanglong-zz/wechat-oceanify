'use strict'

var flatpickr = require('flatpickr')
var Cleave = require('cleave.js')

// flatpickr works fine, while addon modules failed
require('cleave.js/src/addons/phone-type-formatter.cn')

function init() {
  flatpickr('#flatpickr-tryme')
  
  new Cleave('.input-phone', {
    phone: true,
    phoneRegionCode: 'CN'
  })
}


module.exports = init
