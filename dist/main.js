console.log('this is coming from foo.js');
var foo = 'foo';

var bar = 'bar';

// main.js - entry point for the library

// create a random variable
var randomVariable = 'this is the value for randomVariable';

function foofunc() {
  console.log('foofunc is running');
  return foo;
}

function barfunc() {
  console.log('barfunc is running');
  return bar;
}

function double(x) {
  console.log('double is running');
  return x * 2;
}

function triple(x) {
  console.log('triple is running');
  // console log the random variable
  console.log('randomVariable:', randomVariable);
  return x * 3;
}

function consoleLogVar() {
  console.log('consoleLogVar is running');
  // console log the random variable
  console.log('randomVariable:', randomVariable);
}

export { foofunc, barfunc, double, triple, consoleLogVar };
