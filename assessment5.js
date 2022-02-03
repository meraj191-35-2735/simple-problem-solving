function positiveNumbers(numbers) {
    let newNumbers = [];
    for (let number of numbers) {
        if (number >= 0) {
            newNumbers.push(number);
        } else {
            break;
        }
    }
    return newNumbers;
}
let givenNumbers = [1, 0, 6, 7, 3, 1, 3, -4, 2, 1, 6];
console.log(positiveNumbers(givenNumbers));