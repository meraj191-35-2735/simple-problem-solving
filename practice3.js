function addNumbers(first, second) {
    const total = first + second;
    return "Sum : " + total;
}

function differenceNumbers(first, second) {
    if (first > second) {
        const total = first - second;
        return "Difference: " + total;
    } else {
        const total = second - first;
        return "Difference: " + total;
    }
}

function multiplyNumbers(first, second) {
    const total = first * second;
    return "Multiplication: " + total;
}

function divideNumbers(first, second) {
    if (first > second) {
        const total = first / second;
        return "Division: " + total;
    } else {
        const total = second / first;
        return "Division: " + total;
    }
}

function modNumbers(first, second) {
    if (first > second) {
        const total = first % second;
        return "Mod : " + total;
    } else {
        const total = second % first;
        return "Mod : " + total;
    }
}
let addition = addNumbers(5, 7)
let minus = differenceNumbers(5, 7)
let multiplication = multiplyNumbers(5, 7)
let division = divideNumbers(5, 7)
let modulus = modNumbers(5, 7)
console.log(addition)
console.log(minus)
console.log(multiplication)
console.log(division)
console.log(modulus)