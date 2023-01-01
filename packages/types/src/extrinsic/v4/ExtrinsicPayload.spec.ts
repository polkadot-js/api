// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../../create';
import { decorateExtrinsics, Metadata } from '../../metadata';
import { GenericExtrinsicPayloadV4 as ExtrinsicPayload } from '.';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);

registry.setMetadata(metadata);

const tx = decorateExtrinsics(registry, metadata.asLatest, metadata.version);

describe('ExtrinsicPayload', (): void => {
  it('has a sane inspect', (): void => {
    // we don't expect this to fail, however it is actually a good
    // reference for the ordering in base Substrate
    expect(new ExtrinsicPayload(registry, { method: tx.timestamp.set(0).toHex() } as never).inspect()).toEqual({
      inner: [
        { name: 'method', outer: [new Uint8Array([3, 0, 0])] },
        { name: 'era', outer: [new Uint8Array([0]), new Uint8Array([0])] },
        { name: 'nonce', outer: [new Uint8Array([0])] },
        { name: 'tip', outer: [new Uint8Array([0])] },
        { name: 'assetId', outer: [new Uint8Array([0])] },
        { name: 'specVersion', outer: [new Uint8Array([0, 0, 0, 0])] },
        { name: 'transactionVersion', outer: [new Uint8Array([0, 0, 0, 0])] },
        { name: 'genesisHash', outer: [new Uint8Array(32)] },
        { name: 'blockHash', outer: [new Uint8Array(32)] }
      ]
    });
  });
});
