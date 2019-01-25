const fizzBuzz = require('./fizzBuzz');

test('Be a function', () => {
    expect(typeof(fizzBuzz)).toBe('function');
});

test('Sorting numbers', () => {
    expect(fizzBuzz(3)).toEqual("1 2 Fizz");
    expect(fizzBuzz(8)).toEqual("1 2 Fizz 4 Buzz Fizz 7 8");
});