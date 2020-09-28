// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Metadata from '@polkadot/metadata/Metadata';
import rpcMetadata from '@polkadot/metadata/Metadata/static';

import { TypeRegistry } from '../create';
import SignerPayload from './SignerPayload';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);

registry.setMetadata(metadata);

describe('SignerPayload', (): void => {
  const TEST = {
    address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE',
    blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
    blockNumber: '0x00231d30',
    era: '0x0703',
    genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
    method: '0x0600ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c',
    nonce: '0x00001234',
    signedExtensions: ['CheckNonce', 'CheckWeight'],
    specVersion: '0x00000006',
    tip: '0x00000000000000000000000000005678',
    transactionVersion: '0x00000007',
    version: 4
  };

  it('creates a valid JSON output', (): void => {
    expect(
      new SignerPayload(registry, {
        address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE',
        blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
        blockNumber: '0x231d30',
        era: registry.createType('ExtrinsicEra', { current: 2301232, period: 200 }),
        genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
        method: registry.createType('Call', '0x0600ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c'),
        nonce: 0x1234,
        signedExtensions: ['CheckNonce'],
        tip: 0x5678,
        version: 4
      }).toPayload()
    ).toEqual({
      address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE',
      blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
      blockNumber: '0x00231d30',
      era: '0x0703',
      genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
      method: '0x0600ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c',
      nonce: '0x00001234',
      signedExtensions: ['CheckNonce'],
      specVersion: '0x00000000',
      tip: '0x00000000000000000000000000005678',
      transactionVersion: '0x00000000',
      version: 4
    });
  });

  it('re-constructs from JSON', (): void => {
    expect(
      new SignerPayload(registry, {
        ...TEST,
        runtimeVersion: { specVersion: 0x06, transactionVersion: 0x07 }
      }).toPayload()
    ).toEqual(TEST);
  });

  it('re-constructs from itself', (): void => {
    expect(
      new SignerPayload(
        registry,
        new SignerPayload(registry, {
          ...TEST,
          runtimeVersion: { specVersion: 0x06, transactionVersion: 0x07 }
        })
      ).toPayload()
    ).toEqual(TEST);
  });

  it('can be used as a feed to ExtrinsicPayload', (): void => {
    const signer = new SignerPayload(registry, TEST).toPayload();
    const payload = registry.createType('ExtrinsicPayload', signer, { version: signer.version });

    expect(payload.era.toHex()).toEqual(TEST.era);
    expect(payload.method.toHex()).toEqual(TEST.method);
    expect(payload.blockHash.toHex()).toEqual(TEST.blockHash);
    expect(payload.nonce.eq(TEST.nonce)).toBe(true);
    expect(payload.tip.eq(TEST.tip)).toBe(true);
  });
});
