const multiplicationTable = () => {
  for (let n = 1; n <= 10; n++) {
    for (let x = 1; x <= 10; x++) {
      console.log(`${n} * ${x} = ${n * x}`);
    }
  }
};
multiplicationTable();
