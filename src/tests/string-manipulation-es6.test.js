import { capitalize, reverseString } from '../modules/string-manipulation';

it('capitalizes string', () => expect(capitalize('string')).toBe('String'));

it('reverses string', () => expect(reverseString('StriNg')).toBe('gNirtS'));