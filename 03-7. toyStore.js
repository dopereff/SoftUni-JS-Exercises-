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
  let discount;
  let rentPrice;
  const makeDiscountStr = "makeDiscount";
  const shouldMakeDiscount = toysQnty > 50 && makeDiscountStr;

  function shouldGoingHoliday(oborot) {
    if (oborot > vacationPrice) {
      console.log("Otivame na vakanciq.");
    } else {
      console.log("Stoi si u vas.");
    }
  }

  switch (shouldMakeDiscount) {
    case makeDiscountStr:
      discount = 0.25 * oborot;
      oborot = oborot - discount;
      rentPrice = 0.1 * oborot;
      oborot = oborot - rentPrice;
      shouldGoingHoliday(oborot);
      break;
    default:
      rentPrice = 0.1 * oborot;
      oborot = oborot - rentPrice;
      shouldGoingHoliday(oborot);
  }
}
toyStore(["40.8", "20", "25", "30", "50", "10"]);
