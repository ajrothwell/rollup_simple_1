// main.js - entry point for the library

// import other es6 modules
import foo from './foo.js';
import bar from './bar.js';

// create a random variable
var randomVariable = 'this is the value for randomVariable';

export function foofunc() {
  console.log('foofunc is running');
  return foo;
}

export function barfunc() {
  console.log('barfunc is running');
  return bar;
}

export function double(x) {
  console.log('double is running');
  return x * 2;
}

export function triple(x) {
  console.log('triple is running');
  // console log the random variable
  console.log('randomVariable:', randomVariable)
  return x * 3;
}

export function consoleLogVar() {
  console.log('consoleLogVar is running')
  // console log the random variable
  console.log('randomVariable:', randomVariable)
}
