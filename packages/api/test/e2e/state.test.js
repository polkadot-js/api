// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import storage from '@polkadot/storage/testing';
import Ws from '@polkadot/api-provider/ws';

import Api from '../../src';

const ALICE = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

describe.skip('e2e state', () => {
  let api;

  beforeEach(() => {
    jest.setTimeout(30000);
    api = new Api(new Ws('ws://127.0.0.1:9944'));
  });

  it('retrieves code', () => {
    return api.state
      .getStorage([
        storage.substrate.code
      ])
      .then((code) => {
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
      .then((meta) => {
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
      .then((balance) => {
        console.error(balance);

        expect(balance.toBn().isZero()).not.toEqual(true);
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
      .then((moment) => {
        console.error(moment);

        expect(moment.toNumber()).not.toEqual(0);
      })
      .catch((error) => {
        console.error(error);

        throw error;
      });
  });
});
