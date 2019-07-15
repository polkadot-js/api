// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Option, Vector } from '../../codec';
import MetadataV3 from './Metadata';
import StorageHasher from '../../primitive/StorageHasher';
import MetadataV4 from '../v4';
import { StorageFunctionMetadata as StorageFunctionMetadataV3 } from '../v3/Storage';
import { DoubleMapType, MapType, StorageFunctionMetadata, StorageFunctionType } from '../v4/Storage';

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
 * Convert from MetadataV3 to MetadataV4
 * See https://github.com/paritytech/substrate/pull/2268 for details
 */
export default function toV4 (metadataV3: MetadataV3): MetadataV4 {
  return new MetadataV4({
    // FIXME, this needs typing, not any
    modules: metadataV3.modules.map((modul): any => {
      return {
        name: modul.name,
        prefix: modul.prefix,
        storage: modul.storage.isSome
          ? new Option(
            Vector.with(StorageFunctionMetadata),
            modul.storage.unwrap().map(toV4StorageFunction)
          )
          : undefined,
        calls: modul.calls,
        events: modul.events
      };
    })
  });
}
