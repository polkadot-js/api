// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { TypeRegistry } from '../../create/index.js';
import { GeneralExtrinsicEncoded as ExtrinsicEncoded } from './index.js';

describe('GeneralExtrinsicEncoded', () => {
  it('encodes to a sane Uint8Array (default)', (): void => {
    const registry = new TypeRegistry();

    const u8a = new Uint8Array([
      0x00, // TransactionExtension version
      // extra stuff
      0x00, // immortal,
      0x04, // nonce, compact
      0x08 // tip, compact
    ]);

    expect(
      new ExtrinsicEncoded(registry, u8a).toU8a()
    ).toEqual(u8a);
  });
});
