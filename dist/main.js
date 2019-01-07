console.log('foo.js is running');
var foo = 'foo';

console.log('bar.js is running');
var bar = 'bar';

function a () {
  return foo;
}

function b () {
  return bar;
}

export { a, b };
