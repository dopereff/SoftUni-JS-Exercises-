const biggestNumber = (input) => {
  let biggestNumber = input[0];
  let i = 0;

  while (input[i] != "Stop") {
    if (Number(input[i]) >= biggestNumber) {
      biggestNumber = Number(input[i]);
      i++;
    } else {
      i++;
    }
  }
  console.log(biggestNumber);
};
biggestNumber(["45", "-20", "7", "99", "Stop"]);
