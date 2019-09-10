// Learned how to add a default setting to switch statement. Using letters instead of numbers for case designation means putting them in quotes and needing an imput with quotes to get desired result - is there another way?

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case "a":
    return "apple";
    break;
    case "b":
    return "bird";
    break;
    case "c":
   return "cat";
    break;
    default:
   return "stuff";
    break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test

console.log(switchOfStuff("7"));
