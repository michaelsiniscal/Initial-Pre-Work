// Learned that const variables are similar to let but are constant and can not be changed...and const variables must be CAPITALIZED

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i=+2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
