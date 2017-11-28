// ISC, Copyright 2017 Jaco Greeff

const format = require('./noop');

describe('noop', () => {
  it('returns input value as output value', () => {
    const input = { 'some': 'object' };

    expect(
      format(input)
    ).toEqual(input);
  });
});
