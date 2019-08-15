// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert } from '@polkadot/util';

import { Option, Vec } from '../../codec';
import Text from '../../primitive/Text';
import MetadataV4 from './Metadata';
import StorageHasher from '../../primitive/StorageHasher';
import MetadataV5 from '../v5';
import { ModuleMetadata as ModuleMetadataV5 } from '../v5/Metadata';
import { DoubleMapType, StorageFunctionMetadata, StorageFunctionType } from '../v5/Storage';
import { StorageFunctionMetadata as StorageFunctionMetadataV4 } from './Storage';

const hasherMap: Map<string, string> = new Map([
  ['blake2_128', 'Blake2_128'],
  ['blake2_256', 'Blake2_256'],
  ['twox_128', 'Twox128'],
  ['twox_256', 'Twox256'],
  ['twox_64_concat', 'Twox64Concat']
]);

function toStorageHasher (text: Text): StorageHasher {
  const mapped = hasherMap.get(text.toString());

  assert(mapped, `Invalid Storage hasher: ${text.toString()}`);

  return new StorageHasher(mapped);
}

/**
 * Convert V4 StorageFunction to V5 StorageFunction
 */
function toV5StorageFunction (storageFn: StorageFunctionMetadataV4): StorageFunctionMetadata {
  const { documentation, fallback, modifier, name, type } = storageFn;
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
    documentation,
    fallback,
    name,
    modifier,
    type: new StorageFunctionType(newType, index)
  });
}

/**
 * Convert from MetadataV4 to MetadataV5
 * See https://github.com/paritytech/substrate/pull/2836/files for details
 */
export default function toV5 (metadataV4: MetadataV4): MetadataV5 {
  return new MetadataV5({
    modules: metadataV4.modules.map(({ calls, events, name, prefix, storage }): ModuleMetadataV5 =>
      new ModuleMetadataV5({
        name,
        prefix,
        storage: storage.isSome
          ? new Option(Vec.with(StorageFunctionMetadata), storage.unwrap().map(toV5StorageFunction))
          : undefined,
        calls,
        events
      })
    )
  });
}
