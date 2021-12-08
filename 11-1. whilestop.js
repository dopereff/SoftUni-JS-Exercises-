const whileStop = (input) => {
  let i = 0;
  while (input[i] != "Stop") {
    console.log(input[i]);
    i++
  }
};

whileStop([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);
