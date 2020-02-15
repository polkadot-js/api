// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '@polkadot/types/types';

import { bnToU8a, isHex, hexToU8a, u8aConcat } from '@polkadot/util';

import { MAGIC_NUMBER } from './MagicNumber';
import MetadataVersioned from './MetadataVersioned';

// first we try and parse using the versioned structure, if this does fail,
// we adjust with the magic number and a manual version and re-try. As soon as
// we remove support for V0, we will just do a new here
function decodeMetadata (registry: Registry, _value: Uint8Array | string = new Uint8Array()): MetadataVersioned {
  const value = isHex(_value)
    ? hexToU8a(_value)
    : _value;

  try {
    return new MetadataVersioned(registry, value);
  } catch (error) {
    if (error.message.indexOf('MagicNumber mismatch') === -1) {
      throw error;
    }
  }

  return new MetadataVersioned(
    registry,
    u8aConcat(
      bnToU8a(MAGIC_NUMBER), // manually add the magic number
      Uint8Array.from([0]), // add the version for the original
      value // the actual data as retrieved
    )
  );
}

/**
 * @name Metadata
 * @description
 * The versioned runtime metadata as a decoded structure
 */
export default class Metadata extends MetadataVersioned {
  constructor (registry: Registry, value?: Uint8Array | string) {
    super(registry, decodeMetadata(registry, value));
  }

  /**
   * @description Returns a hex string representation of the value. It is important to note that the output here
   * will not be equivalent to the hex as received from Substrate. Since the Metadata parsing sanitizes the types
   * for use in the JS environment, the re-created hex output will be functionally equivalent, but not match
   * byte-for-byte with what is received from Substrate.
   */
  public toHex (): string {
    return super.toHex();
  }
}
