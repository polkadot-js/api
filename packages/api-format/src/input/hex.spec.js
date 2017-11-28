// ISC, Copyright 2017 Jaco Greeff

const { leftHexPad, formatH160, formatH256 } = require('./hex');

describe('input/hex', () => {
  describe('leftHexPad', () => {
    it('padds to the required length', () => {
      expect(
        leftHexPad('0x123', 16)
      ).toEqual('0x0123');
    });

    it('padds to the required length (no prefix)', () => {
      expect(
        leftHexPad('123', 16)
      ).toEqual('0x0123');
    });

    it('pads null values correctly', () => {
      expect(
        leftHexPad(null, 16)
      ).toEqual('0x0000');
    });
  });

  describe('formatH160', () => {
    it('pads to 40 bytes', () => {
      expect(
        formatH160('0x1234567890')
      ).toEqual('0x0000000000000000000000000000001234567890');
    });

    it('pads null values correctly', () => {
      expect(
        formatH160(null)
      ).toMatch(/^0x(00){20,}$/);
    });
  });

  describe('formatH256', () => {
    it('pads to 64 bytes', () => {
      expect(
        formatH256('0x1234567890')
      ).toEqual('0x0000000000000000000000000000000000000000000000000000001234567890');
    });

    it('pads null values correctly', () => {
      expect(
        formatH256(null)
      ).toMatch(/^0x(00){32,}$/);
    });
  });
});
