const {expect} = require('chai');
const {counter} = require('./store');

describe ('store test', () => {
  it('should provide the initial state', () => {
    expect(counter(undefined, {})).equal(0);
  });
  it('should handle INCREMENT action', () => {
    expect(counter(1, {type: 'INCREMENT'})).equal(2);
  });
  it('should handle DECREMENT action', () => {
    expect(counter(1, {type: 'DECREMENT'})).equal(0);
  });
  it('should handle RESET action', () => {
    expect(counter(99, {type: 'RESET'})).equal(0);
  });
  it('should ignore unkown action', () => {
    expect(counter(55, {type: 'UNKNOWN'})).equal(55);
  })
})