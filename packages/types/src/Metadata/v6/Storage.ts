// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DoubleMapType, MapType, PlainType, StorageFunctionMetadata, StorageFunctionMetadataValue, StorageFunctionModifier, StorageFunctionType } from '../v5/Storage';

// Re-export classes that haven't changed between V5 and V6
export {
  MapType,
  PlainType,
  DoubleMapType,
  StorageFunctionMetadata as StorageEntryMetadata,
  StorageFunctionMetadataValue as StorageEntryMetadataValue,
  StorageFunctionModifier as StorageEntryModifier,
  StorageFunctionType as StorageEntryType
};
