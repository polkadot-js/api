// Copyright 2017-2018 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Ws from '@polkadot/rpc-provider/ws';

import Rpc from '../../src';

describe.skip('e2e basics', () => {
  let api;

  beforeEach(() => {
    jest.setTimeout(30000);
    api = new Rpc(new Ws('ws://127.0.0.1:9944'));
  });

  it('retrieves the pending extrinsics', () => {
    return api.author
      .pendingExtrinsics()
      .then((extrinsics) => {
        console.error('extrinsics', extrinsics);
      })
      .catch((error) => {
        console.error(error);

        throw error;
      });
  });
});
