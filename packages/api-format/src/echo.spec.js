// ISC, Copyright 2017-2018 Jaco Greeff

const echo = require('./echo');

describe('echo', () => {
  it('returns input value as output value', () => {
    const input = { 'some': 'object' };

    expect(
      echo(input)
    ).toEqual(input);
  });
});
