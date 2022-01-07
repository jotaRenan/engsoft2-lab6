function sum(a, b) {
    return a + b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error();
    }
    return a / b;
}

function square(n) {
    return n*n;
}

function isOdd(n) {
    return n % 2 === 1;
}

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n-1);
}

module.exports = {sum, divide, square, isOdd, factorial};