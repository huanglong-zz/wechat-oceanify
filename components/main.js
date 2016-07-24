'use strict'

/*
 * Test cases
 */
var manga = require('effect/nga')
var detect = require('effect/scan/detect')
var Chart = require('chart.js')
var $ = window.Zepto

console.log(manga)
console.log(detect)
console.log(Chart)

console.log($('.category'))

// require.async('yen', function(yen) {
//   // amd style
//   console.log(yen.replaceClass)
// })


// test map
var t = require('templates/1')
console.log(t)
