function buildingPlan(input) {
  const floors = Number(input[0]);
  const rooms = Number(input[1]);
  let message = "";
  let roomType = "";

  for (let i = floors; i >= 1; i--) {
    if (i < floors) {
      message += `\n`;
    }

    if (i % 2 != 0) {
      roomType = "A";
    } else {
      roomType = "O";
    }

    if (i === floors) {
      roomType = "L";
    }

    for (let x = 0; x < rooms; x++) {
      message += `${roomType}${i}${x} `;
    }
  }
  console.log(message);
}

buildingPlan(["9", "5"]);
