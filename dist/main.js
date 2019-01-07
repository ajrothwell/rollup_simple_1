var foo = 'foo';

console.log('bar.js is running');
var bar = 'bar';

function foofunc() {
  console.log('foofunc is running');
  return foo;
}

function barfunc() {
  console.log('barfunc is running');
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
