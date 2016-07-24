'use strict'

/*
 * Test cases
 */
var manga = require('pages/nga')
var homeInit = require('pages/homepage/main')
var Chart = require('chart.js')
var $ = window.Zepto

homeInit()

console.log(manga)
console.log(Chart)

console.log($('.category'))

// require.async('yen', function(yen) {
//   // amd style
//   console.log(yen.replaceClass)
// })


// test map
var t = require('templates/1')
console.log(t)
