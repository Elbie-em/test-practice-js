import caesarCipher from '../modules/caesar-cipher-es6';

it('encrypts string with caesar cipher algorithm', () => expect(caesarCipher('hello, world.', 13)).toBe('uryyb, jbeyq.'));
