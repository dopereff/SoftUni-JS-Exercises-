const cakeMath = (input) => {
  let cakeSize = Number(input[0]) * Number(input[1]);
  let idx = 2;
  let cakePieceEat = input[idx];
  let cakeEaten = true;

  while (cakeSize > 0) {
    if (cakePieceEat === "STOP") {
      cakeEaten = false;
      break;
    }

    cakeSize -= Number(cakePieceEat);
    idx++;
    cakePieceEat = input[idx];
  }
  const message = cakeEaten
    ? `No more cake left! You need ${Math.abs(cakeSize)} pieces more.`
    : `${cakeSize} pieces are left`;
  console.log(message);
};

console.log(`Scenario 1:`);
cakeMath(["10", "10", "20", "20", "20", "20", "21"]);
console.log(`\nScenario 2:`);
cakeMath(["10", "2", "2", "4", "6", "STOP"]);
