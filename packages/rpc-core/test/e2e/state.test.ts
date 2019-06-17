// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Balance, Bytes, Metadata, Moment } from '@polkadot/types';
import storage from '@polkadot/storage/static';
import WsProvider from '@polkadot/rpc-provider/ws';

import Rpc from '../../src';

const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';

describe.skip('e2e state', () => {
  let rpc: Rpc;

  beforeEach(() => {
    jest.setTimeout(30000);
    rpc = new Rpc(new WsProvider('ws://127.0.0.1:9944'));
  });

  it('retrieves code', () => {
    return rpc.state
      .getStorage([
        storage.substrate.code
      ])
      .subscribe((code: Bytes) => {
        console.error(code.toHex().substr(0, 256), '...');
      });
  });

  it('retrieves the wasm metadata', () => {
    return rpc.state
      .getMetadata()
      .subscribe((meta: Metadata) => {
        console.error(JSON.stringify(meta.toJSON()));
      });
  });

  it('retrieves balances', () => {
    return rpc.state
      .getStorage([
        storage.balances.freeBalance, ALICE
      ])
      .subscribe((balance: Balance) => {
        console.error(balance);

        expect(balance.isZero()).not.toEqual(true);
      });
  });

  it('retrieves timestamp', () => {
    return rpc.state
      .getStorage([
        storage.timestamp.now
      ])
      .subscribe((moment: Moment) => {
        console.error(moment);

        expect(moment.toNumber()).not.toEqual(0);
      });
  });
});
