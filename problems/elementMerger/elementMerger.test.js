const elementMerger = require('./elementMerger');

test('Be a function', () => {
    expect(typeof(elementMerger)).toBe('function');
});

test('continuously get the difference of adjacent integers to create a new array of integers, ' +
    'then do the same for the ' +
    'new array until a single number is left and return that number', () => {
    expect(elementMerger([5, 7, 16, 1, 2])).toEqual(7);
    expect(elementMerger([1, 1, 1, 2])).toEqual(1);
});