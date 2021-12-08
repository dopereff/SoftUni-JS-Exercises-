const smallestNumber = (input) => {
  let smallestNumber = input[0];
  let i = 0;

  while (input[i] != "Stop") {
    if (Number(input[i]) <= smallestNumber) {
      smallestNumber = Number(input[i]);
      i++;
    } else {
      i++;
    }
  }
  console.log(smallestNumber);
};
smallestNumber(["-1", "-2", "Stop"]);
