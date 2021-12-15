// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecRegistry } from '@polkadot/types-codec/types';
import type { HexString } from '@polkadot/util/types';

import { isHex, isU8a, u8aToU8a } from '@polkadot/util';

import { MetadataVersioned } from './MetadataVersioned';

// magic u32 preceding the version id
const VERSION_IDX = 4;

// magic + lowest supported version
const EMPTY_METADATA = new Uint8Array([0x6d, 0x65, 0x74, 0x61, 9]);

function toU8a (value: Uint8Array | HexString): Uint8Array {
  return isHex(value)
    ? toU8a(u8aToU8a(value))
    : value.length === 0
      ? EMPTY_METADATA
      : value;
}

function decodeU8a (registry: CodecRegistry, value: Uint8Array): MetadataVersioned {
  try {
    return new MetadataVersioned(registry, value);
  } catch (error) {
    // This is an f-ing hack as a follow-up to another ugly hack
    // https://github.com/polkadot-js/api/commit/a9211690be6b68ad6c6dad7852f1665cadcfa5b2
    // when we fail on V9, try to re-parse it as v10... yes... HACK
    if (value[VERSION_IDX] === 9) {
      value[VERSION_IDX] = 10;

      return decodeU8a(registry, value);
    }

    throw error;
  }
}

/**
 * @name Metadata
 * @description
 * The versioned runtime metadata as a decoded structure
 */
export class Metadata extends MetadataVersioned {
  constructor (registry: CodecRegistry, value?: Uint8Array | HexString | Map<string, unknown> | Record<string, unknown>) {
    super(
      registry,
      isU8a(value) || isHex(value)
        ? decodeU8a(registry, toU8a(value))
        : new MetadataVersioned(registry, value)
    );
  }
}
