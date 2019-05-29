// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Balance, Bytes, Metadata, Moment } from '@plugnet/types';
import storage from '@plugnet/storage/static';
import WsProvider from '@plugnet/rpc-provider/ws';

import Rpc from '../../src';

const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';

describe.skip('e2e state', () => {
  let api: Rpc;

  beforeEach(() => {
    jest.setTimeout(30000);
    api = new Rpc(new WsProvider('ws://127.0.0.1:9944'));
  });

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

  it('retrieves the wasm metadata', () => {
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
