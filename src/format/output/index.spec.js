// ISC, Copyright 2017 Jaco Greeff

const format = require('./index');

describe('format/output', () => {
  describe('format', () => {
    it('formats the value', () => {
      expect(
        format('Header', 'test')
      ).to.deep.equal('test');
    });
  });
});
