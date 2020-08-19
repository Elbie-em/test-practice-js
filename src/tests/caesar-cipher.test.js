const caesarCipher = require('../modules/caesar-cipher');

it('encrypts string with caesar cipher algorithm', () =>
  expect(caesarCipher('hello, world.', 13)).toBe('uryyb, jbeyq.')
)

