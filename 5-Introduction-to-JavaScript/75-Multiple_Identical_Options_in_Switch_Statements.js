// Leanred how to stack multiple cases before each break to group similar input into one group return. For some reason the lesson inserts "result" instead of "return" which doesnt work and is confusing for no reason.

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
    return "Low";
    break;
    case 4:
    case 5:
    case 6:
    return "Mid";
    break;
    case 7:
    case 8:
    case 9:
    return "High"
    break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(sequentialSizes(10));
