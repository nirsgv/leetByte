const bubbleSort = require('./bubbleSort');

test('Be a function', () => {
    expect(typeof(bubbleSort)).toBe('function');
});

test('Sorting numbers', () => {
    expect(bubbleSort([2,1,0,44,125,7,45,67,-67])).toEqual([-67, 0, 1, 2, 7, 44, 45, 67, 125]);
});