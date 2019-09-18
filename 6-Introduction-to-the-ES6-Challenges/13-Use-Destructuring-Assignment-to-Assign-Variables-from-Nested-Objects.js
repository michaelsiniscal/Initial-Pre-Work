// Trying a literal translation, I used LOCAL_FORCAST as the end of the line instead of forcast - returned temp, but was wrong. I see that forcast does = maxOfTomorrow so it makes more sense, but would like to better understand the mechanics.

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const { tomorrow : { max: maxOfTomorrow}} = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
