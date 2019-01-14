const wildcards = require('./wildcards');

test('getRandomBetween to be a function', () => {
    expect(typeof(wildcards)).toBe('function');
});

test('getRandomBetween to return a number', () => {
    expect(wildcards('a')).toBe(true);
});