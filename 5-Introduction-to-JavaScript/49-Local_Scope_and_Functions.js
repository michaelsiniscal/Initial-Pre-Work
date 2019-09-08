// Learned that variables written within curly brackets of functions are not visible outside brackets

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "foo"
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
