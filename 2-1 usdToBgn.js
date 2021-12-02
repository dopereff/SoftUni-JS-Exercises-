function usdToBgn(input) {
 let rate = "1.79549";
 let usd = Number(input[0]);
 let convUsd = usd * Number(rate);
 console.log(convUsd);
}
usdToBgn(["100"])