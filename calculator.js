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

module.exports = {sum, divide, square};