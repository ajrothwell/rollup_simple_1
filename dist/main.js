console.log('foo.js is running');
var foo = 'foo';

console.log('bar.js is running');
var bar = 'bar';

var a = function () {
  return foo;
};
var b = function () {
  return bar;
};

export { a, b };
