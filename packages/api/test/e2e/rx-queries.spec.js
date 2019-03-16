// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { switchMap } from 'rxjs/operators';
import testingPairs from '@polkadot/keyring/testingPairs';

import Api from '../../src/rx';

describe.skip('e2e queries', () => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api;

  beforeEach(async (done) => {
    api = await Api.create().toPromise();
    jest.setTimeout(30000);
    done();
  });

  it('makes the runtime, rpc, state & extrinsics available', () => {
    expect(api.genesisHash).toBeDefined();
    expect(api.runtimeMetadata).toBeDefined();
    expect(api.runtimeVersion).toBeDefined();
    expect(api.rpc).toBeDefined();
    expect(api.query).toBeDefined();
    expect(api.tx).toBeDefined();
    expect(api.derive).toBeDefined();
  });

  it('queries state for a balance', (done) => {
    api.query.balances.freeBalance(keyring.alice.address()).subscribe((balance) => {
      expect(
        balance.isZero()
      ).toBe(false);

      done();
    });
  });

  it('makes a query at a specific block', (done) => {
    api.rpc.chain
      .getHeader()
      .pipe(
        switchMap((header) =>
          api.query.system.events.at(header.hash)
        )
      )
      .subscribe((events) => {
        expect(events.length).not.toEqual(0);
        done();
      });
  });
});
