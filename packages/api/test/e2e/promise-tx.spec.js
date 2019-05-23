// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Keyring from '@plugnet/keyring';
import testingPairs from '@plugnet/keyring/testingPairs';
import { ExtrinsicEra } from '@plugnet/types/type';
import { randomAsHex } from '@plugnet/util-crypto';

import Api from '../../src/promise';
import WsProvider from '../../../rpc-provider/src/ws';
import SingleAccountSigner from '../util/SingleAccountSigner';

describe.skip('e2e transactions', () => {
  // log all events for the transfare, calling done() when finalized
  const logEvents = (done) =>
    ({ events, status }) => {
      console.log('Transaction status:', status.type);

      if (status.isFinalized) {
        console.log('Completed at block hash', status.value.toHex());
        console.log('Events:');

        events.forEach(({ phase, event: { data, method, section } }) => {
          console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
        });

        if (events.length) {
          done();
        }
      }
    };

  const keyring = testingPairs({ type: 'ed25519' });
  let api;

  beforeEach(async (done) => {
    if (!api) {
      api = await Api.create({
        provider: new WsProvider('ws://127.0.0.1:9944')
      });
    }

    jest.setTimeout(30000);
    done();
  });

  afterEach(() => {
    jest.setTimeout(5000);
  });

  it('can submit an extrinsic from hex', async (done) => {
    const nonce = await api.query.system.accountNonce(keyring.dave.address());
    const hex = api.tx.balances
      .transfer(keyring.eve.address(), 12345)
      .sign(keyring.dave, { nonce })
      .toHex();

    return api.tx(hex).send(logEvents(done));
  });

  it('makes a transfer (sign, then send)', async (done) => {
    const nonce = await api.query.system.accountNonce(keyring.dave.address());

    return api.tx.balances
      .transfer(keyring.eve.address(), 12345)
      .sign(keyring.dave, { nonce })
      .send(logEvents(done));
  });

  it('makes a transfer (sign, then send - compat version)', async (done) => {
    const nonce = await api.query.system.accountNonce(keyring.dave.address());

    return api.tx.balances
      .transfer(keyring.eve.address(), 12345)
      .sign(keyring.dave, nonce)
      .send(logEvents(done));
  });

  it('makes a transfer (signAndSend)', async (done) => {
    return api.tx.balances
      .transfer(keyring.eve.address(), 12345)
      .signAndSend(keyring.dave, logEvents(done));
  });

  it('makes a transfer (signAndSend via Signer)', async (done) => {
    const signer = new SingleAccountSigner(keyring.dave);

    api.setSigner(signer);

    return api.tx.balances
      .transfer(keyring.eve.address(), 12345)
      .signAndSend(keyring.dave.address(), logEvents(done));
  });

  it('makes a transfer (signAndSend via Signer) - sad path', async () => {
    //no signer
    api.setSigner();

    await expect(api.tx.balances
      .transfer(keyring.eve.address(), 12345)
      .signAndSend(keyring.alice.address())).rejects.toThrow('no signer exists');

    const signer = new SingleAccountSigner(keyring.dave);

    api.setSigner(signer);

    //no callback
    await expect(api.tx.balances
      .transfer(keyring.eve.address(), 12345)
      .signAndSend(keyring.alice.address())).rejects.toThrow('does not have the keyringPair');

    //with callback
    await expect(api.tx.balances
      .transfer(keyring.eve.address(), 12345)
      .signAndSend(keyring.alice.address(), ({ events, status }) => {
      })).rejects.toThrow('does not have the keyringPair');
  });

  it('makes a transfer (no callback)', async () => {
    const hash = await api.tx.balances
      .transfer(keyring.eve.address(), 12345)
      .signAndSend(keyring.dave);

    expect(hash.toHex()).toHaveLength(66);
  });

  it('makes a proposal', async () => {
    // don't wait for status, just get hash. Here we generate a large-ish payload
    // to ensure that we can sign with the hashed version as well (and have it accepted)
    const hash = await api.tx.democracy
      .propose(api.tx.consensus.setCode(randomAsHex(4096)), 10000)
      .signAndSend(keyring.bob);

    expect(hash.toHex()).toHaveLength(66);
  });

  it('makes a transfer, and uses new balance to transfers to new', async (done) => {
    const pair = new Keyring().addFromUri('testing123', {}, 'ed25519');

    function doOne (cb) {
      return api.tx.balances
        .transfer(pair.address(), 123456)
        .signAndSend(keyring.dave, logEvents(cb));
    };

    function doTwo (cb) {
      return api.tx.balances
        .transfer(keyring.alice.address(), 12345)
        .signAndSend(pair, logEvents(cb));
    }

    // return doTwo(done);
    return doOne(() => {
      doTwo(done)
    });
  });

  it('makes a transfer with ERA (signAndSend)', async (done) => {
    const nonce = await api.query.system.accountNonce(keyring.dave.address());
    const signedBlock = await api.rpc.chain.getBlock();
    const currentHeight = signedBlock.block.header.number;
    const exERA = new ExtrinsicEra({ current: currentHeight, period: 10 });
    // eraBirth - start of ERA which is always less than current block height
    // eraDeath - end of ERA validity (EXPIRY)
    const eraBirth = exERA.asMortalEra.birth(currentHeight.toNumber());
    const eraDeath = exERA.asMortalEra.death(currentHeight.toNumber());
    console.log('STARTED AT :'+eraBirth+' EXPIRED AT :'+eraDeath);
    const eraHash = await api.rpc.chain.getBlockHash(eraBirth);
    const ex = api.tx.balances
      .transfer(keyring.eve.address(), 12345);
    const hash = await ex.signAndSend(keyring.dave, {blockHash: eraHash, era:exERA, nonce});

    expect(hash.toHex()).toHaveLength(66);
    done();
  });

  it('makes a transfer with ERA (signAndSend) with invalid time', async (done) => {
    const nonce = await api.query.system.accountNonce(keyring.alice.address());
    const signedBlock = await api.rpc.chain.getBlock();
    const currentHeight = signedBlock.block.header.number;
    const exERA = new ExtrinsicEra({ current: currentHeight, period: 4 });
    const eraBirth = exERA.asMortalEra.birth(currentHeight.toNumber());
    const eraDeath = exERA.asMortalEra.death(currentHeight.toNumber());
    console.log('STARTED AT :'+eraBirth+' EXPIRED AT :'+eraDeath);
    const eraHash = await api.rpc.chain.getBlockHash(eraBirth);
    const ex = api.tx.balances.transfer(keyring.eve.address(), 12345);
    const unsubscribe = await api.rpc.chain.subscribeNewHead(async(header) => {
      console.log(`Chain is at block: #${header.blockNumber}`);
      if (header.blockNumber.toNumber() === eraDeath-1) {
        const hash = await ex.signAndSend(keyring.alice, {blockHash: eraHash, era:exERA, nonce});

        expect(hash).toBeUndefined();
        done();
      }
    });
  });
});
