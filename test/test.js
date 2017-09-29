const assert = require('assert');
const diff = require('../index.js');
describe('test arr-difference', () => {
	it('diff([1,2,3,1], [1,2]) should equal [1,3]', () => {
		const arr = diff([1,2,3,1], [1,2]);
		assert.equal(arr.toString(), [1,3].toString());
	})
	it('diff([1,2,3,1], [1,2,1,1]) should equal [3]', () => {
		const arr = diff([1,2,3,1], [1,2,1,1]);
		assert.equal(arr.toString(), [3].toString());
	})
	it('diff([1,2,3,1], [1,2], [3]) should equal [1]', () => {
		const arr = diff([1,2,3,1], [1,2], [3]);
		assert.equal(arr.toString(), [1].toString());
	})
	it('diff([1,2,3,1], [1], [2], [3]) should equal [1]', () => {
		const arr = diff([1,2,3,1], [1], [2], [3]);
		assert.equal(arr.toString(), [1].toString());
	})
	it('diff({}, {}) should equal []', () => {
		const arr = diff({}, {});
		assert.equal(arr.toString(), [].toString());
	})
})