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

import Rpc from '../../src';
import flipperAbiPre97 from '../../../api-contract/test/contracts_0_96/Flipper.json';
import flipperAbiPost97 from '../../../api-contract/test/contracts>=spec_version-97/Flipper.json';

const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const CODE = '0x3a636f6465'; // :code
const CHILD_STORAGE = '0x3a6368696c645f73746f726167653a'; // :child_storage:

describe('e2e state', () => {
  let rpc: Rpc;

  beforeEach(() => {
    jest.setTimeout(30000);
    rpc = new Rpc(new WsProvider((global as any).ws_local));
  });

  it('getMetadata(): retrieves the wasm metadata', (done) => {
    rpc.state
      .getMetadata()
      .subscribe((meta: Metadata) => {
        console.error(JSON.stringify(meta.toJSON()));
        done();
      });
  });

  it('getKeys(): retrieves storage keys for ":code"', (done) => {
    rpc.state
      .getKeys(CODE)
      .subscribe((keys: Array<StorageKey>) => {
        expect(keys.length).toEqual(1);
        done();
      });
  });

  describe('test-suite getStorage()', () => {
    it('retrieves code', (done) => {
      rpc.state
        .getStorage([
          storage.substrate.code
        ])
        .subscribe((code: Bytes) => {
          console.error(code.toHex().substr(0, 256), '...');
          done();
        });
    });

    it('retrieves balances', (done) => {
      rpc.state
        .getStorage([
          storage.balances.freeBalance, ALICE
        ])
        .subscribe((balance: Balance) => {
          console.error(balance);

          expect(balance.isZero()).not.toEqual(true);
          done();
        });
    });

    it('retrieves timestamp', (done) => {
      rpc.state
        .getStorage([
          storage.timestamp.now
        ])
        .subscribe((moment: Moment) => {
          console.error(moment);

          expect(moment.toNumber()).not.toEqual(0);
          done();
        });
    });
  });

  describe('e2e state child methods', () => {
    // `child_storage` is currently not used anywhere in substrate, that's why we need to
    // add a Smart Contract that is using `child_storage` before being able to test it.
    let codeHash: Hash;

    beforeAll(async (done) => {
      const apiPromise: ApiPromise = await ApiPromise.create(new WsProvider((global as any).ws_local));

      const txPath = apiPromise.tx.contracts || apiPromise.tx.contract;

      const pathName: string = apiPromise.runtimeVersion.specVersion.toNumber() < 97 ? 'contracts_0_96' : 'contracts>=spec_version-97';
      const code: string = fs.readFileSync(path.join(__dirname, `../../../api-contract/test/${pathName}/flipper-pruned.wasm`)).toString('hex');
      const abi = apiPromise.runtimeVersion.specVersion.toNumber() > 97
        ? new Abi(flipperAbiPre97)
        : new Abi(flipperAbiPost97);

      const keyring: {
        [index: string]: KeyringPair
      } = testingPairs({ type: 'sr25519' });

      console.log('CODE');
      console.log(code);
      console.log(abi);

      const putCode = txPath
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
        return txPath
          .create(12345, 50000, codeHash, abi.deploy())
          .signAndSend(keyring.bob);
      });
    });

    it('getChildKeys(): retrieves :child_storage: keys for one deployed flipper contract', async (done) => {
      const storageKeys = await rpc.state.getKeys(CHILD_STORAGE).toPromise();

      rpc.state
        .getChildKeys(storageKeys[0], '0x')
        .subscribe((keys: Array<StorageKey>) => {
          expect(keys.length).toBeGreaterThanOrEqual(1);
          done();
        });
    });

    it('getChildStorage(): retrieves the default value of the flipper smart contract', async (done) => {
      const storageKeys = await rpc.state.getKeys(CHILD_STORAGE).toPromise();
      const childStorageKeys = await rpc.state.getChildKeys(storageKeys[0], '0x').toPromise();

      rpc.state
        .getChildStorage(storageKeys[0], childStorageKeys[0])
        .subscribe((storage: StorageData) => {
          expect(storage.toString()).toBe('0x00');
          done();
        });
    });

    it('getChildStorageHash(): retrieves the Hash of the flipper smart contract', async (done) => {
      const storageKeys = await rpc.state.getKeys(CHILD_STORAGE).toPromise();
      const childStorageKeys = await rpc.state.getChildKeys(storageKeys[0], '0x').toPromise();

      rpc.state
        .getChildStorageHash(storageKeys[0], childStorageKeys[0])
        .subscribe((storage: StorageData) => {
          expect(storage.toString()).toBe('0x03170a2e7597b7b7e3d84c05391d139a62b157e78786d8c082f29dcf4c111314');
          done();
        });
    });

    it('getChildStorageSize(): retrieves the size of the flipper smart contract', async (done) => {
      const storageKeys = await rpc.state.getKeys(CHILD_STORAGE).toPromise();
      const childStorageKeys = await rpc.state.getChildKeys(storageKeys[0], '0x').toPromise();

      rpc.state
        .getChildStorageSize(storageKeys[0], childStorageKeys[0])
        .subscribe((storage: StorageData) => {
          expect(storage.toString()).toBe('1');
          done();
        });
    });
  });
});
