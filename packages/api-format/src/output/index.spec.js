// ISC, Copyright 2017 Jaco Greeff

const format = require('./index');

describe('output', () => {
  describe('format', () => {
    it('formats the value', () => {
      expect(
        format('Header', 'test')
      ).toEqual('test');
    });
  });
});
