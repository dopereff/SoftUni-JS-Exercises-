function twoNumbersSum(input) {
  let lowNumber = Number(input[0]);
  let lowNumberInner = Number(input[0]);
  let highNumber = Number(input[1]);
  let magicNumber = Number(input[2]);
  let combinationNumber = 0;
  let combinationFound = false;
  let sum = 0;

  for (lowNumber; lowNumber <= highNumber; lowNumber++) {
    for (lowNumberInner = input[0]; lowNumberInner <= highNumber; lowNumberInner++) {
      combinationNumber++;
      sum = lowNumber + lowNumberInner;
      if (sum === magicNumber) {
        combinationFound = true;
        break;
      }
    }
    if (combinationFound === true) {
      break;
    }
  }
  const message = combinationFound
    ? `Combination N:${combinationNumber} (${lowNumber} + ${lowNumberInner} = ${sum})`
    : `${combinationNumber} combinations - neither equals ${magicNumber}`;
  console.log(message);
}
twoNumbersSum(["1", "10", "12"]);
