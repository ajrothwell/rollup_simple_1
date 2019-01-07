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
  console.log('multiply is running');
  return x * x;
}

function double(x) {
  console.log('double is running');
  return x * x * x;
}

export { foofunc, barfunc, multiply, double };
