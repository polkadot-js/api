// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '@polkadot/types/types';

import { assert } from '@polkadot/util';

import { createType, Option, Vec } from '@polkadot/types/codec';
import StorageHasher from '@polkadot/types/primitive/StorageHasher';
import Text from '@polkadot/types/primitive/Text';
import MetadataV4 from './Metadata';
import MetadataV5 from '../v5';
import { ModuleMetadataV5 } from '../v5/Metadata';
import { StorageFunctionMetadata, StorageFunctionType } from '../v5/Storage';
import { StorageFunctionMetadata as StorageFunctionMetadataV4 } from './Storage';

const hasherMap: Map<string, string> = new Map([
  ['blake2_128', 'Blake2_128'],
  ['blake2_256', 'Blake2_256'],
  ['twox_128', 'Twox128'],
  ['twox_256', 'Twox256'],
  ['twox_64_concat', 'Twox64Concat']
]);

function toStorageHasher (registry: Registry, text: Text): StorageHasher {
  const mapped = hasherMap.get(text.toString());

  assert(mapped, `Invalid Storage hasher: ${text.toString()}`);

  return new StorageHasher(registry, mapped);
}

/**
 * Convert V4 StorageFunction to V5 StorageFunction
 */
function toV5StorageFunction (registry: Registry, storageFn: StorageFunctionMetadataV4): StorageFunctionMetadata {
  const { documentation, fallback, modifier, name, type } = storageFn;
  const [newType, index] = type.isPlain
    ? [type, 0]
    : type.isMap
      ? [type.asMap, 1]
      : [createType(registry, 'DoubleMapTypeV5', {
        hasher: type.asDoubleMap.hasher,
        key1: type.asDoubleMap.key1,
        key2: type.asDoubleMap.key2,
        value: type.asDoubleMap.value,
        key2Hasher: toStorageHasher(registry, type.asDoubleMap.key2Hasher)
      }), 2];

  return new StorageFunctionMetadata(registry, {
    documentation,
    fallback,
    name,
    modifier,
    type: new StorageFunctionType(registry, newType, index)
  });
}

/**
 * Convert from MetadataV4 to MetadataV5
 * See https://github.com/paritytech/substrate/pull/2836/files for details
 */
export default function toV5 (registry: Registry, { modules }: MetadataV4): MetadataV5 {
  return new MetadataV5(registry, {
    modules: modules.map(({ calls, events, name, prefix, storage }): ModuleMetadataV5 =>
      new ModuleMetadataV5(registry, {
        name,
        prefix,
        storage: storage.isSome
          ? new Option(
            registry,
            Vec.with(StorageFunctionMetadata),
            storage.unwrap().map((v): StorageFunctionMetadata => toV5StorageFunction(registry, v))
          )
          : undefined,
        calls,
        events
      })
    )
  });
}
