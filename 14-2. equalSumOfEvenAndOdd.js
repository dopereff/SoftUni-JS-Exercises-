function equalSumOfEvenAndOdd(input) {
  let message = "";
  for (i = Number(input[0]); i <= Number(input[1]); i++) {
    let numToSeparate = i;
    let arrayOfDigits = Array.from(String(numToSeparate), Number);
    let evenSum = 0;
    let oddSum = 0;
    for (x = 0; x < arrayOfDigits.length; x++) {
      const currentDigit = Number(arrayOfDigits[x]);

      if ((x + 1) % 2 === 0) {
        evenSum += Number(currentDigit);
      } else {
        oddSum += Number(currentDigit);
      }
    }
    if (evenSum === oddSum) {
      let arrayToStringValue = arrayOfDigits.join("");
      message += `${arrayToStringValue} `;
    }
    evenSum = 0;
    oddSum = 0;
  }
  console.log(message);
}

equalSumOfEvenAndOdd(["299900", "300000"]);
