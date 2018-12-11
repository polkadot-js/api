// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/extrinsics/static';
import Extrinsic from '@polkadot/types/Extrinsic';
import Method from '@polkadot/types/Method';

import SubmittableExtrinsic from './SubmittableExtrinsic';

describe('SubmittableExtrinsic', () => {
  let api: any;

  beforeEach(() => {
    Method.injectExtrinsics(extrinsics);

    api = {
      hasSubscriptions: true,
      rpc: {
        author: {
          submitAndWatchExtrinsic: () => Promise.resolve('submitAndWatchExtrinsic'),
          submitExtrinsic: () => Promise.resolve('submitExtrinsic')
        }
      }
    };
  });

  it('send calls submitAndWatchExtrinsic with statusCb', async () => {
    const result = await new SubmittableExtrinsic(
      api,
      new Extrinsic('0x010200ea51b75b00000000')
    ).send(() => {
      // ignore
    });

    expect(result).toEqual('submitAndWatchExtrinsic');
  });

  it('send calls submitExtrinsic without statusCb', async () => {
    const result = await new SubmittableExtrinsic(
      api,
      new Extrinsic('0x010200ea51b75b00000000')
    ).send();

    expect(result).toEqual('submitExtrinsic');
  });
});
