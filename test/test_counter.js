var assert = require('assert');

counter = require('../js/counter.js')
describe('counter', () => {
    describe('increment', () => {
        it('0 -> 1', () => {
            assert.equal(counter(0, { type: "INCREMENT" }), 1)
        });
        it('1 -> 2', () => {
            assert.equal(counter(1, { type: "INCREMENT" }), 2)
        });
    });

    describe('decrement', () => {
        it('2 -> 1', () => {
            assert.equal(counter(2, { type: "DECREMENT" }), 1)
        });
        it('1 -> 0', () => {
            assert.equal(counter(1, { type: "DECREMENT" }), 0)
        });
    });
});