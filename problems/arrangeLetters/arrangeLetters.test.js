const arrangeLetters = require('./arrangeLetters');

test('Be a function', () => {
    expect(typeof(arrangeLetters)).toBe('function');
});

// test('return a camelcased string', () => {
//     expect(arrangeLetters(4)).toEqual(8);
// });