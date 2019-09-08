// Learned that the local variable takes precedence over one outside the function

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater"


  // Only change code above this line

return outerWear;
}

myOutfit();
