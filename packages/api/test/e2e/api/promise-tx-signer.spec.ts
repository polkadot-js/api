// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';
import { EventRecord } from '@polkadot/types/interfaces';

import { SubmittableResult } from '../../../src';
import ApiPromise from '../../../src/promise';
import { Signer } from '../../../src/types';
import { describeE2E, SingleAccountSigner } from '../../util';

// log all events for the transfer, calling done() when finalized
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
})('Promise e2e transactions with Signer injection', (wsUrl: string): void => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api: ApiPromise;

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create({ provider: new WsProvider(wsUrl) });

    done();
  });

  describe('Signer injection', (): void => {
    it('makes a transfer (signAndSend via Signer)', async (done): Promise<void> => {
      const signer = new SingleAccountSigner(keyring.bob_stash);

      api.setSigner(signer);

      await api.tx.balances
        .transfer(keyring.eve.address, 12345)
        .signAndSend(keyring.bob_stash.address, logEvents(done));
    });

    it('succeeds when waiting some blocks before submission', async (done): Promise<void> => {
      // 10 second delay
      const signer = new SingleAccountSigner(keyring.bob_stash, 10000);

      api.setSigner(signer);

      await api.tx.balances
        .transfer(keyring.eve.address, 12345)
        .signAndSend(keyring.bob_stash.address, logEvents(done));
    });

    it('fails (signAndSend via Signer) with undefined Signer', async (): Promise<void> => {
      const signer: any = undefined;
      // no signer
      api.setSigner(signer);

      await expect(api.tx.balances
        .transfer(keyring.eve.address, 12345)
        .signAndSend(keyring.alice.address)).rejects.toThrow('no signer exists');
    });

    it('fails (signAndSend via Signer) with the wrong keyring pair', async (): Promise<void> => {
      const signer: Signer = new SingleAccountSigner(keyring.dave);

      api.setSigner(signer);

      // no callback
      await expect(api.tx.balances
        .transfer(keyring.eve.address, 12345)
        .signAndSend(keyring.alice.address)).rejects.toThrow('does not have the keyringPair');
    });

    it('fails (signAndSend via Signer) with the wrong keyring pair with a callback', async (): Promise<void> => {
      // with callback
      await expect(api.tx.balances
        .transfer(keyring.eve.address, 12345)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .signAndSend(keyring.alice.address, (cb: any): void => { /* do nothing */ }))
        .rejects.toThrow('no signer exists');
    });
  });
});
