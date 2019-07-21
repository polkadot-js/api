// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/api-metadata/extrinsics/static';

import Method from '../../Method';
import Extrinsic from './Extrinsic';

describe('ExtrinsicV2', (): void => {
  beforeEach((): void => {
    Method.injectMethods(extrinsics);
  });

  it('constructs a sane Uint8Array (default)', (): void => {
    expect(
      new Extrinsic().toU8a()
    ).toEqual(new Uint8Array([0, 0]));
  });
});
