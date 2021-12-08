function trainTheTrainers(input) {
  const joureyCount = input[0];
  let totalGradesCount = 0;
  let totalGradesSum = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] === "Finish") {
      console.log(
        `Student's final assessment is ${Number(totalGradesSum / totalGradesCount).toFixed(2)}.`
      );
      break;
    }

    if (isNaN(input[i]) === false) {
      continue;
    }

    let currentPresentation = input[i];
    let currentPresentationGradeSum = 0;

    for (let n = i + 1; n < input.length; n++) {
      if (isNaN(input[n]) === true) {
        console.log(
          `${currentPresentation} - ${Number(currentPresentationGradeSum / joureyCount).toFixed(2)}.`
        );
        break;
      } else {
        totalGradesCount++;
        totalGradesSum += Number(input[n]);
        currentPresentationGradeSum += Number(input[n]);
      }
    }
  }
}

trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
