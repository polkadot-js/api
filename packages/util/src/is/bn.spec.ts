// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import { isBn } from '.';

describe('isBN', () => {
  it('returns true when a BN value', () => {
    expect(
      isBn(new BN(123))
    ).toEqual(true);
  });

  it('returns false on non-BN values', () => {
    expect(
      isBn(0)
    ).toEqual(false);
  });
});
