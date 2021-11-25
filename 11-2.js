const password = (input) => {
  const username = input[0];
  const password = input[1];
  let i = 2;
  while (input[i] != password) {
    i++;
  }
  console.log("Welcome " + username);
};
password(["Nakov", "1234", "Pass", "12324", "31234", "1234"]);
