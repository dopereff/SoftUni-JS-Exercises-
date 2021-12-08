const braceletStand = (dailyAllowance, dailyTurnover, totalCost, giftPrice) => {
  const daysUntilBirthday = 5;
  const profit =
    (dailyAllowance + dailyTurnover) * daysUntilBirthday - totalCost;
  let message;

  if (profit >= giftPrice) {
    message = `Profit: ${profit.toFixed(2)} BGN, the gift has been purchased.`;
  } else {
    message = `Insufficient money: ${(giftPrice - profit).toFixed(2)} BGN.`;
  }

  console.log(message);
};

braceletStand(15.2, 200.0, 7.3, 1500.12);
