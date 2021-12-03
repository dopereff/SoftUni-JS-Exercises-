const sumPrimeNotPrime = (input) => {
  let sumPrime = 0;
  let sumNonPrime = 0;
  let isPrime = true;

  for (i = 0; i < input.length; i++) {
    if (input[i] === "stop") {
      break;
    }

    if (Number(input[i]) < 0) {
      console.log(`Number is negative.`);
      continue;
    }

    if (Number(input[i]) === 0) {
      continue;
    }

    for (let x = 2; x < Number(input[i]); x++) {
      if (Number(input[i]) % x === 0) {
        isPrime = false;
        break;
      } else {
        isPrime = true;
      }
    }

    isPrime
      ? (sumPrime += Number(input[i]))
      : (sumNonPrime += Number(input[i]));
  }
  console.log(
    `Sum of all prime numbers is: ${sumPrime}\nSum of all non prime numbers is: ${sumNonPrime}`
  );
};

sumPrimeNotPrime(["30", "83", "33", "-1", "20", "stop"]);
