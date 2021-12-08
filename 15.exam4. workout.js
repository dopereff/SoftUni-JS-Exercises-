const workout = (input) => {
  const daysTraining = Number(input[0]);
  let previousDayDistance = Number(input[1]);
  const targetDistance = 1000;
  let totalDistance = previousDayDistance;
  let message;

  for (let i = 2; i < input.length; i++) {
    let distanceIncrease = previousDayDistance * (Number(input[i]) * 0.01);
    let todayDistance = previousDayDistance + distanceIncrease;
    totalDistance += todayDistance;
    previousDayDistance = todayDistance;
  }

  if (totalDistance >= targetDistance) {
    message = `You've done a great job running ${Math.ceil(
      totalDistance - targetDistance
    )} more kilometers!`;
  } else {
    message = `Sorry Mrs. Ivanova, you need to run ${Math.ceil(
      targetDistance - totalDistance
    )} more kilometers`;
  }

  console.log(message);
};

workout(["4", "100", "30", "50", "60", "80"]);
