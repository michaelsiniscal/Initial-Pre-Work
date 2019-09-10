// I'm not sure about this one. When I tested undefined with quotes, I received the correct test results below, but couldn't pass lesson. I'm assuming the hint that undefined is a keyword means it shouldn't have quotes, but not sure why. I can put any string in place of undefined and all returns correctly below, would like to know what the unseen effect is.

// Setup
function abTest(a, b) {
  // Only change code below this line
   if (a < 0) {
    return undefined;
  } else if (b < 0) {
    return undefined;
  } else {
  }
  // Only change code above this line


  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
console.log(abTest(2,-2));
