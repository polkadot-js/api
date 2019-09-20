// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Keyring from '@polkadot/keyring';
import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';

import ApiPromise from '../../../src/promise';
import { describeE2E, calculateAccountDeposit, logEvents } from '../../util';

describeE2E({
  except: ['remote-polkadot-alexander', 'remote-substrate-1.0']
})('Promise e2e transactions', (wsUrl: string): void => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api: ApiPromise;

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create({ provider: new WsProvider(wsUrl) });

    done();
  });

  it('makes a transfer, and uses new balance to transfers to new', async (done): Promise<() => void> => {
    const pair = new Keyring().addFromUri('testing123', {}, 'ed25519');
    const amount = calculateAccountDeposit(api);

    function doOne (cb: any): Promise<() => void> {
      return api.tx.balances
        .transfer(pair.address, amount)
        .signAndSend(keyring.bob_stash, logEvents(cb));
    }

    async function doTwo (cb: any): Promise<() => void> {
      return api.tx.balances
        .transfer(keyring.bob_stash.address, 111)
        .signAndSend(pair, logEvents(cb));
    }

    return doOne(async (): Promise<() => void> => {
      return doTwo(done);
    });
  });
});
