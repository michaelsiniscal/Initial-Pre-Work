// Used destructuring assignment to reassign (not change) values of an array. Didn't understand why it wasn't necessary to use const in front of code

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
[b, a] = [a, b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
