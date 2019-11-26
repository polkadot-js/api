// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';
import { Header } from '@polkadot/types/interfaces';
import { createType, TypeRegistry } from '@polkadot/types';

import ApiPromise from '../../../src/promise';
import { Signer } from '../../../src/types';
import { describeE2E, logEvents, SingleAccountSigner } from '../../util';

describeE2E({
  except: [
    'remote-polkadot-alexander',
    'remote-substrate-1.0',
    'docker-polkadot-alexander',
    'docker-substrate-1.0'
  ]
})('Promise e2e transactions with specified eras', (wsUrl: string): void => {
  const registry = new TypeRegistry();
  const keyring = testingPairs({ type: 'ed25519' });
  let api: ApiPromise;

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create({ provider: new WsProvider(wsUrl) });

    done();
  });

  describe('eras', (): void => {
    it('makes a transfer (specified era)', async (done): Promise<void> => {
      const signedBlock = await api.rpc.chain.getBlock();
      const currentHeight = signedBlock.block.header.number;
      const exERA = createType(registry, 'ExtrinsicEra', { current: currentHeight, period: 4 });
      const ex = api.tx.balances.transfer(keyring.eve.address, 12345);

      await ex.signAndSend(keyring.charlie, {
        blockHash: signedBlock.block.header.hash,
        era: exERA
      }, logEvents(done));
    });

    it('makes a transfer (specified era, previous block)', async (done): Promise<void> => {
      const signedBlock = await api.rpc.chain.getBlock();
      const currentHeight = signedBlock.block.header.number.toBn().subn(1);
      const exERA = createType(registry, 'ExtrinsicEra', { current: currentHeight, period: 10 });
      const ex = api.tx.balances.transfer(keyring.eve.address, 12345);

      await ex.signAndSend(keyring.charlie, {
        blockHash: signedBlock.block.header.parentHash,
        era: exERA
      }, logEvents(done));
    });

    it('fails on a transfer with invalid time', async (done): Promise<void> => {
      const nonce = await api.query.system.accountNonce(keyring.alice.address);
      const signedBlock = await api.rpc.chain.getBlock();
      const currentHeight = signedBlock.block.header.number;
      const exERA = createType(registry, 'ExtrinsicEra', { current: currentHeight, period: 4 });
      const eraDeath = exERA.asMortalEra.death(currentHeight.toNumber());
      const blockHash = signedBlock.block.header.hash;
      const ex = api.tx.balances.transfer(keyring.eve.address, 12345);

      await api.rpc.chain.subscribeNewHeads(async (header: Header): Promise<void> => {
        if (header.number.toNumber() === eraDeath - 1) {
          try {
            await ex.signAndSend(keyring.alice, { blockHash, era: exERA, nonce } as any);
          } catch (error) {
            // The "invalid-era" specific error code 127 was introduced along with the transaction version 2
            // For the transaction format version 1 the error code is simply 0
            expect(error.message).toMatch(
              /1010: Invalid Transaction \(-127\)|1010: Invalid Transaction \(0\)/
            );
          }
          done();
        }
      });
    });

    it('fails on a transfer with invalid time (via Signer)', async (done): Promise<void> => {
      const signer: Signer = new SingleAccountSigner(registry, keyring.alice);

      api.setSigner(signer);

      const nonce = await api.query.system.accountNonce(keyring.bob_stash.address);
      const signedBlock = await api.rpc.chain.getBlock();
      const currentHeight = signedBlock.block.header.number;
      const exERA = createType(registry, 'ExtrinsicEra', { current: currentHeight, period: 4 });
      const eraDeath = exERA.asMortalEra.death(currentHeight.toNumber());
      const blockHash = signedBlock.block.header.hash;
      const ex = api.tx.balances.transfer(keyring.eve.address, 12121);

      await api.rpc.chain.subscribeNewHeads(async (header: Header): Promise<void> => {
        if (header.number.toNumber() === eraDeath - 1) {
          try {
            await ex.signAndSend(keyring.alice.address, { blockHash, era: exERA, nonce } as any);
          } catch (error) {
            // NOTE As per above 0 or -127 error code
            expect(error.message).toMatch(
              /1010: Invalid Transaction \(-127\)|1010: Invalid Transaction \(0\)/
            );
          }
          done();
        }
      });
    });

    it('makes a transfer with custom numeric era', async (done): Promise<void> => {
      await api.tx.balances
        .transfer(keyring.eve.address, 12345)
        .signAndSend(keyring.charlie, { era: 2 }, logEvents(done));
    });
  });
});
