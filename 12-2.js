const examPrep = (input) => {
  const maxPoorGrades = Number(input[0]);
  let poorGrades = 0;
  let slovedProblmes = 0;
  let totalGradesScore = 0;
  let message;
  let index = 1;
  let currentProblem = input[index];
  let currentGrade = Number(input[index + 1]);

  while (currentProblem != "Enough") {
    if (currentGrade <= 4) {
      poorGrades++;
    }
    slovedProblmes++;
    totalGradesScore += currentGrade;
    message = `Avarage score: ${totalGradesScore / slovedProblmes}
Number of problems: ${slovedProblmes}
Last problem: ${currentProblem}`;
    index += 2;
    currentProblem = input[index];
    currentGrade = Number(input[index + 1]);
    if (poorGrades === maxPoorGrades) {
      message = `You need a break, ${poorGrades} poor grades.`;
      break;
    }
  }
  console.log(message);
};

console.log("Scenario 1:");
examPrep(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);

console.log("\n" + "Scenario 2:");
examPrep([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
