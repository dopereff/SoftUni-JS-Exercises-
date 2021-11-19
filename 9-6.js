const wordValue = (str) => {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let result = 0;

  for (i = 0; i < str.length; i++) {
    let char = str[i];
    result += map[char] || 0;
  }
  console.log(result);
};

wordValue("Na kolko e raven toq text?");
