// Learned how to create a comparison with two requirements to achieve a true return, by either nesting an if function within another or using And && operator. Didnt seem to work right first couple times even thought think I put same code in.

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25)
{
      return "Yes";
    }


  // Only change code above this line
  return "No";
}

// Change this value to test
console.log(testLogicalAnd(24));
