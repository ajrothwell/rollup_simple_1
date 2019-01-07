
import foo from './foo.js';
import bar from './bar.js';
var a = function () {
  return foo;
}

var b = function () {
  return bar;
}

// console.log(b);

export { a }
export { b }
