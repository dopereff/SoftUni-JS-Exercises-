const bankAccount = (input) => {
  let i = 0;
  let sum = 0;
  while (input[i] != "NoMoreMoney") {
    if (Number(input[i]) < 1) {
      console.log("Invalid operation!");
      break;
    } else {
      let n = Number(input[i]);
      sum = sum + n;
      console.log(`Increase: ${n.toFixed(2)}`);
      i++;
    }
  }
  console.log(`Total: ${sum}`);
};

bankAccount(["120", "45.55", "-150"]);
