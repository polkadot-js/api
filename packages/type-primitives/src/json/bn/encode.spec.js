// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import { bnEncode } from './index';

describe('bnEncode', () => {
  it('converts to a hex string', () => {
    expect(
      bnEncode(new BN(0x1234))
    ).toEqual('0x1234');
  });

  it('converts to a hex with the provided bitLength', () => {
    expect(
      bnEncode(new BN(0x1234), 8)
    ).toEqual('0x34');
  });
});
