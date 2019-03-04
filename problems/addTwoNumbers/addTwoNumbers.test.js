const addTwoNumbers = require('./addTwoNumbers');

test('Be a function', () => {
    expect(typeof(addTwoNumbers)).toBe('function');
});

// test('Sorting numbers', () => {
// //     expect(addTwoNumbers(3)).toEqual("1 2 Fizz");
// //     expect(addTwoNumbers(8)).toEqual("1 2 Fizz 4 Buzz Fizz 7 8");
// // });