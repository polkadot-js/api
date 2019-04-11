// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { cryptoWaitReady } from '@plugnet/util-crypto';

import testingPairs from './testingPairs';

describe('testingPairs', () => {
  beforeEach(async () => {
    await cryptoWaitReady();
  });

  it('creates without failing', () => {
    expect(
      Object.keys(testingPairs())
    ).toHaveLength(1 + 7);
  });

  it('has the correct address for Alice (non-HDKD)', () => {
    expect(
      testingPairs({ type: 'ed25519' }, false).alice.address()
    ).toEqual('5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaQua');
  });

  it('has the correct address for Alice (HDKD)', () => {
    expect(
      testingPairs({ type: 'ed25519' }, true).alice.address()
    ).toEqual('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY');
  });
});
