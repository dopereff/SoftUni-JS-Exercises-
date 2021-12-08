function summerReading(input){
    let pagesToRead = Number(input[0]);
    let readingSpeed = Number(input[1]);
    let deadline = Number(input[2]);
    let necHours = (pagesToRead / readingSpeed) / deadline;
    console.log(necHours);

}
summerReading(["212", "20", "2"])