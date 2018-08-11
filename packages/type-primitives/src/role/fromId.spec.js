// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import rolesFromId from './fromId';

describe('rolesFromId', () => {
  it('returns the role mapping an string', () => {
    expect(
      rolesFromId(0b00000001 | 0b00000100)
    ).toEqual(['none', 'full', 'authority']);
  });
});
