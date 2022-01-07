const {sum, divide, square, isOdd, factorial} = require('./calculator');

test('sum of two arguments: 1, 2 equals 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum of array of arguments [1, 2] equals 3', () => {
  expect(sum([1, 2])).toBe(3);
});

test('dividing a number by 0 throws an error', () => {
  expect(() => divide(1, 0)).toThrow(Error);
});

test('dividing 3 by 2 equals 1.5', () => {
  expect(divide(3, 2)).toBe(1.5);
});

test('square of 3 equals 9', () => {
  expect(square(3)).toBe(9);
});

test('square of -3 equals 9', () => {
  expect(square(-3)).toBe(9);
});

test('isOdd of 0 is true', () => {
  expect(isOdd(0)).toBe(true);
});

test('isOdd of 1 is false', () => {
  expect(isOdd(1)).toBe(false);
});

test('factorial of 5 is 120', () => {
  expect(factorial(5)).toBe(120);
});

test('factorial of 1 is 1', () => {
  expect(factorial(1)).toBe(1);
});

