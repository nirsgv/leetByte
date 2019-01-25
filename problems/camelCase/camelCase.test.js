const camelCase = require('./camelCase');

test('Be a function', () => {
    expect(typeof(camelCase)).toBe('function');
});

test('return a camelcased string', () => {
    expect(camelCase("cats AND*Dogs-are Awesome")).toEqual("catsAndDogsAreAwesome");
    expect(camelCase("a b c d-e-f%g")).toEqual("aBCDEFG");
});