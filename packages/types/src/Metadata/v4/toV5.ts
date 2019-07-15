// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Option, Vector } from '../../codec';
import Text from '../../primitive/Text';
import MetadataV4 from './Metadata';
import StorageHasher from '../../primitive/StorageHasher';
import MetadataV5 from '../v5';
import { StorageFunctionMetadata as StorageFunctionMetadataV4 } from '../v4/Storage';
import { DoubleMapType, StorageFunctionMetadata, StorageFunctionType } from '../v5/Storage';

/**
 * Convert V4 StorageFunction to V5 StorageFunction
 */
function toV5StorageFunction (storageFn: StorageFunctionMetadataV4): StorageFunctionMetadata {
  const { documentation, fallback, modifier, name, type } = storageFn;

  function toStorageHasher (text: Text): StorageHasher {
    switch (text.toString()) {
      case 'blake2_128':
        return new StorageHasher('Blake2_128');
      case 'blake2_256':
        return new StorageHasher('Blake2_256');
      case 'twox_128':
        return new StorageHasher('Twox128');
      case 'twox_256':
        return new StorageHasher('Twox256');
      case 'twox_64_concat':
        return new StorageHasher('Twox64Concat');
      default:
        throw new Error(`Invalid Storage hasher: ${text.toString()}`);
    }
  }

  const [newType, index] = type.isPlainType
    ? [type, 0]
    : type.isMap
      ? [type.asMap, 1]
      : [new DoubleMapType({
        hasher: type.asDoubleMap.hasher,
        key1: type.asDoubleMap.key1,
        key2: type.asDoubleMap.key2,
        value: type.asDoubleMap.value,
        key2Hasher: toStorageHasher(type.asDoubleMap.key2Hasher)
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
    // FIXME, this needs typing, not any
    modules: metadataV4.modules.map((modul): any => {
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
