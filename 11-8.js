const graduation = (input) => {
  const name = input[0];
  let grade = 0;
  let fail = 0;
  let gradeSum = 0;
  let i = 1;

  while (i < input.length) {
    if (Number(input[i]) <= 4) {
      fail++;
      i++;
    } else {
      gradeSum = gradeSum + Number(input[i]);
      grade++;
      i++;
    }
    if (fail >= 2) {
      graduationMessage = `${name} has been excluded at ${grade + 1} grade.`;
    } else {
      graduationMessage = `${name} graduated. Avarage grade: ${(
        gradeSum / grade
      ).toFixed(2)}`;
    }
  }
  console.log(graduationMessage);
};

graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
