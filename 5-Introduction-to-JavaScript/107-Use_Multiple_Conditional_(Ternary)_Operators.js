// Used multiple ternary operators to return zero, neg, or pos result.

function checkSign(num) {
  return (num === 0) ? "zero" : (num < 0) ? "negative" : "positive";
}

checkSign(10);
