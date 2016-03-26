/* eslint-env es6 */

require("noop") // defines global `noop()`

const noops = [
  noop,
  require("async.util.noop"),
  require("basic-functions").noop,
  require("blank-space").noop,
  require("co-noop"),
  require("empty").func,
  require("fj-noop").FUNC,
  require("lodash._noop"),
  require("lodash.noop"),
  require("n0p3"),
  require("no-op"),
  require("node-noop").noop,
  require("none"),
  require("noop-fn"),
  require("noop2"),
  require("noop3"),
  require("noop4")(), // exports a function that returns a noop function …
  require("noopaam"),
  require("nop"),
  require("yanoop").noop,
];

isGeneratorFn = fn => fn instanceof Object.getPrototypeOf(function*(){}).constructor

noopCaller = fn => isGeneratorFn(fn) ? fn().next().value : fn()

module.exports = () => noops.map(noopCaller)
