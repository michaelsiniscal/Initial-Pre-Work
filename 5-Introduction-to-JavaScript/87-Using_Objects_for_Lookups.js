// Learned how set a lookup array. Had trouble figuring out where to place the result assignment. Also noted that lesson showed both with and without a space before value "strings"

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
 var lookup = {


    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
 }
    result = lookup[val];


  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");

console.log(phoneticLookup("bravo"));
