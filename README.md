# rollup_simple_3

src/main.js does 2 things:

1. exports functions that are defined in src/main.js

2. imports and exports modules bar.js and foo.js

It does not do any dynamic importing or chunking.

This module used by the repo 'webpack_simple' (https://github.com/ajrothwell/webpack_simple) for testing simple tree-shaking.

It can be seen in action live at https://ajrothwell.github.io/webpack_simple/dist/
