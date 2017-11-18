// ISC, Copyright 2017 Jaco Greeff

const format = require('./noop');

describe('format/noop', () => {
  it('returns input value as output value', () => {
    const input = { 'some': 'object' };

    expect(
      format(input)
    ).to.equal(input);
  });
});
