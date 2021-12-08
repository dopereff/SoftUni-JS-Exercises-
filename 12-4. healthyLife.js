const healthyLife = (input) => {
  const stepsGoal = 10000;
  let steps = 0;
  let index = 0;
  let stepsSoFar = input[index];
  let reachGoal = false;

  while (index < input.length) {
    if (stepsSoFar === "Going home") {
      index++;
      stepsSoFar = input[index];
      continue;
    }

    stepsSoFar = Number(input[index]);
    steps += stepsSoFar;

    if (steps >= stepsGoal) {
      reachGoal = true;
      break;
    }

    index++;
    stepsSoFar = input[index];
  }
  const message = reachGoal
    ? `Goal reached! Good job! ${steps - stepsGoal} steps over the goal!`
    : `${stepsGoal - steps} more steps to reach goal.`;
  console.log(message);
};

console.log(`Scenario 1:`);
healthyLife(["1500", "300", "2500", "3000", "Going home", "200"]);
console.log(`\nScenario 2:`);
healthyLife(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
