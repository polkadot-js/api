// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Keyring from '@polkadot/keyring';
import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';
import { u8aToHex } from '@polkadot/util';
import { randomAsHex } from '@polkadot/util-crypto';
import { EventRecord, ExtrinsicEra, Hash, Header, Index, SignedBlock } from '@polkadot/types';

import { SubmittableResult } from '../../../src';
import ApiPromise from '../../../src/promise';
import { Signer } from '../../../src/types';
import describeE2E from '../../util/describeE2E';
import SingleAccountSigner from '../../util/SingleAccountSigner';

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
    jest.setTimeout(30000);
    api = await ApiPromise.create(new WsProvider(wsUrl));

    done();
  });

  it('can submit an extrinsic from hex', async (done): Promise<() => void> => {
    const nonce = await api.query.system.accountNonce(keyring.dave.address) as Index;
    const hex = api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .sign(keyring.dave, { nonce })
      .toHex();

    return api.tx(hex).send(logEvents(done));
  });

  it('invalid hex does throw a catchable exception', async (done): Promise<void> => {
    const nonce = await api.query.system.accountNonce(keyring.dave.address) as Index;
    const hex = api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .sign(keyring.dave, { nonce })
      .toHex();

    // change to an invalid signature, 32 * 2 for hex
    const sigIdx = hex.indexOf(u8aToHex(keyring.dave.publicKey).substr(2)) + 64;
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
    const nonce = await api.query.system.accountNonce(keyring.dave.address) as Index;

    return api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .sign(keyring.dave, { nonce })
      .send(logEvents(done));
  });

  it('makes a transfer (sign, then send - compat version)', async (done): Promise<() => void> => {
    const nonce = await api.query.system.accountNonce(keyring.dave.address) as Index;

    return api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .sign(keyring.dave, { nonce })
      .send(logEvents(done));
  });

  it('makes a transfer (signAndSend, immortal)', async (done): Promise<() => void> => {
    return api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .signAndSend(keyring.charlie, { era: 0 }, logEvents(done));
  });

  it('makes a transfer (no callback)', async (): Promise<void> => {
    const hash = await api.tx.balances
      .transfer(keyring.eve.address, 12345)
      .signAndSend(keyring.dave);

    expect(hash.toHex()).toHaveLength(66);
  });

  it('makes a proposal', async (): Promise<void> => {
    // don't wait for status, just get hash. Here we generate a large-ish payload
    // to ensure that we can sign with the hashed version as well (and have it accepted)
    const hash: Hash = await api.tx.democracy
      .propose(api.tx.system.setCode(randomAsHex(4096)), 10000)
      .signAndSend(keyring.bob);

    expect(hash.toHex()).toHaveLength(66);
  });

  // this one is slightly difficult with the current testnet config - CantPay
  it.skip('makes a transfer, and uses new balance to transfers to new', async (done): Promise<() => void> => {
    const pair = new Keyring().addFromUri('testing123', {}, 'ed25519');

    function doOne (cb: any): Promise<() => void> {
      return api.tx.balances
        .transfer(pair.address, 1234567)
        .signAndSend(keyring.dave, logEvents(cb));
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

  // TODO split this into a separate file
  describe('eras', (): void => {
    it('makes a transfer (specified era)', async (done): Promise<void> => {
      const signedBlock = await api.rpc.chain.getBlock() as SignedBlock;
      const currentHeight = signedBlock.block.header.number;
      const exERA = new ExtrinsicEra({ current: currentHeight, period: 10 });
      const ex = api.tx.balances.transfer(keyring.eve.address, 12345);

      await ex.signAndSend(keyring.charlie, {
        blockHash: signedBlock.block.header.hash,
        era: exERA
      }, logEvents(done));
    });

    it('makes a transfer (specified era, previous block)', async (done): Promise<void> => {
      const signedBlock = await api.rpc.chain.getBlock() as SignedBlock;
      const currentHeight = signedBlock.block.header.number.subn(1);
      const exERA = new ExtrinsicEra({ current: currentHeight, period: 10 });
      const ex = api.tx.balances.transfer(keyring.eve.address, 12345);

      await ex.signAndSend(keyring.charlie, {
        blockHash: signedBlock.block.header.parentHash,
        era: exERA
      }, logEvents(done));
    });

    it('fails on a transfer with invalid time', async (done): Promise<void> => {
      const nonce = await api.query.system.accountNonce(keyring.alice.address) as Index;
      const signedBlock = await api.rpc.chain.getBlock() as SignedBlock;
      const currentHeight = signedBlock.block.header.number;
      const exERA = new ExtrinsicEra({ current: currentHeight, period: 4 });
      const eraDeath = exERA.asMortalEra.death(currentHeight.toNumber());
      const blockHash = signedBlock.block.header.hash;
      const ex = api.tx.balances.transfer(keyring.eve.address, 12345);

      await api.rpc.chain.subscribeNewHead(async (header: Header): Promise<void> => {
        if (header.blockNumber.toNumber() === eraDeath - 1) {
          try {
            await ex.signAndSend(keyring.alice, { blockHash, era: exERA, nonce } as any);
          } catch (error) {
            // NOTE This will fail on any version with v1 Extrinsics, the code returned there
            // is simply (0), so it doesn't have an "invalid-era" specific message. (the -127
            // error code is introduced along with the transaction version 2
            expect(error.message).toMatch(/1010: Invalid Transaction \(-127\)/);
            done();
          }
        }
      });
    });

    it('fails on a transfer with invalid time (via Signer)', async (done): Promise<void> => {
      const signer: Signer = new SingleAccountSigner(keyring.alice);

      api.setSigner(signer);

      const nonce = await api.query.system.accountNonce(keyring.alice.address) as Index;
      const signedBlock = await api.rpc.chain.getBlock() as SignedBlock;
      const currentHeight = signedBlock.block.header.number;
      const exERA = new ExtrinsicEra({ current: currentHeight, period: 4 });
      const eraDeath = exERA.asMortalEra.death(currentHeight.toNumber());
      const blockHash = signedBlock.block.header.hash;
      const ex = api.tx.balances.transfer(keyring.eve.address, 12345);

      await api.rpc.chain.subscribeNewHead(async (header: Header): Promise<void> => {
        if (header.blockNumber.toNumber() === eraDeath - 1) {
          try {
            await ex.signAndSend(keyring.alice.address, { blockHash, era: exERA, nonce } as any);
          } catch (error) {
            // NOTE As per above 0 vs -127 note
            expect(error.message).toMatch(/1010: Invalid Transaction \(-127\)/);
            done();
          }
        }
      });
    });

    it('makes a transfer with custom numeric era', async (done): Promise<void> => {
      await api.tx.balances
        .transfer(keyring.eve.address, 12345)
        .signAndSend(keyring.charlie, { era: 2 }, logEvents(done));
    });
  });

  // TODO split this into a seperate file
  describe('Signer injection', (): void => {
    it('makes a transfer (signAndSend via Signer)', async (done): Promise<void> => {
      const signer = new SingleAccountSigner(keyring.charlie);

      api.setSigner(signer);

      await api.tx.balances
        .transfer(keyring.eve.address, 12345)
        .signAndSend(keyring.charlie.address, logEvents(done));
    });

    it('succeeds when waiting some blocks before submission', async (done): Promise<void> => {
      // 10 second delay
      const signer = new SingleAccountSigner(keyring.charlie, 10000);

      api.setSigner(signer);

      await api.tx.balances
        .transfer(keyring.eve.address, 12345)
        .signAndSend(keyring.charlie.address, logEvents(done));
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
        .signAndSend(keyring.alice.address, (cb: any): void => { /* do nothing */ })).rejects.toThrow('no signer exists');
    });
  });
});
