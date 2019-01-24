const starRating = require('./starRating');

test('Be a function', () => {
    expect(typeof(starRating)).toBe('function');
});

test('Return correct star rating', () => {
    expect(starRating("0.38")).toEqual("half empty empty empty empty");
    expect(starRating("4.5")).toEqual("full full full full half");
});