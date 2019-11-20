// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Balance, Moment, RuntimeVersion } from '@polkadot/types/interfaces';

import DecorateMeta from '@polkadot/metadata';
import rpcMetadata from '@polkadot/metadata/Metadata/static';
import Rpc from '@polkadot/rpc-core';
import WsProvider from '@polkadot/rpc-provider/ws';
import { Bytes, ClassOf, Metadata, StorageKey, TypeRegistry } from '@polkadot/types';

import { describeE2E } from '../../util';

const BOB_STASH = '5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc';
const CODE = '0x3a636f6465'; // :code

const registry = new TypeRegistry();
const metadata = new DecorateMeta(registry, rpcMetadata);

describeE2E({
  except: [
    'remote-polkadot-alexander',
    'remote-substrate-1.0'
  ]
})('RPC-core e2e state', (wsUrl: string): void => {
  let rpc: Rpc;

  beforeEach((): void => {
    jest.setTimeout(30000);
    rpc = new Rpc(registry, new WsProvider(wsUrl));
  });

  it('getMetadata(): retrieves the wasm metadata', (done): void => {
    rpc.state
      .getMetadata()
      .subscribe((meta: Metadata): void => {
        expect(meta).toBeDefined();
        expect(meta).toBeInstanceOf(Metadata);
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

  it('retrieves the runtime version', (done): void => {
    rpc.state
      .getRuntimeVersion()
      .subscribe((version: RuntimeVersion): void => {
        expect(version).toBeInstanceOf(ClassOf(registry, 'RuntimeVersion'));
        done();
      });
  });

  describe('test-suite getStorage()', (): void => {
    it('retrieves code', (done): void => {
      rpc.state
        .getStorage<Bytes>([
        metadata.query.substrate.code
      ])
        .subscribe((code: Bytes): void => {
          expect(code).toBeDefined();
          expect(code).toBeInstanceOf(Bytes);
          done();
        });
    });

    it('retrieves balances', (done): void => {
      rpc.state
        .getStorage<Balance>([
        metadata.query.balances.freeBalance, BOB_STASH
      ])
        .subscribe((balance): void => {
          expect(balance.isZero()).not.toEqual(true);
          done();
        });
    });

    it('retrieves timestamp', (done): void => {
      rpc.state
        .getStorage<Moment>([
        metadata.query.timestamp.now
      ])
        .subscribe((moment: Moment): void => {
          expect(moment.toNumber()).not.toEqual(0);
          done();
        });
    });

    it('accepts StorageKey as input type', async (done): Promise<void> => {
      // get storage keys for ':code' storage
      const keys = await rpc.state.getKeys('0x3a636f6465').toPromise();
      const key = keys[0];
      const storageHash = await rpc.state.getStorageHash(key, '0x').toPromise();

      expect(storageHash).toBeDefined();
      done();
    });

    it('accepts a hex value as input type', async (done): Promise<void> => {
      // get storage keys for ':code' storage
      const keys = await rpc.state.getKeys('0x3a636f6465').toPromise();
      const key = keys[0].toHex();
      const storageHash = await rpc.state.getStorageHash(key, '0x').toPromise();

      expect(storageHash).toBeDefined();
      done();
    });
  });
});
