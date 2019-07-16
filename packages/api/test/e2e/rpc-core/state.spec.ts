// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import path from 'path';

import { SubmittableResult } from '@polkadot/api';
import ApiPromise from '@polkadot/api/promise/Api';
import storage from '@polkadot/api-metadata/storage/static';
import { Abi } from '@polkadot/api-contract';
import testingPairs from '@polkadot/keyring/testingPairs';
import { KeyringPair } from '@polkadot/keyring/types';
import WsProvider from '@polkadot/rpc-provider/ws';
import { Balance, Bytes, Hash, Metadata, Moment, StorageData, StorageKey } from '@polkadot/types';

import Rpc from '@polkadot/rpc-core';
import flipperAbi from '../../../../api-contract/test/contracts/flipper.json';

const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const CODE = '0x3a636f6465'; // :code
const CHILD_STORAGE = '0x3a6368696c645f73746f726167653a'; // :child_storage:

describe.skip('e2e state', (): void => {
  let rpc: Rpc;

  beforeEach((): void => {
    jest.setTimeout(30000);
    rpc = new Rpc(new WsProvider('ws://127.0.0.1:9944'));
  });

  it('getMetadata(): retrieves the wasm metadata', (done): void => {
    rpc.state
      .getMetadata()
      .subscribe((meta: Metadata): void => {
        console.error(JSON.stringify(meta.toJSON()));
        done();
      });
  });

  it('getKeys(): retrieves storage keys for ":code"', (done): void => {
    rpc.state
      .getKeys(CODE)
      .subscribe((keys: StorageKey[]): void => {
        expect(keys.length).toEqual(1);
        done();
      });
  });

  describe('test-suite getStorage()', (): void => {
    it('retrieves code', (done): void => {
      rpc.state
        .getStorage([
          storage.substrate.code
        ])
        .subscribe((code: Bytes): void => {
          console.error(code.toHex().substr(0, 256), '...');
          done();
        });
    });

    it('retrieves balances', (done): void => {
      rpc.state
        .getStorage([
          storage.balances.freeBalance, ALICE
        ])
        .subscribe((balance: Balance): void => {
          console.error(balance);

          expect(balance.isZero()).not.toEqual(true);
          done();
        });
    });

    it('retrieves timestamp', (done): void => {
      rpc.state
        .getStorage([
          storage.timestamp.now
        ])
        .subscribe((moment: Moment): void => {
          console.error(moment);

          expect(moment.toNumber()).not.toEqual(0);
          done();
        });
    });
  });

  describe('e2e state child methods', (): void => {
    // `child_storage` is currently not used anywhere in substrate, that's why we need to
    // add a Smart Contract that is using `child_storage` before being able to test it.
    let codeHash: Hash;

    beforeAll(async (done): Promise<Hash> => {
      const code: string = fs.readFileSync(path.join(__dirname, '../../../../api-contract/test/contracts/flipper-pruned.wasm')).toString('hex');
      const abi = new Abi(flipperAbi);
      const apiPromise: ApiPromise = await ApiPromise.create(new WsProvider('ws://127.0.0.1:9944'));
      const keyring: Record<string, KeyringPair> = testingPairs({ type: 'sr25519' });

      const putCode = apiPromise.tx.contract
        .putCode(50000, `0x${code}`)
        .signAndSend(keyring.eve, (result: SubmittableResult): void => {
          if (result.status.isFinalized) {
            const record = result.findRecord('contract', 'CodeStored');

            if (record) {
              codeHash = record.event.data[0] as Hash;
            }
          }

          done();
        });

      return putCode.then((): Promise<Hash> => {
        return apiPromise.tx.contract
          .create(12345, 50000, codeHash, abi.deploy())
          .signAndSend(keyring.bob);
      });
    });

    it('getChildKeys(): retrieves :child_storage: keys for one deployed flipper contract', async (done):
    Promise<void> => {
      const storageKeys = await rpc.state.getKeys(CHILD_STORAGE).toPromise();

      rpc.state
        .getChildKeys(storageKeys[0], '0x')
        .subscribe((keys: StorageKey[]): void => {
          expect(keys.length).toBeGreaterThanOrEqual(1);
          done();
        });
    });

    it('getChildStorage(): retrieves the default value of the flipper smart contract', async (done): Promise<void> => {
      const storageKeys = await rpc.state.getKeys(CHILD_STORAGE).toPromise();
      const childStorageKeys = await rpc.state.getChildKeys(storageKeys[0], '0x').toPromise();

      rpc.state
        .getChildStorage(storageKeys[0], childStorageKeys[0])
        .subscribe((storage: StorageData): void => {
          expect(storage.toString()).toBe('0x00');
          done();
        });
    });

    it('getChildStorageHash(): retrieves the Hash of the flipper smart contract', async (done): Promise<void> => {
      const storageKeys = await rpc.state.getKeys(CHILD_STORAGE).toPromise();
      const childStorageKeys = await rpc.state.getChildKeys(storageKeys[0], '0x').toPromise();

      rpc.state
        .getChildStorageHash(storageKeys[0], childStorageKeys[0])
        .subscribe((storage: StorageData): void => {
          expect(storage.toString()).toBe('0x03170a2e7597b7b7e3d84c05391d139a62b157e78786d8c082f29dcf4c111314');
          done();
        });
    });

    it('getChildStorageSize(): retrieves the size of the flipper smart contract', async (done): Promise<void> => {
      const storageKeys = await rpc.state.getKeys(CHILD_STORAGE).toPromise();
      const childStorageKeys = await rpc.state.getChildKeys(storageKeys[0], '0x').toPromise();

      rpc.state
        .getChildStorageSize(storageKeys[0], childStorageKeys[0])
        .subscribe((storage: StorageData): void => {
          expect(storage.toString()).toBe('1');
          done();
        });
    });
  });
});
