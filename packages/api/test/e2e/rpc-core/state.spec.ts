// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Balance, Moment } from '@polkadot/types/interfaces';
import { Bytes, Metadata, StorageKey } from '@polkadot/types';

import storage from '@polkadot/api-metadata/storage/static';
import Rpc from '@polkadot/rpc-core';
import WsProvider from '@polkadot/rpc-provider/ws';

import { describeE2E } from '../../util';

const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const CODE = '0x3a636f6465'; // :code
const CHILD_STORAGE = '0x3a6368696c645f73746f726167653a'; // :child_storage:

describeE2E({
  except: [
    'remote-polkadot-alexander',
    'remote-substrate-1.0'
  ]
})('RPC-core e2e state', (wsUrl: string): void => {
  let rpc: Rpc;

  beforeEach((): void => {
    jest.setTimeout(30000);
    rpc = new Rpc(new WsProvider(wsUrl));
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
          // console.log(balance);

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
          // console.error(moment);

          expect(moment.toNumber()).not.toEqual(0);
          done();
        });
    });
  });
});
