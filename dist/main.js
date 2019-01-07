console.log('foo.js is running');
var foo = 'foo';

// import bar from './bar.js';

function foofunc() {
  return foo;
}

function multiply(x) {
  return x * x;
}

function double(x) {
  return x * x * x;
}

export { foofunc, multiply, double };
