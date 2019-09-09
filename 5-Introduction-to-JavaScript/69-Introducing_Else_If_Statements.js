// Learned to use else if function to add more than one if parameter leaving whatever is not to return the else value. ie if not this, and not this, then this. Pay special attention to curly brackets.

function testElseIf(val) {
 if (val > 10) {
    return "Greater than 10";
  }

 else if (val < 5) {
    return "Smaller than 5";
  }

else { return "Between 5 and 10";
}
}
// Change this value to test
console.log(testElseIf(13));
