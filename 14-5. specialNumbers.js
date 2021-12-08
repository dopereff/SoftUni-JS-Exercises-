function specialNumber(n) {
    let allSpecialNumbers = "";

    for (let i = 1111; i <= 9999; i++) {
        let number = i.toString();
        if (n % number[0] === 0 &&
            n % number[1] === 0 &&
            n % number[2] === 0 &&
            n % number[3] === 0) {
            allSpecialNumbers += `${number} `;
        }
    }
    console.log(allSpecialNumbers);
}

specialNumber(["3"]);
