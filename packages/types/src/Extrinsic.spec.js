// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import extrinsics from '@polkadot/extrinsics/static';

import Extrinsic from './Extrinsic';
import Method from './Method';

describe('Extrinsic', () => {
  beforeEach(() => {
    Method.injectExtrinsics(extrinsics);
  });

  it('decodes a non-signed properly via fromJSON', () => {
    const extrinsic = new Extrinsic().fromJSON('0x010200ea51b75b00000000');

    expect(extrinsic.isSigned).toEqual(false);
    expect(extrinsic.callIndex).toEqual(new Uint8Array([2, 0]));
    expect(extrinsic.data).toEqual(new Uint8Array([234, 81, 183, 91, 0, 0, 0, 0]));
  });
});
