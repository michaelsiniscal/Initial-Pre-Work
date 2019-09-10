// Replaced else if chains with switch statement. Noted that when a case is a text string you need both quotes and exact capitalization. Also code appears to work without breaks and I'd like to know what happens without them.

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch(val) {
    case "bob":
    return "Marley";
    break;
    case 42:
    return "The Answer";
    break;
    case 1:
    return "There is no #1";
    break;
    case 99:
    return "Missed me by this much!";
    break;
    case 7:
    return "Ate Nine";
    break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(chainToSwitch("Bob"));
