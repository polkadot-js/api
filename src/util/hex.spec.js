// ISC, Copyright 2017 Jaco Greeff

/* eslint-disable no-unused-expressions */

const { addHexPrefix, hasHexPrefix, stripHexPrefix } = require('./hex');

describe('util/hex', () => {
  describe('addHexPrefix', () => {
    it('does not add when prefix is available', () => {
      expect(
        addHexPrefix('0x123')
      ).to.equal('0x123');
    });

    it('adds the prefix when it is not available', () => {
      expect(
        addHexPrefix('123')
      ).to.equal('0x123');
    });

    it('returns null as 0x', () => {
      expect(
        addHexPrefix(null)
      ).to.equal('0x');
    });
  });

  describe('hasHexPrefix', () => {
    it('returns true when hex prefix is found', () => {
      expect(
        hasHexPrefix('0x123')
      ).to.be.true;
    });

    it('returns false when no prefix attached', () => {
      expect(
        hasHexPrefix('123')
      ).to.be.false;
    });

    it('returns false when null value supplied', () => {
      expect(
        hasHexPrefix(null)
      ).to.be.false;
    });
  });

  describe('stripHexPrefix', () => {
    it('returns the value as-is when no prefix', () => {
      expect(
        stripHexPrefix('01ab')
      ).to.equal('01ab');
    });

    it('returns an empty string when null value supplied', () => {
      expect(
        stripHexPrefix(null)
      ).to.equal('');
    });

    it('strips the prefix from other strings', () => {
      expect(
        stripHexPrefix('0x1223')
      ).to.equal('1223');
    });
  });
});
