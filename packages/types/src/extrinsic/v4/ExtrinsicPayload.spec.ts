// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../../create/index.js';
import { decorateExtrinsics, Metadata } from '../../metadata/index.js';
import { fallbackSignedExtensions } from '../signedExtensions/index.js';
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

  it('Correctly decodes assetId', () => {
    const TEST_VALUE = {
      address: 'J97drEQy6sYPXf2D1uj1hJfeHsxjvwr4tVGKs9o8VDSht8r',
      assetId: '0x010002043205011f' as `0x${string}`,
      blockHash: '0x28a464e6b40fccec3b9e7989db97d2627d3653c644a3c801f8239910eaaa58a8',
      era: '0x4401',
      genesisHash: '0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a',
      method: '0x0a0300d27001b334c34489c67b81dfbbdc86eba5b433163bd08226d89b081914e9aa490284d717',
      nonce: '0x0000000a',
      specVersion: '0x000f4dfc',
      tip: '0x00000000000000000000000000000000',
      transactionVersion: '0x0000000f'
    };

    const reg = new TypeRegistry();

    reg.setSignedExtensions(fallbackSignedExtensions.concat(['ChargeAssetTxPayment']));
    const ext = new ExtrinsicPayload(reg, TEST_VALUE);

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
