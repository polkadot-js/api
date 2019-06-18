// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import path from 'path';

import { SubmittableResult } from '@polkadot/api';
import ApiPromise from '@polkadot/api/promise/Api';
import { Abi } from '@polkadot/api-contract';
import testingPairs from '@polkadot/keyring/testingPairs';
import { KeyringPair } from '@polkadot/keyring/types';
import WsProvider from '@polkadot/rpc-provider/ws';
import storage from '@polkadot/storage/static';
import { Balance, Bytes, Hash, Metadata, Moment, StorageData, StorageKey } from '@polkadot/types';

import Rpc from '../../src';
import flipperAbi from '../../../api-contract/test/contracts/flipper.json';

const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const CODE = '0x3a636f6465'; // :code
const CHILD_STORAGE = '0x3a636f6465'; // :child_storage:

describe.skip('e2e state', () => {
  let api: Rpc;

  beforeEach(() => {
    jest.setTimeout(30000);
    api = new Rpc(new WsProvider('ws://127.0.0.1:9944'));
  });

  it('getMetadata(): retrieves the wasm metadata', () => {
    return api.state
      .getMetadata()
      .then((meta: Metadata) => {
        console.error(JSON.stringify(meta.toJSON()));
      })
      .catch((error) => {
        console.error(error);

        throw error;
      });
  });

  it('getKeys(): retrieves storage keys for ":code"', () => {
    return api.state
      .getKeys(CODE)
      .then((keys: Array<StorageKey>) => {
        expect(keys.length).toEqual(1);
      });
  });

  describe('test-suite getStorage()', () => {
    it('retrieves code', () => {
      return api.state
        .getStorage([
          storage.substrate.code
        ])
        .then((code: Bytes) => {
          console.error(code.toHex().substr(0, 256), '...');
        })
        .catch((error) => {
          console.error(error);

          throw error;
        });
    });

    it('retrieves balances', () => {
      return api.state
        .getStorage([
          storage.balances.freeBalance, ALICE
        ])
        .then((balance: Balance) => {
          console.error(balance);

          expect(balance.isZero()).not.toEqual(true);
        })
        .catch((error) => {
          console.error(error);

          throw error;
        });
    });

    it('retrieves timestamp', () => {
      return api.state
        .getStorage([
          storage.timestamp.now
        ])
        .then((moment: Moment) => {
          console.error(moment);

          expect(moment.toNumber()).not.toEqual(0);
        })
        .catch((error) => {
          console.error(error);

          throw error;
        });
    });
  });

  describe('e2e state child methods', () => {
    // `child_storage` is currently not used anywhere in substrate, that's why we need to
    // add a Smart Contract that is using `child_storage` before being able to test it.
    let codeHash: Hash;

    beforeAll(async (done) => {
      const code: string = fs.readFileSync(path.join(__dirname, '../../../api-contract/test/contracts/flipper-pruned.wasm')).toString('hex');
      const abi = new Abi(flipperAbi);
      const apiPromise: ApiPromise = await ApiPromise.create(new WsProvider('ws://127.0.0.1:9944'));
      const keyring: {
        [index: string]: KeyringPair
      } = testingPairs({ type: 'sr25519' });

      const putCode = apiPromise.tx.contract
        .putCode(50000, `0x${code}`)
        .signAndSend(keyring.eve, (result: SubmittableResult) => {
          if (result.status.isFinalized) {
            const record = result.findRecord('contract', 'CodeStored');

            if (record) {
              codeHash = record.event.data[0] as Hash;
            }
          }
          done();
        });

      return putCode.then(() => {
        return apiPromise.tx.contract
          .create(12345, 50000, codeHash, abi.deploy())
          .signAndSend(keyring.bob);
      });
    });

    it('getChildKeys(): retrieves :child_storage: keys for one deployed flipper contract', async () => {
      const storageKeys = await api.state.getKeys(CHILD_STORAGE);

      return api.state
        .getChildKeys(storageKeys[0], '0x')
        .then((keys: Array<StorageKey>) => {
          expect(keys.length).toBeGreaterThanOrEqual(1);
        });
    });

    it('getChildStorage(): retrieves the default value of the flipper smart contract', async () => {
      const storageKeys = await api.state.getKeys(CHILD_STORAGE);
      const childStorageKeys = await api.state.getChildKeys(storageKeys[0], '0x');

      return api.state
        .getChildStorage(storageKeys[0], childStorageKeys[0])
        .then((storage: StorageData) => {
          expect(storage.toString()).toBe('0x00');
        });
    });

    it('getChildStorageHash(): retrieves the Hash of the flipper smart contract', async () => {
      const storageKeys = await api.state.getKeys(CHILD_STORAGE);
      const childStorageKeys = await api.state.getChildKeys(storageKeys[0], '0x');

      return api.state
        .getChildStorageHash(storageKeys[0], childStorageKeys[0])
        .then((storage: StorageData) => {
          expect(storage.toString()).toBe('0x03170a2e7597b7b7e3d84c05391d139a62b157e78786d8c082f29dcf4c111314');
        });
    });

    it('getChildStorageSize(): retrieves the size of the flipper smart contract', async () => {
      const storageKeys = await api.state.getKeys(CHILD_STORAGE);
      const childStorageKeys = await api.state.getChildKeys(storageKeys[0], '0x');

      return api.state
        .getChildStorageSize(storageKeys[0], childStorageKeys[0])
        .then((storage: StorageData) => {
          expect(storage.toString()).toBe('1');
        });
    });
  });
});
