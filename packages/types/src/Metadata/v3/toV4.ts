// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createType, Option, Vec } from '../../codec';
import MetadataV3 from './Metadata';
import StorageHasher from '../../primitive/StorageHasher';
import MetadataV4 from '../v4';
import { ModuleMetadataV4 } from '../v4/Metadata';
import { StorageFunctionMetadata, StorageFunctionType } from '../v4/Storage';
import { StorageFunctionMetadata as StorageFunctionMetadataV3 } from './Storage';

/**
 * Convert V3 StorageFunction to V4 StorageFunction
 */
function toV4StorageFunction (storageFn: StorageFunctionMetadataV3): StorageFunctionMetadata {
  const { documentation, fallback, modifier, name, type } = storageFn;

  // Convert the old type to the new type: there is one new field
  // called `hasher`, which we initialize to xxHash (the default in
  // v3).
  const [newType, index] = type.isPlainType
    ? [type, 0]
    : type.isMap
      ? [createType('MapTypeV4', {
        hasher: new StorageHasher('Twox128'),
        key: type.asMap.key,
        value: type.asMap.value,
        linked: type.asMap.linked
      }), 1]
      : [createType('DoubleMapTypeV4', {
        hasher: new StorageHasher('Twox128'),
        key1: type.asDoubleMap.key1,
        key2: type.asDoubleMap.key2,
        value: type.asDoubleMap.value,
        key2Hasher: type.asDoubleMap.key2Hasher
      }), 2];

  return new StorageFunctionMetadata({
    documentation,
    fallback,
    name,
    modifier,
    type: new StorageFunctionType(newType, index)
  });
}

/**
 * Convert from MetadataV3 to MetadataV4
 * See https://github.com/paritytech/substrate/pull/2268 for details
 */
export default function toV4 ({ modules }: MetadataV3): MetadataV4 {
  return new MetadataV4({
    modules: modules.map(({ calls, events, name, prefix, storage }): ModuleMetadataV4 =>
      new ModuleMetadataV4({
        calls,
        events,
        name,
        prefix,
        storage: storage.isSome
          ? new Option(Vec.with(StorageFunctionMetadata), storage.unwrap().map(toV4StorageFunction))
          : undefined
      })
    )
  });
}
