// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/api-metadata/extrinsics/static';
import { createType, GenericCall } from '@polkadot/types';

import SignerPayload from './SignerPayload';

describe('SignerPayload', (): void => {
  const TEST = {
    address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE',
    blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
    blockNumber: '0x0000000000231d30',
    era: '0x0703',
    genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
    method: '0x0500ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c',
    nonce: '0x0000000000001234',
    tip: '0x00000000000000000000000000005678',
    version: 2,
    encoded: new Uint8Array([5, 0, 255, 215, 86, 142, 95, 10, 126, 218, 103, 168, 38, 145, 255, 55, 154, 196, 187, 164, 249, 201, 184, 89, 254, 119, 155, 93, 70, 54, 59, 97, 173, 45, 185, 229, 108, 7, 3, 209, 72, 226, 89, 1, 0, 222, 143, 105, 238, 181, 224, 101, 225, 140, 105, 80, 255, 112, 141, 126, 85, 31, 104, 220, 155, 245, 154, 7, 197, 35, 103, 192, 40, 15, 128, 94, 199])
  };

  beforeEach((): void => {
    GenericCall.injectMethods(extrinsics);
  });

  it('creates a valid JSON output', (): void => {
    expect(
      new SignerPayload({
        address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE',
        blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
        blockNumber: '0x231d30',
        era: createType('ExtrinsicEra', { current: 2301232, period: 200 }),
        genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
        method: createType('Call', '0x0500ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c'),
        nonce: 0x1234,
        tip: 0x5678,
        version: 2
      }).toPayload()
    ).toEqual(TEST);
  });

  it('re-constructs from JSON', (): void => {
    expect(
      new SignerPayload(TEST).toPayload()
    ).toEqual(TEST);
  });

  it('re-constructs from itself', (): void => {
    expect(
      new SignerPayload(
        new SignerPayload(TEST)
      ).toPayload()
    ).toEqual(TEST);
  });

  it('can be used as a feed to ExtrinsicPayload', (): void => {
    const signer = new SignerPayload(TEST).toPayload();
    const payload = createType('ExtrinsicPayload', signer, { version: signer.version });

    expect(payload.era.toHex()).toEqual(TEST.era);
    expect(payload.method.toHex()).toEqual(TEST.method);
    expect(payload.blockHash.toHex()).toEqual(TEST.blockHash);
    expect(payload.nonce.eq(TEST.nonce)).toBe(true);
    expect(payload.tip.eq(TEST.tip)).toBe(true);
  });
});
