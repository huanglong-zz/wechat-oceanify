'use strict'

/*
 * Test cases
 */
var homeInit = require('pages/homepage/main')
var Chart = require('chart.js')

homeInit()

console.log(Chart)

var $ = window.Zepto

console.log($('.category'))

// require.async('yen', function(yen) {
//   // amd style
//   console.log(yen.replaceClass)
// })


// test map
var t = require('templates/1')
console.log(t)
