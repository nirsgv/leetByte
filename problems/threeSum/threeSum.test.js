const threeSum = require('./threeSum');

test('Be a function', () => {
    expect(typeof(threeSum)).toBe('function');
});

test('Succeed', () => {
    expect(threeSum([100, 2, 50, 25, 4, 1, 44, 456, 56, 23, 33])).toEqual(true);
    expect(threeSum([100, 3, 33, 44, 55, 12])).toEqual(true);
    expect(threeSum([100, 95, 2, 3,])).toEqual(true);
});

test('Fail', () => {
    expect(threeSum([100, 3, 33, 88, 23, 14])).toEqual(false);
    expect(threeSum([100, 3, 33, 44, 55, 14])).toEqual(false);
    expect(threeSum([100, 1, 33, 42, 55, 88])).toEqual(false);
});