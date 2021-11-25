const oldLibary = (input) => {
  const searchingFor = input[0];
  let bookFound = false;
  let i = 1;
  let nextBookName = input[i];
  let message;

  while (nextBookName != "No More Books") {
    if (searchingFor === nextBookName) {
      bookFound = true;
      break;
    }
    i++;
    nextBookName = input[i];
  }
  if (bookFound === false) {
    message = `The book you search is not here!
You checked ${i - 1} books.`;
  } else {
    message = `You checked ${i - 1} books and found it!`;
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
