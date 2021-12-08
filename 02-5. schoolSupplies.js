function schoolSupplies(input) {
  let penPirce = "5.8";
  let sharpiePrice = "7.2";
  let cleaningSolutionPrice = "1.2";
  let penPriceTotal = Number(penPirce) * Number(input[0]);
  let sharpiePriceTotal = Number(sharpiePrice) * Number(input[1]);
  let cleaningSolutionPriceTotal =
    Number(cleaningSolutionPrice) * Number(input[2]);
  let total = penPriceTotal + sharpiePriceTotal + cleaningSolutionPriceTotal;
  let discount = total * Number(input[3]);
  let totalDiscounted = total - discount;

  console.log(totalDiscounted);
}
schoolSupplies(["2", "3", "4", "0.25"]);
