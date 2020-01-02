// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '@polkadot/types/types';

import { bnToU8a, isHex, hexToU8a, u8aConcat } from '@polkadot/util';

import { MAGIC_NUMBER } from './MagicNumber';
import MetadataVersioned from './MetadataVersioned';

/**
 * @name Metadata
 * @description
 * The versioned runtime metadata as a decoded structure
 */
export default class Metadata extends MetadataVersioned {
  constructor (registry: Registry, value?: Uint8Array | string) {
    super(registry, Metadata.decodeMetadata(registry, value));
  }

  // first we try and parse using the versioned structure, if this does fail,
  // we adjust with the magic number and a manual version and re-try. As soon as
  // we remove support for V0, we will just do a new here
  private static decodeMetadata (registry: Registry, _value: Uint8Array | string = new Uint8Array()): MetadataVersioned {
    /**
     * HACK 01.02.2020
     * There was a fk-up in the metadata upgrade process: Kusama's metadata got
     * updated to a non-backward-compatible way, but the metadata version
     * stayed at v9. Then v10 was merged in Substrate but not Kusama. Here,
     * we're just saying that if it's a v9 metadata, decode as v10.
     */
    if (isHex(_value) && _value.startsWith('0x6d65746109')) {
      return Metadata.decodeMetadata(registry, _value.replace('0x6d65746109', '0x6d6574610a'));
    }

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
}
