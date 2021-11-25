const sumOfNumber = (input) => {
  let sum = 0;
  let i = 1;
  while (Number(input[i]) < Number(input[0])) {
    sum += Number(input[i]);
    i++;
  }
  console.log(sum);
};

sumOfNumber(["20", "1", "2", "3", "4", "5", "6"]);
