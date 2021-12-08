function depositCalc(input){
    let deposit = Number(input[0]);
    let deadline = Number(input[1]);
    let yearlyRate = Number(input[2]);
    let sum = deposit + deadline * ((deposit * yearlyRate) / 12);
    console.log(sum);

}
depositCalc(["200", "3", "0.057"])