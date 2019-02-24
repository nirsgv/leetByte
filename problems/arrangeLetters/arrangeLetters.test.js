const arrangeLetters = require('./arrangeLetters');

test('Be a function', () => {
    expect(typeof(arrangeLetters)).toBe('function');
});

test('return a camelcased string', () => {
    expect(arrangeLetters('abc').length).toEqual(6);
    expect(arrangeLetters('abcd').length).toEqual(24);
    expect(arrangeLetters('abcde').length).toEqual(120);
});