const { capitalize, reverseString } = require('../modules/string-manipulation')

it('capitalizes string', () => expect(capitalize('string')).toBe('String'))

it('reverses string', () => expect(reverseString('string')).toBe('gnirts'))