// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../../create/index.js';
import { decorateExtrinsics, Metadata } from '../../metadata/index.js';
import { fallbackExtensions } from '../signedExtensions/index.js';
import { GenericExtrinsicPayloadV4 as ExtrinsicPayload } from './index.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);

registry.setMetadata(metadata);

const tx = decorateExtrinsics(registry, metadata.asLatest, metadata.version);

describe('ExtrinsicPayload', (): void => {
  it('has a sane inspect', (): void => {
    // we don't expect this to fail, however it is actually a good
    // reference for the ordering in base Substrate
    expect(new ExtrinsicPayload(registry, { method: tx['timestamp']['set'](0).toHex() } as never).inspect()).toEqual({
      inner: [
        { name: 'method', outer: [new Uint8Array([3, 0, 0])] },
        { inner: undefined, name: 'era', outer: [new Uint8Array([0]), new Uint8Array([0])] },
        { name: 'nonce', outer: [new Uint8Array([0])] },
        { name: 'tip', outer: [new Uint8Array([0])] },
        { name: 'assetId', outer: [new Uint8Array([0])] },
        { name: 'mode', outer: [new Uint8Array([0])] },
        { name: 'specVersion', outer: [new Uint8Array([0, 0, 0, 0])] },
        { name: 'transactionVersion', outer: [new Uint8Array([0, 0, 0, 0])] },
        { name: 'genesisHash', outer: [new Uint8Array(32)] },
        { name: 'blockHash', outer: [new Uint8Array(32)] },
        { name: 'metadataHash', outer: [new Uint8Array([0])] }
      ]
    });
  });

  it('correctly decodes assetId', () => {
    const TEST_WITH_ASSET = {
      address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE',
      assetId: '0x0002043205011f' as `0x${string}`,
      blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
      era: '0x0703',
      genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
      method: '0x0600ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c',
      nonce: '0x00001234',
      specVersion: 123,
      tip: '0x00000000000000000000000000005678',
      transactionVersion: '0x00'
    };

    const reg = new TypeRegistry();

    reg.setSignedExtensions(fallbackExtensions.concat(['ChargeAssetTxPayment']));
    const ext = new ExtrinsicPayload(reg, TEST_WITH_ASSET);

    expect(ext.assetId.toJSON()).toEqual({
      interior: {
        x2: [
          {
            palletInstance: 50
          },
          {
            generalIndex: 1984
          }
        ]
      },
      parents: 0
    });
  });
});
