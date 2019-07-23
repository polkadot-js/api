// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import Keyring from '@polkadot/keyring';
import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';
import { EventRecord } from '@polkadot/types';

import { SubmittableResult } from '../../../src';
import ApiPromise from '../../../src/promise';
import describeE2E from '../../util/describeE2E';

// log all events for the transfare, calling done() when finalized
const logEvents = (done: () => {}): (r: SubmittableResult) => void =>
  ({ events, status }: SubmittableResult): void => {
    console.log('Transaction status:', status.type);

    if (status.isFinalized) {
      console.log('Completed at block hash', status.value.toHex());
      console.log('Events:');

      events.forEach(({ phase, event: { data, method, section } }: EventRecord): void => {
        console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
      });

      if (events.length) {
        done();
      }
    }
  };

describeE2E({
  except: ['remote-polkadot-alexander', 'remote-substrate-1.0']
})('Promise e2e transactions', (wsUrl): void => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api: ApiPromise;

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create(new WsProvider(wsUrl));

    done();
  });

  it('makes a transfer, and uses new balance to transfers to new', async (done): Promise<() => void> => {
    const pair = new Keyring().addFromUri('testing123', {}, 'ed25519');
    const minimum = api.consts.balances && api.consts.balances.existentialDeposit ? api.consts.balances.existentialDeposit.toString() : 0;

    const amount = new BN(minimum).toNumber() < 100000000000000
      ? 1234 // Substrate spec_version 0 -100
      : 1234567891234567; // since Substrate spec_version 101

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
