// Learned how to count cards. Had to look up hint for this one and still couldn't get bet or hold to appear in console, just the count. Passed the lesson, but very difficult to know if I'm getting anywhere when I'm unable to see results of coding.

var count = 0;

function cc(card) {
  // Only change code below this line
   switch(card) {
     case 2:
     case 3:
     case 4:
     case 5:
     case 6:
     count++;
     break;
     case 10:
     case "J":
     case "Q":
     case "K":
     case "A":
     count--;
     break;
   }

  if (count <= 0) {
    return count + " Hold"
  }
  else if (count > 0) {
}
  return count + " Bet";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(6); cc(8); cc(8); cc('K'); cc('A');
console.log(count)
