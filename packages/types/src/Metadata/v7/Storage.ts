// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import Text from '../../primitive/Text';

import { DoubleMapType, MapType, PlainType, StorageEntryMetadata, StorageEntryMetadataValue, StorageEntryModifier, StorageEntryType } from '../v6/Storage';

// Re-export classes that haven't changed between V6 and V7
export {
  MapType,
  PlainType,
  DoubleMapType,
  StorageEntryMetadata,
  StorageEntryMetadataValue,
  StorageEntryModifier,
  StorageEntryType
};

export class StorageMetadata extends Struct {
  public constructor (value?: any) {
    super({
      prefix: Text,
      // NOTE renamed to items from entries (since Struct already has entries from Map)
      items: Vec.with(StorageEntryMetadata)
    }, value);
  }

  /**
   * @description the storage entries
   */
  public get items (): Vec<StorageEntryMetadata> {
    return this.get('items') as Vec<StorageEntryMetadata>;
  }

  /**
   * @description the prefix for this module
   */
  public get prefix (): Text {
    return this.get('prefix') as Text;
  }
}
