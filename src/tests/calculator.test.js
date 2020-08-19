const calculator = require('../modules/calculator');

test('calculates the sum of two numbers',() => expect(calculator.add(3,2)).toBe(5));

test('calculates the difference of two numbers', () => expect(calculator.subtract(10,5)).toBe(5));