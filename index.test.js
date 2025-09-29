const { findIndex } = require('./index');

describe('findIndex', () => {
    test('should return correct index when value is found', () => {
        const array = [1, 2, 3, 4, 5];
        expect(findIndex(array, 3)).toBe(2);
        expect(findIndex(array, 1)).toBe(0);
        expect(findIndex(array, 5)).toBe(4);

    });

    test('should work with string arrays', () => {
        const array = ['apple', 'banana', 'cherry'];
        expect(findIndex(array, 'banana')).toBe(1);
    });


    test('should handle different data types', () => {
        const mixedArray = [1, 'hello', true, null, undefined];
        expect(findIndex(mixedArray, 'hello')).toBe(1);
        expect(findIndex(mixedArray, true)).toBe(2);
        expect(findIndex(mixedArray, null)).toBe(3);
        expect(findIndex(mixedArray, undefined)).toBe(4);
    });

    test('should return -1 when value is not found', () => {
        const array = [1, 2, 3, 4, 5];
        expect(findIndex(array, 6)).toBe(-1);
        expect(findIndex(array, 0)).toBe(-1);
    });
});
