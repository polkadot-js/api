// ISC, Copyright 2017 Jaco Greeff

/* eslint-disable no-unused-expressions */

const { isFunction, isNumber, isUndefined } = require('./is');

describe('util/is', () => {
  describe('isFunction', () => {
    it('returns true on valid functions', () => {
      expect(
        isFunction(isFunction)
      ).to.be.true;
    });

    it('returns false of invalid functions', () => {
      expect(
        isFunction('notAFunction')
      ).to.be.false;
    });
  });

  describe('isNumber', () => {
    it('returns true on valid numbers', () => {
      expect(
        isNumber(2)
      ).to.be.true;
    });

    it('returns fals on invalid numbers', () => {
      expect(
        isNumber('2')
      ).to.be.false;
    });
  });

  describe('isUndefined', () => {
    it('returns true on undefined values', () => {
      expect(
        isUndefined()
      ).to.be.true;
    });

    it('returns false on defined values', () => {
      expect(
        isUndefined(null)
      ).to.be.false;
    });
  });
});
