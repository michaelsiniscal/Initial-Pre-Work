// Learned how to use check prop to determine if an object has a particular property. Found the given example unuseful in determining what what required.

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
 if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  else {
      return "Not Found"
  }
}
// Test your code by modifying these values
console.log(checkObj("house"));
