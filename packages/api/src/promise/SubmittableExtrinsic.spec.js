// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Extrinsic from './SubmittableExtrinsic';

describe('SubmittableExtrinsic', () => {
  let api;

  beforeEach(() => {
    api = {
      rpc: {
        author: {
          submitAndWatchExtrinsic: () => Promise.resolve('submitAndWatchExtrinsic'),
          submitExtrinsic: () => Promise.resolve('submitExtrinsic')
        }
      }
    };
  });

  it('send calls submitAndWatchExtrinsic with statusCb', async () => {
    const result = await new Extrinsic(api).send(() => {});

    expect(result).toEqual('submitAndWatchExtrinsic');
  });

  it('send calls submitExtrinsic without statusCb', async () => {
    const result = await new Extrinsic(api).send();

    expect(result).toEqual('submitExtrinsic');
  });
});
