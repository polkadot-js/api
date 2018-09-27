// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Api from '../../api/src';
import Ws from '../src/ws';

describe.skip('e2e basics', () => {
  let api;

  beforeEach(() => {
    jest.setTimeout(30000);
    api = new Api(new Ws('ws://127.0.0.1:9944'));
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
});
