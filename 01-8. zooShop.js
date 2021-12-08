function zooShop(input) {
  let dogFoodPrice = 2.5;
  let catFoodPrice = 4;
  let dogFoodTotal = dogFoodPrice * Number(input[0]);
  let catFoodTotal = catFoodPrice * Number(input[1]);
  let total = dogFoodTotal + catFoodTotal;
  console.log(total + " lv");
}
zooShop(["5", "4"]);
