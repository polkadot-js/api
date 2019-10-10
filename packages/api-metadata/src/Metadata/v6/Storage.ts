// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageFunctionMetadata, StorageFunctionMetadataValue, StorageFunctionType } from '../v5/Storage';

// Re-export classes that haven't changed between V5 and V6
export {
  StorageFunctionMetadata as StorageEntryMetadata,
  StorageFunctionMetadataValue as StorageEntryMetadataValue,
  StorageFunctionType as StorageEntryType
};
