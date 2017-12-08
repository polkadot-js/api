// ISC, Copyright 2017 Jaco Greeff

const { formatInputs } = require('./index');

describe('formatInputs', () => {
  describe('format', () => {
    it('formats each value in an array', () => {
      expect(
        formatInputs(
          [
            { name: 'foo', type: 'Address' },
            { name: 'bar', type: 'H256' }
          ],
          ['0x1234', '0xabcd']
        )
      ).toEqual([
        '0x0000000000000000000000000000000000001234',
        '0x000000000000000000000000000000000000000000000000000000000000abcd'
      ]);
    });
  });
});
