// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Keyring from '@polkadot/keyring';
import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';
import { u8aToHex } from '@polkadot/util';
import { randomAsHex } from '@polkadot/util-crypto';
import { EventRecord, Hash, Index } from '@polkadot/types';

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

  it('can submit an extrinsic from hex', async (done): Promise<() => void> => {
    const nonce = await api.query.system.accountNonce(keyring.bob_stash.address) as Index;
    const hex = api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .sign(keyring.bob_stash, { nonce })
      .toHex();

    return api.tx(hex).send(logEvents(done));
  });

  it('invalid hex does throw a catchable exception', async (done): Promise<void> => {
    const nonce = await api.query.system.accountNonce(keyring.bob_stash.address) as Index;
    const hex = api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .sign(keyring.bob_stash, { nonce })
      .toHex();

    // change to an invalid signature, 32 * 2 for hex
    const sigIdx = hex.indexOf(u8aToHex(keyring.bob_stash.publicKey).substr(2)) + 64;
    const mangled = hex.replace(
      hex.substr(sigIdx, 32), // first 16 bytes of sig
      hex.substr(2, 32) // replaced by first 16 bytes of tx
    );

    try {
      await api.tx(mangled).send(logEvents(done));
    } catch (error) {
      console.error(error);
      done();
    }
  });

  it('makes a transfer (sign, then send)', async (done): Promise<() => void> => {
    const nonce = await api.query.system.accountNonce(keyring.bob_stash.address) as Index;

    return api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .sign(keyring.bob_stash, { nonce })
      .send(logEvents(done));
  });

  it('makes a transfer (sign, then send - compat version)', async (done): Promise<() => void> => {
    const nonce = await api.query.system.accountNonce(keyring.bob_stash.address) as Index;

    return api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .sign(keyring.bob_stash, { nonce })
      .send(logEvents(done));
  });

  it('makes a transfer (signAndSend, immortal)', async (done): Promise<() => void> => {
    return api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .signAndSend(keyring.bob_stash, { era: 0 }, logEvents(done));
  });

  it('makes a transfer (no callback)', async (): Promise<void> => {
    const hash = await api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .signAndSend(keyring.bob_stash);

    expect(hash.toHex()).toHaveLength(66);
  });

  it('makes a proposal', async (): Promise<void> => {
    // don't wait for status, just get hash. Here we generate a large-ish payload
    // to ensure that we can sign with the hashed version as well (and have it accepted)
    const hash: Hash = await api.tx.democracy
      .propose(api.tx.system.setCode(randomAsHex(4096)), 10000)
      .signAndSend(keyring.bob_stash);

    expect(hash.toHex()).toHaveLength(66);
  });

  // this one is slightly difficult with the current testnet config - CantPay
  it.skip('makes a transfer, and uses new balance to transfers to new', async (done): Promise<() => void> => {
    const pair = new Keyring().addFromUri('testing123', {}, 'ed25519');

    function doOne (cb: any): Promise<() => void> {
      return api.tx.balances
        .transfer(pair.address, 1234567)
        .signAndSend(keyring.bob_stash, logEvents(cb));
    }

    function doTwo (cb: any): Promise<() => void> {
      return api.tx.balances
        .transfer(keyring.alice.address, 1111111)
        .signAndSend(pair, logEvents(cb));
    }

    // return doTwo(done);
    return doOne((): Promise<() => void> => {
      return doTwo(done);
    });
  });
});
