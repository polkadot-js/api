// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Hash, AccountId } from '@polkadot/types/interfaces';

import BN from 'bn.js';
import fs from 'fs';
import path from 'path';

import { ApiPromise, SubmittableResult } from '@polkadot/api';
import { Abi } from '@polkadot/api-contract';
import testingPairs from '@polkadot/keyring/testingPairs';
import { KeyringPair } from '@polkadot/keyring/types';
import Rpc from '@polkadot/rpc-core';
import WsProvider from '@polkadot/rpc-provider/ws';
import { H256, StorageData, StorageKey, TypeRegistry } from '@polkadot/types';
import { hexToBn, isInstanceOf } from '@polkadot/util';

import { describeE2E } from '../../util';

// Backwards compatibility:
// A breaking change was introduced by substrate runtime spec version 97. https://github.com/paritytech/substrate/pull/2911/files
// The change had to be implemented in ink! which changed the structure of the Wasm files.
// The Polkadot JS API is only supporting INK! versions that are working with substrate greater or equal to spec_version 97.
import incrementerAbi from '../../../../api-contract/test/contracts/Incrementer.json';
const incrementerCode = fs.readFileSync(path.join(__dirname, '../../../../api-contract/test/contracts/incrementer-pruned.wasm')).toString('hex');

const CHILD_STORAGE = '0x3a6368696c645f73746f726167653a'; // :child_storage:

describeE2E({
  except: [
    'docker-polkadot-master',
    'docker-polkadot-alexander',
    'docker-substrate-1.0',
    'remote-polkadot-alexander',
    'remote-substrate-1.0'
  ]
})('RPC-core e2e child-storage', (wsUrl: string): void => {
  const MAX_GAS = 50000;
  const registry = new TypeRegistry();
  const keyring: Record<string, KeyringPair> = testingPairs({ type: 'sr25519' });
  const randomStart = Math.floor(Date.now() / 1000);
  let abi: Abi;
  let api: ApiPromise;
  let codeHash: Hash;
  let rpc: Rpc;
  let address: any;

  beforeAll(async (done): Promise<() => void> => {
    abi = new Abi(registry, incrementerAbi);
    api = await ApiPromise.create({ provider: new WsProvider(wsUrl) });

    return (
      api.tx.contracts
        .putCode(MAX_GAS, `0x${incrementerCode}`)
        .signAndSend(keyring.eve, (result: SubmittableResult): void => {
          if (result.status.isFinalized) {
            const record = result.findRecord('contracts', 'CodeStored');
            if (record) {
              codeHash = record.event.data[0] as Hash;
              done();
            }
          }
        })
    );
  });

  beforeEach((done): void => {
    rpc = new Rpc(registry, new WsProvider(wsUrl));
    done();
  });

  // `child_storage` is currently not used anywhere in Polkadot or Substrate, that's why we need to
  // add a Smart Contract that is using `child_storage` before being able to test it.
  // @TODO Add tests for Polkadot once child storage is being used there.
  describe('e2e state child methods', (): void => {
    beforeAll(async (done): Promise<() => void> => {
      abi = new Abi(registry, incrementerAbi);
      api = await ApiPromise.create({ provider: new WsProvider(wsUrl) });
      // An instance of a contract can only be deployed once by one specific account.
      // That's why we need a random starting point for our incrementer contract to be
      // able to run this test multiple times without the need of pruning the database
      const CREATION_FEE = api.consts && api.consts.contracts
        ? 123456789123456
        : 12345;

      return (
        api.tx.contracts
          .instantiate(CREATION_FEE, MAX_GAS, codeHash, abi.constructors[0](randomStart))
          .signAndSend(keyring.dave, (result: SubmittableResult): void => {
            if (result.status.isFinalized) {
              const record = result.findRecord('contracts', 'Instantiated');
              if (record) {
                address = record.event.data[1];
                console.log('contract address??',address)
                done();
              }
            }
          })
      );
    });
    expect(address).toBeDefined();

    // it('getChildKeys(): retrieves :child_storage: keys for one deployed incrementer contract', async (done):
    // Promise<void> => {
    //   const storageKeys = await rpc.state.getKeys(CHILD_STORAGE).toPromise();

    //   rpc.state
    //     .getChildKeys(storageKeys[0], '0x')
    //     .subscribe((keys: StorageKey[]): void => {
    //       expect(keys.length).toBeGreaterThanOrEqual(1);
    //       done();
    //     });
    // });

    // it('getChildStorage(): retrieves the default value of the incrementer smart contract', async (done): Promise<void> => {
    //   const storageKeys = await rpc.state.getKeys(CHILD_STORAGE).toPromise();
    //   const childStorageKeys = await rpc.state.getChildKeys(storageKeys[0], '0x').toPromise();

    //   rpc.state
    //     .getChildStorage(storageKeys[0], childStorageKeys[0])
    //     .subscribe((storage: StorageData): void => {
    //       const storageValue = hexToBn(storage.toHex(), { isLe: true });
    //       expect(storageValue).toBeInstanceOf(BN);
    //       expect(storageValue.toNumber()).toBeGreaterThan(1500000000);
    //       done();
    //     });
    // });

    // it('getChildStorageHash(): retrieves the Hash of the incrementer smart contract', async (done): Promise<void> => {
    //   const storageKeys = await rpc.state.getKeys(CHILD_STORAGE).toPromise();
    //   const childStorageKeys = await rpc.state.getChildKeys(storageKeys[0].toHex(), '0x').toPromise();

    //   rpc.state
    //     .getChildStorageHash(storageKeys[0], childStorageKeys[0])
    //     .subscribe((storage: StorageData): void => {
    //       expect(isInstanceOf(storage, H256)).toBeTruthy();
    //       done();
    //     });
    // });

    // it('getChildStorageSize(): retrieves the size of the incrementer smart contract', async (done): Promise<void> => {
    //   const storageKeys = await rpc.state.getKeys(CHILD_STORAGE).toPromise();
    //   const childStorageKeys = await rpc.state.getChildKeys(storageKeys[0], '0x').toPromise();

    //   rpc.state
    //     .getChildStorageSize(storageKeys[0], childStorageKeys[0])
    //     .subscribe((storage): void => {
    //       expect(storage.toString()).toBe('4');
    //       done();
    //     });
    // });
  });
});
