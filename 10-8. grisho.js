const grisho = (input) => {
  let numberOfTournaments = Number(input[0]);
  let startingPoints = Number(input[1]);
  let points = startingPoints;
  let wonTournaments = 0;
  let winPoints = 2000;
  let finalPoints = 1200;
  let semiFinalPoints = 720;

  for (let i = 2; i < input.length; i++) {
    if (input[i] === "W") {
      points += winPoints;
      wonTournaments++;
    } else if (input[i] === "F") {
      points += finalPoints;
    } else if (input[i] === "SF") {
      points += semiFinalPoints;
    }
  }
  console.log(`Final points: ${points}`);
  console.log(
    `Avarage points: ${(points - startingPoints) / numberOfTournaments}`
  );
  console.log(((wonTournaments / numberOfTournaments) * 100).toFixed(2) + "%");
};

grisho(["4", "750", "SF", "W", "SF", "W"]);
