// Learned about using let instead of var to limit to single entry and avoid accidental overwriting possible with var

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
console.log(quote);
