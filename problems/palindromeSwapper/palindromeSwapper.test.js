const palindromeSwapper = require('./palindromeSwapper');

test('Be a function', () => {
    expect(typeof(palindromeSwapper)).toBe('function');
});

test('Return a correct palindrome after swapping two adjacent letters', () => {
    expect(palindromeSwapper("anna")).toEqual("anna");
    expect(palindromeSwapper("kyaak")).toEqual("kayak");
});

test('Return a correct palindrome after swapping two adjacent letters', () => {
    expect(palindromeSwapper("anscferna")).toEqual("-1");
});