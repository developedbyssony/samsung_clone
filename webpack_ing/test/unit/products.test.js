const {sum} = require('./products');

describe('test products.s file', fn => {
    if('sums 1 + 2 to equal 3', fn => {
        expect(sum(a:1, b:2)).toBe(expected: 3)});
})