'use strict';

import quickSort from './script33_plus.js';

// const quickSort = require('./script33_plus.js');

describe('quickSort', () => {
    it('should sort an array of numbers in ascending order', () => {
        const unsortedArray = [7, 2, 1, 6, 8, 5, 3, 4];
        const sortedArray = quickSort(unsortedArray);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should handle an empty array', () => {
        const emptyArray = [];
        const sortedArray = quickSort(emptyArray);
        expect(sortedArray).toEqual([]);
    });

    it('should handle an array with one element', () => {
        const singleElementArray = [42];
        const sortedArray = quickSort(singleElementArray);
        expect(sortedArray).toEqual([42]);
    });

    it('should sort an array with duplicate elements', () => {
        const arrayWithDuplicates = [7, 2, 1, 6, 8, 5, 3, 4, 5, 8, 7];
        const sortedArray = quickSort(arrayWithDuplicates);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8]);
    });
});

