// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import rolesToId from './toId';

describe('rolesToId', () => {
  it('returns the role mapping an string', () => {
    expect(
      rolesToId(['authority'])
    ).toEqual(0b00000100);
  });
});
