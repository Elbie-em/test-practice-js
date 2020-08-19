const calculator = require('../modules/calculator');

test('adds two numbers',() => expect(calculator.add(3,2)).toBe(5));