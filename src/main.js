
import foo from './foo.js';
import bar from './bar.js';

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
  return x * x * x;
}
