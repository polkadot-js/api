// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../create/index.js';
import { Metadata } from '../metadata/index.js';
import { GenericSignerPayload as SignerPayload } from './index.js';

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
    method: '0x060000d7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c',
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
        method: registry.createType('Call', '0x060000d7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c'),
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
      method: '0x060000d7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c',
      nonce: '0x00001234',
      signedExtensions: ['CheckNonce'],
      specVersion: '0x00000000',
      tip: '0x00000000000000000000000000005678',
      transactionVersion: '0x00000000',
      version: 4
    });
  });

  it('handles Option<AssetId> correctly', (): void => {
    const test = new SignerPayload(registry, {
      // eslint-disable-next-line sort-keys
      assetId: { parents: 0, interior: { x2: [{ palletInstance: 50 }, { generalIndex: 123 }] } }
    });

    expect(
      [...test.keys()].includes('assetId')
    ).toEqual(true);

    expect(
      // @ts-expect-error We don't have getters for this field
      test.toPayload().assetId
    ).toEqual({
      // eslint-disable-next-line sort-keys
      parents: 0, interior: { x2: [{ palletInstance: 50 }, { generalIndex: 123 }] }
    });

    expect(
      // @ts-expect-error We don't have getters for this field
      new SignerPayload(registry, { assetId: 0 }).toPayload().assetId
    ).toEqual({
      // eslint-disable-next-line sort-keys
      parents: 0, interior: { here: null }
    });

    expect(
      // @ts-expect-error We don't have getters for this field
      new SignerPayload(registry, TEST).toPayload().assetId
    ).toBeUndefined();
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
    const signer = new SignerPayload(registry, {
      ...TEST,
      // eslint-disable-next-line sort-keys
      assetId: { parents: 0, interior: { x2: [{ palletInstance: 50 }, { generalIndex: 123 }] } }
    }).toPayload();
    const payload = registry.createType('ExtrinsicPayload', signer, { version: signer.version });

    expect(payload.era.toHex()).toEqual(TEST.era);
    expect(payload.method.toHex()).toEqual(TEST.method);
    expect(payload.blockHash.toHex()).toEqual(TEST.blockHash);
    expect(payload.nonce.eq(TEST.nonce)).toBe(true);
    expect(payload.tip.eq(TEST.tip)).toBe(true);
    // @ts-expect-error assetId is of unknown type, so we don't know about "isSome"
    expect(payload.inner?.get('assetId')?.isSome && payload.inner?.get('assetId')
      ?.eq(registry.createType('MultiLocation', {
        // eslint-disable-next-line sort-keys
        parents: 0, interior: { X2: [{ palletInstance: 50 }, { generalIndex: 123 }] }
      }))).toBe(true);
  });
});
