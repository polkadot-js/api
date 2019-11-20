// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';
import { randomAsHex } from '@polkadot/util-crypto';
import { u8aToHex } from '@polkadot/util';

import ApiPromise from '../../../src/promise';
import randomAsHex2097152 from '../../mock-data/randomAsHex_2097152';
import { calculateAccountDeposit, describeE2E, logEvents } from '../../util';

describeE2E({
  except: ['remote-polkadot-alexander', 'remote-substrate-1.0']
})('Promise e2e transactions', (wsUrl: string): void => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api: ApiPromise;

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create({ provider: new WsProvider(wsUrl) });

    done();
  });

  it('can submit an extrinsic from hex', async (done): Promise<() => void> => {
    const nonce = await api.query.system.accountNonce(keyring.bob_stash.address);
    const hex = api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .sign(keyring.bob_stash, { nonce })
      .toHex();

    return api.tx(hex).send(logEvents(done));
  });

  it('invalid hex does throw a catchable exception', async (done): Promise<void> => {
    const nonce = await api.query.system.accountNonce(keyring.bob_stash.address);
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
    const nonce = await api.query.system.accountNonce(keyring.bob_stash.address);

    return api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .sign(keyring.bob_stash, { nonce })
      .send(logEvents(done));
  });

  it('makes a transfer (sign, then send - compat version)', async (done): Promise<() => void> => {
    const nonce = await api.query.system.accountNonce(keyring.bob_stash.address);

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

  it('makes a proposal', async (done): Promise<void> => {
    // don't wait for status, just get hash. Here we generate a large-ish payload
    // to ensure that we can sign with the hashed version as well (and have it accepted)
    const amount = calculateAccountDeposit(api);
    await api.tx.democracy
      .propose(
        api.tx.system && api.tx.system.setCode
          ? api.tx.system.setCode(randomAsHex2097152) // since impl_version 94 https://github.com/paritytech/substrate/pull/2802
          : api.tx.consensus.setCode(randomAsHex(4096)) // impl_version 0 - 93
        , amount)
      .signAndSend(keyring.bob_stash, logEvents(done));
  });
});
