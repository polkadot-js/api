// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Option, Vector } from '../../codec';
import MetadataV4 from './Metadata';
import StorageHasher from '../../primitive/StorageHasher';
import MetadataV5 from '../v5';
import { StorageFunctionMetadata as StorageFunctionMetadataV3 } from '../v3/Storage';
import { DoubleMapType, MapType, StorageFunctionMetadata, StorageFunctionType } from '../v4/Storage';

/**
 * Convert V4 StorageFunction to V5 StorageFunction
 */
function toV5StorageFunction (storageFn: StorageFunctionMetadataV3): StorageFunctionMetadata {
  const { documentation, fallback, modifier, name, type } = storageFn;

  // Convert the old type to the new type: there is one new field
  // called `hasher`, which we initialize to xxHash (the default in
  // v3).
  const [newType, index] = type.isPlainType
    ? [type, 0]
    : type.isMap
      ? [new MapType({
        hasher: new StorageHasher('Twox128'),
        key: type.asMap.key,
        value: type.asMap.value,
        isLinked: type.asMap.isLinked
      }), 1]
      : [new DoubleMapType({
        hasher: new StorageHasher('Twox128'),
        key1: type.asDoubleMap.key1,
        key2: type.asDoubleMap.key2,
        value: type.asDoubleMap.value,
        key2Hasher: type.asDoubleMap.key2Hasher
      }), 2];

  return new StorageFunctionMetadata({
    name: name,
    modifier: modifier,
    type: new StorageFunctionType(newType, index),
    fallback: fallback,
    documentation: documentation
  });
}

/**
 * Convert from MetadataV4 to MetadataV5
 * See https://github.com/paritytech/substrate/pull/2836/files for details
 */
export default function toV5 (metadataV4: MetadataV4): MetadataV5 {
  return new MetadataV5({
    modules: metadataV4.modules.map((modul) => {
      return {
        name: modul.name,
        prefix: modul.prefix,
        storage: modul.storage.isSome
          ? new Option(
            Vector.with(StorageFunctionMetadata),
            modul.storage.unwrap().map(toV5StorageFunction)
          )
          : undefined,
        calls: modul.calls,
        events: modul.events
      };
    })
  });
}
