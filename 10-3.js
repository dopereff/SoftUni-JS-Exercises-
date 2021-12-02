const numberHistogram = (input) => {
  let p200 = [];
  let p200To399 = [];
  let p400To599 = [];
  let p600To799 = [];
  let p800 = [];

  for (i = 1; i < input.length - 1; i++) {
    if (input[i] < 200) {
      p200.push(input[i]);
    } else if (input[i] >= 200 && input[i] < 400) {
      p200To399.push(input[i]);
    } else if (input[i] >= 400 && input[i] < 600) {
      p400To599.push(input[i]);
    } else if (input[i] >= 600 && input[i] < 800) {
      p600To799.push(input[i]);
    } else {
      p800.push(input[i]);
    }
  }
  
};

numberHistogram([
  12, 125, 189, 200, 250, 345, 450, 634, 610, 741, 856, 810, 900,
]);
