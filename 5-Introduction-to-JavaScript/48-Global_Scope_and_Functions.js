// I finished completed the lesson and it says I did it right, but I'm not sure what I did or what the effect was

// Declare your variable here
var myGlobal = 10;

function fun1() {
oopsGlobal = 5  // Assign 5 to oopsGlobal Here

}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
