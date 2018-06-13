// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const echo = require('./echo');

describe('echo', () => {
  it('returns input value as output value', () => {
    const input = { 'some': 'object' };

    expect(
      echo(input)
    ).toEqual(input);
  });
});
