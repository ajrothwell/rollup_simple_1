var foo = 'foo';

console.log('bar.js is running');
var bar = 'bar';

function foofunc() {
  return foo;
}

function barfunc() {
  return bar;
}

function multiply(x) {
  return x * x;
}

function double(x) {
  return x * x * x;
}

export { foofunc, barfunc, multiply, double };
