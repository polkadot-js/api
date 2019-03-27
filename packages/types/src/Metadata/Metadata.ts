// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isHex, hexToU8a } from '@polkadot/util';

import MetadataVersioned from './MetadataVersioned';

/**
 * @name Metadata
 * @description
 * The versioned runtime metadata as a decoded structure
 */
export default class Metadata extends MetadataVersioned {
  constructor (value?: Uint8Array | string) {
    super(Metadata.decodeMetadata(value));
  }

  private static decodeMetadata (_value: Uint8Array | string = new Uint8Array()): MetadataVersioned {
    const value = isHex(_value)
      ? hexToU8a(_value)
      : _value;

    return new MetadataVersioned(value);
  }
}
