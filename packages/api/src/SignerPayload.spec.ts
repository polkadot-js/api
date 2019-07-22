// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/api-metadata/extrinsics/static';
import { Method, ExtrinsicEra, SignaturePayload } from '@polkadot/types';

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
    version: 2
  };

  beforeEach((): void => {
    Method.injectMethods(extrinsics);
  });

  it('creates a valid JSON output', (): void => {
    expect(
      new SignerPayload({
        address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE',
        blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
        blockNumber: '0x231d30',
        era: new ExtrinsicEra({ current: 2301232, period: 200 }),
        genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
        method: new Method('0x0500ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c'),
        nonce: 0x1234,
        tip: 0x5678,
        version: 2
      }).toPayload()
    ).toEqual({
      address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE',
      blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
      blockNumber: '0x0000000000231d30',
      era: '0x0703',
      genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
      method: '0x0500ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c',
      nonce: '0x0000000000001234',
      tip: '0x00000000000000000000000000005678',
      version: 2
    });
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

  it('can be used as a feed to SignaturePayload', (): void => {
    const signer = new SignerPayload(TEST).toPayload();
    const payload = new SignaturePayload(signer, { version: signer.version });

    expect(payload.era.toHex()).toEqual(TEST.era);
    expect(payload.method.toHex()).toEqual(TEST.method);
    expect(payload.blockHash.toHex()).toEqual(TEST.blockHash);
    expect(payload.nonce.eq(TEST.nonce)).toBe(true);
    expect(payload.tip.eq(TEST.tip)).toBe(true);
  });
});
