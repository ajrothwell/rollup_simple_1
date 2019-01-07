
import foo from './foo.js';
import bar from './bar.js';

var completeTest = 'this is the value for completeTest';

export function foofunc() {
  console.log('foofunc is running');
  return foo;
}

export function barfunc() {
  console.log('barfunc is running');
  return bar;
}

export function multiply(x) {
  console.log('multiply is running');
  return x * x;
}

export function double(x) {
  console.log('double is running');
  console.log('completeTest:', completeTest);
  return x * x * x;
}
