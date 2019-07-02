// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Keyring from '@polkadot/keyring';
import testingPairs from '@polkadot/keyring/testingPairs';
import { randomAsHex } from '@polkadot/util-crypto';
import WsProvider from '@polkadot/rpc-provider/ws';
import { EventRecord, ExtrinsicEra, Hash, Header, Index, SignedBlock } from '@polkadot/types';

import SingleAccountSigner from '../util/SingleAccountSigner';
import { SubmittableResult } from './../../src';
import { Signer } from './../../src/types';
import Api from './../../src/promise';

// log all events for the transfare, calling done() when finalized
const logEvents = (done: () => {}) =>
  ({ events, status }: SubmittableResult) => {
    console.log('Transaction status:', status.type);

    if (status.isFinalized) {
      console.log('Completed at block hash', status.value.toHex());
      console.log('Events:');

      events.forEach(({ phase, event: { data, method, section } }: EventRecord) => {
        console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
      });

      if (events.length) {
        done();
      }
    }
  };

describe.skip('Promise e2e transactions', () => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api: Api;

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
    const nonce = await api.query.system.accountNonce(keyring.dave.address) as Index;
    const hex = api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .sign(keyring.dave, { nonce })
      .toHex();

    return api.tx(hex).send(logEvents(done));
  });

  it('makes a transfer (sign, then send)', async (done) => {
    const nonce = await api.query.system.accountNonce(keyring.dave.address) as Index;

    return api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .sign(keyring.dave, { nonce })
      .send(logEvents(done));
  });

  it('makes a transfer (sign, then send - compat version)', async (done) => {
    const nonce = await api.query.system.accountNonce(keyring.dave.address) as Index;

    return api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .sign(keyring.dave, { nonce })
      .send(logEvents(done));
  });

  it('makes a transfer (signAndSend)', async (done) => {
    return api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .signAndSend(keyring.dave, logEvents(done));
  });

  it('makes a transfer (signAndSend via Signer)', async (done) => {
    const signer = new SingleAccountSigner(keyring.dave) as Signer;

    api.setSigner(signer);

    return api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .signAndSend(keyring.dave.address, logEvents(done));
  });

  it('makes a transfer (signAndSend via Signer) with undefined Signer', async () => {
    const signer: any = undefined;
    // no signer
    api.setSigner(signer);

    await expect(api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .signAndSend(keyring.alice.address)).rejects.toThrow('no signer exists');
  });

  it('makes a transfer (signAndSend via Signer) with the wrong keyring pair', async () => {
    const signer: Signer = new SingleAccountSigner(keyring.dave);

    api.setSigner(signer);

    // no callback
    await expect(api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .signAndSend(keyring.alice.address)).rejects.toThrow('does not have the keyringPair');
  });

  it('makes a transfer (signAndSend via Signer)  with the wrong keyring pair with a callback', async () => {
    // with callback
    await expect(api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .signAndSend(keyring.alice.address, (cb: any) => { /*do nothing */ })).rejects.toThrow('does not have the keyringPair');
  });

  it('makes a transfer (no callback)', async () => {
    const hash = await api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .signAndSend(keyring.dave);

    expect(hash.toHex()).toHaveLength(66);
  });

  it('makes a proposal', async () => {
    // don't wait for status, just get hash. Here we generate a large-ish payload
    // to ensure that we can sign with the hashed version as well (and have it accepted)
    const hash: Hash = await api.tx.democracy
      .propose(api.tx.system.setCode(randomAsHex(4096)), 10000)
      .signAndSend(keyring.bob);

    expect(hash.toHex()).toHaveLength(66);
  });

  it('makes a transfer, and uses new balance to transfers to new', async (done) => {
    const pair = new Keyring().addFromUri('testing123', {}, 'ed25519');

    function doOne (cb: any) {
      return api.tx.balances
        .transfer(pair.address, 123456)
        .signAndSend(keyring.dave, logEvents(cb));
    }

    function doTwo (cb: any) {
      return api.tx.balances
        .transfer(keyring.alice.address, 12345)
        .signAndSend(pair, logEvents(cb));
    }

    // return doTwo(done);
    return doOne(() => {
      return doTwo(done);
    });
  });

  it('makes a transfer with ERA (signAndSend)', async (done) => {
    const nonce = await api.query.system.accountNonce(keyring.dave.address) as Index;
    const signedBlock = await api.rpc.chain.getBlock();
    const currentHeight = (signedBlock as SignedBlock).block.header.number;
    const exERA = new ExtrinsicEra({ current: currentHeight, period: 10 });
    const eraBirth = exERA.asMortalEra.birth(currentHeight.toNumber());
    const eraDeath = exERA.asMortalEra.death(currentHeight.toNumber());
    console.log('STARTED AT :' + eraBirth + ' EXPIRED AT :' + eraDeath);
    const eraHash = await api.rpc.chain.getBlockHash(eraBirth);
    const ex = api.tx.balances.transfer(keyring.eve.address, 12345);
    const hash = await ex.signAndSend(keyring.dave, { blockHash: eraHash, era: exERA, nonce } as any);

    expect(hash.toHex()).toHaveLength(66);
    done();
  });

  it('makes a transfer with ERA (signAndSend) with invalid time', async (done) => {
    const nonce = await api.query.system.accountNonce(keyring.alice.address) as Index;
    const signedBlock = await api.rpc.chain.getBlock();
    const currentHeight = (signedBlock as SignedBlock).block.header.number;
    const exERA = new ExtrinsicEra({ current: currentHeight, period: 4 });
    const eraBirth = exERA.asMortalEra.birth(currentHeight.toNumber());
    const eraDeath = exERA.asMortalEra.death(currentHeight.toNumber());
    console.log('STARTED AT :' + eraBirth + ' EXPIRED AT :' + eraDeath);
    const eraHash = await api.rpc.chain.getBlockHash(eraBirth);
    const ex = api.tx.balances.transfer(keyring.eve.address, 12345);

    return (
      api.rpc.chain.subscribeNewHead(async (header: Header) => {
        if (header.blockNumber.toNumber() === eraDeath - 1) {
          try {
            await ex.signAndSend(keyring.alice, { blockHash: eraHash, era: exERA, nonce } as any);
          } catch (error) {
            expect(error.message).toMatch(/1010: Invalid Transaction \(0\)/);
            done();
          }
        }
      })
    );
  });
});
