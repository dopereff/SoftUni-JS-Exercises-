const cpuProduction = (targetProduction, employeesCount, workingDays) => {
  const workingHoursPerDay = 8;
  const cpuPrice = 110.1;
  const workingHoursTotal = employeesCount * workingDays * workingHoursPerDay;
  const production = Math.floor(workingHoursTotal / 3);
  let message;

  if (production >= targetProduction) {
    message = `Profit: -> ${(
      (production - targetProduction) *
      cpuPrice
    ).toFixed(2)} BGN`;
  } else {
    message = `Losses: -> ${(
      (targetProduction - production) *
      cpuPrice
    ).toFixed(2)} BGN`;
  }

  console.log(message);
};

cpuProduction(150, 7, 18);
