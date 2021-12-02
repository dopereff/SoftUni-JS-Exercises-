const lylyWasher = (lylyAge, washerPrice, toyPrice) => {
  let totalToysRecieved = 0;
  let moneyRecieved = 0;
  let moneyGift = 0;
  let brotherTax = 0;
  let message;

  for (let i = 1; i <= lylyAge; i++) {
    if (i % 2 != 0) {
      totalToysRecieved++;
    } else {
      moneyGift = moneyGift + 10;
      moneyRecieved = moneyRecieved + moneyGift;
      brotherTax++;
    }
  }

  let totalSum = moneyRecieved + totalToysRecieved * toyPrice - brotherTax;
  if (totalSum > washerPrice) {
    message = `Yes! ${totalSum - washerPrice}`;
  } else {
    message = `No! ${washerPrice - totalSum}`;
  }
  console.log(message);
};

lylyWasher(21, 1570.98, 6);
