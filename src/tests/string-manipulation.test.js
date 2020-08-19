const { capitalize, reverseString } = require('../modules/string-manipulation')

it('capitalize string', () => {
  expect(capitalize('string')).toBe('String')
})