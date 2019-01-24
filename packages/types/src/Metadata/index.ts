// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { u8aConcat, u8aToU8a } from '@polkadot/util';

import { MAGIC_NUMBER } from './MagicNumber';
import MetadataVersioned from './MetadataVersioned';

/**
 * @name Metadata
 * @description
 * The versioned runtime metadata as a decoded structure
 */
export default class Metadata extends MetadataVersioned {
  constructor (value?: any) {
    super(Metadata.decodeMetadata(value));
  }

  // first we try and parse using the versioned structure, if this does fail,
  // we adjust with the magic number and a manual version and re-try. As soon as
  // we remove support for V0, we will just do a new here
  private static decodeMetadata (value: Uint8Array | string = new Uint8Array()): MetadataVersioned {
    const u8a = u8aToU8a(value);

    try {
      return new MetadataVersioned(u8a);
    } catch (error) {
      console.error('Failed parsing metadata as versioned, falling back to unversioned');
    }

    return new MetadataVersioned(
      u8aConcat(
        MAGIC_NUMBER.toU8a(), // manually add the magic number
        Uint8Array.from([0]), // add the version for the original
        u8a // the actual data as retrieved
      )
    );
  }
}
