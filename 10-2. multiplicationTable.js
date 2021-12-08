const numberCheck = (number) => {
  let result = number;
  if (typeof number != "number") {
   result = Number(number);
  }
  return result;
};

const multiplicationTable = (number) => {
  const castedNumber = numberCheck(number);
  if (castedNumber <= 0 || castedNumber > 10 || isNaN(castedNumber)) {
   console.log("Please enter a number between 1 - 10.");
  } else {
    for (i = 1; i < 11; i++) {
      let multiplicationSum = i * castedNumber;
      console.log(`${i} X ${castedNumber} = ${multiplicationSum}`);
    }
  }
};
multiplicationTable("8");
