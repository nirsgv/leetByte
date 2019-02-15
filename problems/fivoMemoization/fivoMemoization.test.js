const fivo = require('./fivoMemoization');

test('Be a function', () => {
    expect(typeof(fivo)).toBe('function');
});

test('return a camelcased string', () => {
    expect(fivo(4)).toEqual(8);
});