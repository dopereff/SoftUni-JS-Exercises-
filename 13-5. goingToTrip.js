const goingToTrip = (input) => {
  for (let i = 0; i < input.length; i++) {
    // If the input is End
    if (input[i] === "End") {
      break;
    }
    // If the input is a number
    if (isNaN(input[i]) === false) {
      continue;
    }
    // If the input is not a number
    let destination = input[i];
    let sumNeeded = input[i + 1];
    let savings = 0;

    for (let n = i + 2; n < input.length; n++) {
      // If the input is not a number
      if (isNaN(input[n]) === true) {
        break;
      }
      // If the input is a number
      else {
        savings += Number(input[n]);
        if (savings >= sumNeeded) {
          console.log(`Going to ${destination}!`);
        }
      }
    }
  }
};

goingToTrip([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);
