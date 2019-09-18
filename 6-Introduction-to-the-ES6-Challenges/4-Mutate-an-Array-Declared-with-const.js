// If i understand correctly, using const you can still make changes to actual array, but you can not change which array the const looks up.

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
s.unshift(2)
  // s = [2, 5, 7]; <- this is invalid
s.pop()
  // change code above this line
}
editInPlace();
console.log(s)
