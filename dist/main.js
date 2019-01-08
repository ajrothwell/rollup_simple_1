// foo.js

// add a console log to foo.js, to see it in the final bundle
console.log('this console.log is coming from foo.js of rollup_simple_1');

// export a string
var foo = 'foo';

// bar.js

// export a string
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
  console.log('in triple, randomVariable:', randomVariable);
  return x * 3;
}

function consoleLogVar() {
  console.log('consoleLogVar is running');
  // console log the random variable
  console.log('in consoleLogVar, randomVariable:', randomVariable);
}

export { foofunc, barfunc, double, triple, consoleLogVar };
