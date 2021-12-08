const oscars = (input) => {
  const nominee = input[0];
  const pointsStarting = Number(input[1]);
  const pointsNeeded = 1250.5;
  let points = pointsStarting;

  for (let i = 3; i < input.length; i += 2) {
    points += (input[i].length * input[i + 1]) / 2;
  }

  if (points < pointsNeeded) {
    message = `Sorry, ${nominee} you need ${pointsNeeded - points} more!`;
  } else {
    message = `Congratulations, ${nominee} got a nominee for leading role with ${Math.floor(
      points
    )}!`;
  }

  console.log(message);
};

oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
