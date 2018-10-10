// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import testingPairs from '@polkadot/util-keyring/testingPairs';

import Api from '../../src';

const keyring = testingPairs();

describe.skip('e2e queries', () => {
  let api;

  beforeEach(async () => {
    api = await Api.create().toPromise();
  });

  it('makes the runtime metadata, rpc, state & extrinsics available', () => {
    expect(api.metadata).toBeDefined();
    expect(api.rpc).toBeDefined();
    expect(api.st).toBeDefined();
    expect(api.tx).toBeDefined();
  });

  it('queries state for a balance', (done) => {
    api.st.balances.freeBalance(keyring.alice.address()).subscribe((balance) => {
      expect(
        balance.isZero()
      ).toBe(false);

      done();
    });
  });
});
