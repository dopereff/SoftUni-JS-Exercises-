const numberCheck = (number) => {
  if (typeof number != "number") {
    number = Number(number);
  }
};

const multiplicationTable = (number) => {
  // numberCheck(number);

  if (typeof number != "number") {
    number = Number(number);
  }

  if (number <= 0 || number > 10) {
    console.log("Please enter a number between 1 - 10.");
  } else if (number === NaN) {
    console.log("Please enter a number.");
  } else {
    for (i = 1; i < 11; i++) {
      let multiplicationSum = i * number;
      console.log(`${i} X ${number} = ${multiplicationSum}`);
    }
  }
};

multiplicationTable("hui");
