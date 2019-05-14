const isValid = require('../src/is-valid');

test('test case #1', () => {
    const s = 'abc';

    expect(isValid(s)).toBe('YES');
});

test('test case #2', () => {
    const s = 'abcc';

    expect(isValid(s)).toBe('YES');
});

test('test case #3', () => {
    const s = 'abccc';

    expect(isValid(s)).toBe('NO');
});

test('test case #4', () => {
    const s = 'aabbccddeefghi';

    expect(isValid(s)).toBe('NO');
});

test('test case #5', () => {
    const s = 'abcdefghhgfedecba';

    expect(isValid(s)).toBe('YES');
});

test('test case #6', () => {
    const s = 'aabbcd';

    expect(isValid(s)).toBe('NO');
});

test('test case #7', () => {
    const s = 'aabbccddeefghi';

    expect(isValid(s)).toBe('NO');
});

test('test case #8', () => {
    const s = 'abcdefghhgfedecba';

    expect(isValid(s)).toBe('YES');
});

test('test case #9', () => {
    const s = 'aabbc';

    expect(isValid(s)).toBe('YES');
});

