const oldLibary = (input) => {
  const searchingFor = input[0];
  let booksCheked = 0;
  let i = 1;
  let message;

  while (input[i] != "No More Books") {
    if (searchingFor === input[i]) {
      booksCheked++;
      message = `You checked ${booksCheked - 1} books and found it!`;
      break;
    } else {
      booksCheked++;
      i++;
      message = `The book you search is not here!
You checked ${booksCheked} books.`;
    }
  }
  console.log(message);
};
oldLibary([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
