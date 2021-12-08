const hairSaloon = (input) => {
  const target = Number(input[0]);
  let earnedMoney = 0;
  targetReached = false;
  let message;

  for (i = 1; i < input.length; i++) {
    if (earnedMoney >= target) {
      targetReached = true;
      break;
    } else if (input[i] === "closed") {
      break;
    } else if (input[i] === "haircut") {
      if (input[i + 1] === "ladies") {
        earnedMoney += 20;
      } else if (input[i + 1] === "mens") {
        earnedMoney += 15;
      } else {
        earnedMoney += 10;
      }
    } else if (input[i] === "color") {
      if (input[i + 1] === "full color") {
        earnedMoney += 30;
      } else {
        earnedMoney += 20;
      }
    } else {
      continue;
    }
  }

  targetReached
    ? (message = `You have reached your target for the day!`)
    : (message = `Target not reached! You need ${
        target - earnedMoney
      }lv. more.`);

  console.log(`${message}\nEarned money: ${earnedMoney}lv.`);
};

hairSaloon(["50", "color", "full color", "haircut", "ladies"]);
