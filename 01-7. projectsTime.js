function projectsTime(input) {
  let hours = "3";
  let name = input[0];
  let projects = input[1];
  let time = Number(hours) * Number(projects);
  console.log(
    `The architecht ${name} will need ${time} hours to complete ${projects} project/s.`
  );
}

projectsTime(["Gosho", "20"]);
