const aprtJose = (input) => {
  const aptCubic = Number(input[0]) * Number(input[1]) * Number(input[2]);
  let spaceNeeded = 0;
  let idx = 3;
  let spaceEnough = true;
  while (input[idx] != "Done") {
    if (spaceNeeded > aptCubic) {
      spaceEnough = false;
      break;
    }
    spaceNeeded += Number(input[idx]);
    idx++;
  }
  const message = spaceEnough
    ? `${aptCubic - spaceNeeded} Cubic meters left`
    : `No more free space! You need ${
        spaceNeeded - aptCubic
      } Cubic meters more.`;
  console.log(message);
};

console.log(`Scenario 1:`);
aprtJose(["10", "10", "2", "20", "20", "20", "20", "122"]);
console.log(`\nScenario 2:`);
aprtJose(["10", "1", "2", "4", "6", "Done"]);
