const countOccurences = require('./letteRepition.js');
test('Count the number of occurences of a letter in a string', () => {
    expect(countOccurences('hello', 'l')).toBe(2);
    expect(countOccurences('hello', 'o')).toBe(1);
    expect(countOccurences('hello', 'z')).toBe(0);
});