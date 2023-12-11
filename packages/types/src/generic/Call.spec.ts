// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import metadataStatic from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../create/index.js';
import { Metadata } from '../metadata/index.js';
import { GenericCall as Call } from './index.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, metadataStatic);

registry.setMetadata(metadata);

describe('Call', (): void => {
  // balances.forceSetBalance(0x, 0)
  const FSBU8 = new Uint8Array([
    // index
    6, 8,
    // id lookup
    0,
    // public
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    // value
    0
  ]);

  it('handles decoding correctly (bare)', (): void => {
    expect(
      new Call(registry, {
        args: ['0x0000000000000000000000000000000000000000000000000000000000000000', 0],
        callIndex: [6, 8]
      }).toU8a()
    ).toEqual(FSBU8);
  });

  it('handles creation from a hex value properly', (): void => {
    expect(
      new Call(registry, '0x0608000000000000000000000000000000000000000000000000000000000000000000').toU8a()
    ).toEqual(FSBU8);
  });
});
