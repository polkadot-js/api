// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { xxhash64AsRaw } from '.';

describe('xxhash64AsRaw', () => {
  it('creates the correct non-prefixed hex output', () => {
    expect(
      xxhash64AsRaw('abcd', 0xabcd)
    ).toEqual('e29f70f8b8c96df7');
  });
});
