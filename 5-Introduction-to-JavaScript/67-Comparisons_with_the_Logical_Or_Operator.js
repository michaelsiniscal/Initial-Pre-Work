// Learned how to use the or operator to set two parameters to equation with two different return values. Tried to trade out operators without success.

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside"; }

// Change this value to test
console.log(testLogicalOr(13));
