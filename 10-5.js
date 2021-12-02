function browserFines(input) {
  let openTabs = input[0];
  let salary = input[1];
  let fine = 0;

  for (i = 2; i < input.length + 1; i++) {
    if (fine >= salary) {
      console.log("YOU BROKE");
      break;
    } else if (input[i] === "facebook") {
      fine += 150;
    } else if (input[i] === "instagram") {
      fine += 100;
    } else if (input[i] === "reddit") {
      fine += 50;
    }
  }
  console.log(salary - fine);
}

browserFines(["3", "500", "facebook", "Stackoverflow.com", "softuni.bg"]);
