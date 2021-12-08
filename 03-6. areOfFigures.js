function areaOfFigures(input) {
  let figureType = input[0];
  let a = Number(input[1]);
  let b = Number(input[2]);
  let area;

  switch (figureType) {
    case "square":
      area = a * a;
      console.log(area.toFixed(3));
      break;
    case "rectangle":
      area = a * b;
      console.log(area.toFixed(3));
      break;
    case "circle":
      area = Math.PI * a * a;
      console.log(area.toFixed(3));
      break;
    case "triangle":
      area = (a * b) / 2;
      console.log(area.toFixed(3));
  }
}
areaOfFigures(["triangle", 4.5, 20]);
