// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../../injector';

import ExtrinsicPayload from './ExtrinsicPayload';

describe('ExtrinsicPayload', (): void => {
  const TEST = {
    address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE',
    blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
    era: '0x0703',
    genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
    method: '0x0500ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c',
    nonce: '0x00001234',
    tip: '0x00000000000000000000000000005678'
  };

  it('creates and can re-create from itself (U8a)', (): void => {
    const a = new ExtrinsicPayload(TEST, { version: 3 });
    const b = new ExtrinsicPayload(a.toU8a(), { version: 3 });

    expect(a).toEqual(b);
  });

  it('creates and can re-create from itself (hex)', (): void => {
    const a = new ExtrinsicPayload(TEST, { version: 3 });
    const b = new ExtrinsicPayload(a.toHex(), { version: 3 });

    expect(a).toEqual(b);
  });
});
