// Have a good idea of how to set up console.log to test properly now. Also have an idea of how true false function can be used. Doesnt appear to have anything to do with the name of function or variable, but just the added item within curly brackets that makes it a two part choice with first being return for a true variable input and second a return for false

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) { return "Yes, that was true"; } return "No, that was false";


  // Only change code above this line.

}

// Change this value to test
console.log(trueOrFalse(false));
