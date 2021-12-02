function painting(input) {
  let naylonPrice = 1.5;
  let paintPrice = 14.5;
  let razreditelPrice = 5;
  let naylonPriceTotal = (Number(input[0]) + 2) * naylonPrice;
  let paintPriceTotal =
    (0.1 * Number(input[1]) + Number(input[1])) * paintPrice;
  let razreditelPriceTotal = Number(input[2]) * razreditelPrice;
  let materialsCost =
    naylonPriceTotal + paintPriceTotal + razreditelPriceTotal + 0.4;
  let maistorCostPerHour = materialsCost * 0.3;
  let maistorCostTotal = maistorCostPerHour * Number(input[3]);
  let costTotal = materialsCost + maistorCostTotal;
  console.log("Total dmg is " + costTotal + "lv");
}
painting(["5", "10", "10", "1"]);
