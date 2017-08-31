import assert from 'assert';
import counter from './counter.js';
import deepFreeze from 'deep-freeze';

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

    describe('somting else', () => {
        it('0 -> 0', () => {
            assert.equal(counter(0, { type: "SOMTHING" }), 0)
        });
    });

    describe('undefined', () => {
        it('undefined -> 0', () => {
            assert.equal(counter(undefined, {}), 0)
        });
    });
});

const addCounter = (list) => {
    return [...list, 0];
}
const removeCounter = (list, index) => {
    return [...list.slice(0, index),
        ...list.slice(index + 1)
    ];
}

const incrementCounter = (list, index) => {
    return [...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ];

}

describe('unmutable counter', () => {

    describe('addCounter', () => {
        it('addCounter', () => {
            const listBefore = [];
            const listAfter = [0];
            deepFreeze(listBefore);
            const retList = addCounter(listBefore);

            assert.deepEqual(retList, listAfter)
        });
    });
    describe('removeCounter', () => {
        it('addCounter', () => {
            const listBefore = [0, 10, 20, 31];
            const listAfter = [0, 20, 31];
            deepFreeze(listBefore);

            const retList = removeCounter(listBefore, 1);
            console.log(retList);

            assert.deepEqual(retList, listAfter)
        });
    });
    describe('incrementCounter', () => {
        it('incrementCounter', () => {
            const listBefore = [0, 10, 31];
            const listAfter = [0, 11, 31];
            deepFreeze(listBefore);

            const retList = incrementCounter(listBefore, 1);
            console.log(retList);

            assert.deepEqual(retList, listAfter)
        });
    });
});