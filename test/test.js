const assert = require('assert');
const diff = require('../index.js');
describe('test arr-difference', () => {
	it('diff([1,2,3,1], [1,2]) should equal [1,3]', () => {
		const result = diff([1,2,3,1], [1,2]);
		assert.deepStrictEqual(result, [1,3]);
	})
	it('diff([1,2,3,1], [1,2,1,1]) should equal [3]', () => {
		const result = diff([1,2,3,1], [1,2,1,1]);
		assert.deepStrictEqual(result, [3]);
	})
	it('diff([1,2,3,1], [1,2], [3]) should equal [1]', () => {
		const result = diff([1,2,3,1], [1,2], [3]);
		assert.deepStrictEqual(result, [1]);
	})
	it('diff([1,2,3,1], [1], [2], [3]) should equal [1]', () => {
		const result = diff([1,2,3,1], [1], [2], [3]);
		assert.deepStrictEqual(result, [1]);
	})
	it('diff({}, {}) should equal [] for non-array input', () => {
		const result = diff({}, {});
		assert.deepStrictEqual(result, []);
	})

	it('should not modify the original input array arr', () => {
		const originalArr = [1, 2, 3, 4, 5];
		const childArr = [2, 4];
		const originalArrCopy = [...originalArr]; // Create a copy for comparison
		const result = diff(originalArr, childArr);
		assert.deepStrictEqual(result, [1, 3, 5]);
		assert.deepStrictEqual(originalArr, originalArrCopy, "Original input array should not be modified.");
	});

	it('diff([], [1,2]) should result in [] for an empty input array', () => {
		const result = diff([], [1,2]);
		assert.deepStrictEqual(result, []);
	});

	it('diff([1,2,3], []) should result in [1,2,3] when childArr is empty', () => {
		const originalArr = [1, 2, 3];
		const result = diff(originalArr, []);
		assert.deepStrictEqual(result, [1, 2, 3]);
	});

	it('diff([1,2,3], [1,2,3]) should result in [] when all elements are filtered out', () => {
		const result = diff([1,2,3], [1,2,3]);
		assert.deepStrictEqual(result, []);
	});

	it('diff([1,2,3], [4,5,6]) should result in [1,2,3] when no elements are filtered out', () => {
		const result = diff([1,2,3], [4,5,6]);
		assert.deepStrictEqual(result, [1,2,3]);
	});
})