function number1To9(input) {
  let a = Number(input);
  if (a == 1) {
    console.log("one");
  } else if (a == 2) {
    console.log("two");
  } else if (a == 3) {
    console.log("three");
  } else if (a == 4) {
    console.log("four");
  } else if (a == 5) {
    console.log("five");
  } else if (a == 6) {
    console.log("six");
  } else if (a == 7) {
    console.log("seven");
  } else if (a == 8) {
    console.log("eight");
  } else if (a == 9) {
    console.log("nine");
  } else {
    console.log("number too big");
  }
}
number1To9("5");

function number1To9(input) {
  let a = Number(input);
  switch (a) {
    case 1:
      console.log("one");
      break;
    case 2:
      console.log("two");
      break;
    case 3:
      console.log("tree");
      break;
    case 4:
      console.log("four");
      break;
    case 5:
      console.log("five");
      break;
    case 6:
      console.log("six");
      break;
    case 7:
      console.log("seven");
      break;
    case 8:
      console.log("eight");
      break;
    case 9:
      console.log("nine");
      break;
    default:
      console.log("number too big");
  }
}
number1To9(45);
