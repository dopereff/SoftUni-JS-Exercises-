const strValue = (str) => {
  let result = 0;
  if (typeof str === "number") {
    str = str.toString();
  }
  for (i = 0; i < str.length; i++) {
    result += Number(str[i]);
  }
  console.log(`The sum of the digits is ${result}`);
};

strValue("25");
