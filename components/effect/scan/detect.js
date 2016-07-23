'use strict'

function Detect(id) {
  this.id = id
  this.desc = 'detect'
}


function detect() {
  return new Detect('#detect')
    .end()
}


module.exports = detect
