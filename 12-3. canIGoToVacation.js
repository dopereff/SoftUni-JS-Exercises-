const canIGoToVacation = (input) => {
  const vacationCost = Number(input[0]);
  let savedMoney = Number(input[1]);
  let daysWithoutSave = 0;
  let daysPassed = 0;
  let index = 2;
  let transaction = input[index];
  let transactionSum = input[index + 1];
  let message;

  while (savedMoney < vacationCost) {
    if (transaction === "spend") {
      savedMoney -= transactionSum;
      daysWithoutSave++;
    } else {
      savedMoney += transactionSum;
      daysWithoutSave = 0;
    }
    daysPassed++;
    if (daysWithoutSave === 5) {
      message = `You can't save the money. \n${daysPassed}`;
      break;
    }
    index += 2;
    message = `You saved the money for ${daysPassed + 1} days.`;
    transaction = input[index];
    transactionSum = input[index + 1];
  }
  console.log(message);
};
console.log(`Scenario 1:`);
canIGoToVacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
console.log(`\nScenario 2:`);
canIGoToVacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
