const capitalize = string => string[0].toUpperCase() + string.split('').slice(1).join('');

const reverseString = string => string.split('').reverse().join('');

module.exports = {
  capitalize,
  reverseString,
};