// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { HexString } from '@polkadot/util/types';

import { isString, isU8a, u8aToU8a } from '@polkadot/util';

import { MetadataVersioned } from './MetadataVersioned.js';

// magic + lowest supported version
const EMPTY_METADATA = new Uint8Array([0x6d, 0x65, 0x74, 0x61, 9]);

// magic u32 preceding the version id
const VERSION_IDX = EMPTY_METADATA.length - 1;

/** @internal */
function decodeU8a (registry: Registry, u8a: Uint8Array): MetadataVersioned | Uint8Array {
  if (u8a.length === 0) {
    return EMPTY_METADATA;
  } else if (u8a[VERSION_IDX] === 9) {
    // This is an f-ing hack as a follow-up to another ugly hack
    // https://github.com/polkadot-js/api/commit/a9211690be6b68ad6c6dad7852f1665cadcfa5b2
    // when we fail on V9, try to re-parse it as v10...
    try {
      return new MetadataVersioned(registry, u8a);
    } catch {
      u8a[VERSION_IDX] = 10;

      return u8a;
    }
  }

  return u8a;
}

/**
 * @name Metadata
 * @description
 * The versioned runtime metadata as a decoded structure
 */
export class Metadata extends MetadataVersioned {
  constructor (registry: Registry, value?: Uint8Array | HexString | Map<string, unknown> | Record<string, unknown>) {
    // const timeStart = performance.now()

    super(
      registry,
      isU8a(value) || isString(value)
        ? decodeU8a(registry, u8aToU8a(value))
        : value
    );

    // console.log('Metadata', `${(performance.now() - timeStart).toFixed(2)}ms`)
  }
}
