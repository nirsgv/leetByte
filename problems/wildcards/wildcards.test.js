const wildcards = require('./wildcards');

test('Be a function', () => {
    expect(typeof(wildcards)).toBe('function');
});

test('String to be false', () => {
    expect(wildcards('+++++* abcdehhhhh4')).toBe(false);
    expect(wildcards('+++++* abcdehhhhhhhhh')).toBe(false);
});

test('String to be true', () => {
    expect(wildcards('$**+*{2} 9mmmrrrkbb')).toBe(true);
    expect(wildcards('+++++* abcdehhh')).toBe(true);
    expect(wildcards('$$$+$$+++ 555g44sss')).toBe(true);

   expect(wildcards('*{2}$*{12}+ aa7ssssssssssssr')).toBe(true);
});