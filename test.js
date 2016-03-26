/*eslint-env es6 */

var metaNoop = require('./')
var assert = require('assert')

assert.equal(typeof metaNoop, 'function')
metaNoop().forEach(result => assert.equal(result, undefined))
console.log(metaNoop())
