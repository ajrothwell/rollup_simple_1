var foo = 'foo';

var bar = 'bar';

var completeTest = 'this is the value for completeTest';

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
  console.log('completeTest:', completeTest);
  return x * x * x;
}

export { foofunc, barfunc, multiply, double };
