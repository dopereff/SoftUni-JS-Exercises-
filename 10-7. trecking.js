const trecking = (input) => {
  let climbers = 0;
  let climbersMusala = 0;
  let climbersMoblan = 0;
  let climbersKali = 0;
  let climbersK2 = 0;
  let climbersEverest = 0;

  for (let i = 1; i <= Number(input[0]); i++) {
    if (input[i] <= 5) {
      climbersMusala += Number(input[i]);
    } else if (Number(input[i]) <= 12) {
      climbersMoblan += Number(input[i]);
    } else if (Number(input[i]) <= 25) {
      climbersKali += Number(input[i]);
    } else if (Number(input[i]) <= 40) {
      climbersK2 += Number(input[i]);
    } else {
      climbersEverest += Number(input[i]);
    }
    climbers += Number(input[i]);
  }

  console.log(((climbersMusala / climbers) * 100).toFixed(2) + "%");
  console.log(((climbersMoblan / climbers) * 100).toFixed(2) + "%");
  console.log(((climbersKali / climbers) * 100).toFixed(2) + "%");
  console.log(((climbersK2 / climbers) * 100).toFixed(2) + "%");
  console.log(((climbersEverest / climbers) * 100).toFixed(2) + "%");
};
trecking(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
