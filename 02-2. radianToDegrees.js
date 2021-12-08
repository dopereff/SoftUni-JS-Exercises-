function radianToDegrees(input) {
    let radian = Number(input[0]);
    let degree = radian * 180 / Math.PI;
    console.log(degree);

}
radianToDegrees(["3.1416"])