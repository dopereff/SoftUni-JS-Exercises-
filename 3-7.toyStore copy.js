function toyStore(input) {
  let puzzlePrice = 2.6;
  let dollPrice = 3;
  let teddyBearPrice = 4.1;
  let minionPrice = 8.2;
  let truckPrice = 2;
  let vacationPrice = Number(input[0]);
  let puzzleQnty = Number(input[1]);
  let dollQnty = Number(input[2]);
  let teddyBearQnty = Number(input[3]);
  let minionQnty = Number(input[4]);
  let truckQnty = Number(input[5]);
  let toysQnty = puzzleQnty + dollQnty + teddyBearQnty + minionQnty + truckQnty;
  let puzzleOborot = puzzlePrice * puzzleQnty;
  let dollOborot = dollPrice * dollQnty;
  let teddyBearOborot = teddyBearPrice * teddyBearQnty;
  let minionOborot = minionPrice * minionQnty;
  let truckOborot = truckPrice * truckQnty;
  let oborot =
    puzzleOborot + dollOborot + teddyBearOborot + minionOborot + truckOborot;
  let discountPercent = 0.25;
  let discount;
  let rentPercent = 0.1;
  let rent;
  let oborotAfterDiscount;
  let profit;
  let moneyLeft;

  if (toysQnty > 50) {
    discount = oborot * discountPercent;
    oborotAfterDiscount = oborot - discount;
    rent = oborotAfterDiscount * rentPercent;
    profit = oborotAfterDiscount - rent;
  } else {
    oborotAfterDiscount = oborot;
    rent = oborotAfterDiscount * rentPercent;
    profit = oborotAfterDiscount - rent;
  }

  moneyLeft = profit - vacationPrice;
  if (moneyLeft > 0) {
    console.log(`Yes! ${moneyLeft} lv. left.`);
  } else {
    console.log(`Not enough money! ${moneyLeft} lv. needed.`);
  }
}

toyStore(["40.8", "20", "25", "30", "50", "10"]);

1