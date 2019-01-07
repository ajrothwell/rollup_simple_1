
import foo from './foo.js';
import bar from './bar.js';

export function foofunc() {
  return foo;
}

export function barfunc() {
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
