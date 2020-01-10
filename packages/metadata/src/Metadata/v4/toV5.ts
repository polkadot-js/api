// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataV4, MetadataV5, ModuleMetadataV5, StorageFunctionMetadataV4, StorageFunctionMetadataV5, StorageHasherV5 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import { assert } from '@polkadot/util';

import { createType, Option } from '@polkadot/types/codec';
import Text from '@polkadot/types/primitive/Text';

const hasherMap: Map<string, string> = new Map([
  ['blake2_128', 'Blake2_128'],
  ['blake2_256', 'Blake2_256'],
  ['twox_128', 'Twox128'],
  ['twox_256', 'Twox256'],
  ['twox_64_concat', 'Twox64Concat']
]);

function toStorageHasher (registry: Registry, text: Text): StorageHasherV5 {
  const mapped = hasherMap.get(text.toString());

  assert(mapped, `Invalid Storage hasher: ${text.toString()}`);

  return createType(registry, 'StorageHasherV5', mapped);
}

/**
 * Convert V4 StorageFunction to V5 StorageFunction
 */
function toV5StorageFunction (registry: Registry, storageFn: StorageFunctionMetadataV4): StorageFunctionMetadataV5 {
  const { documentation, fallback, modifier, name, type } = storageFn;
  const [newType, index] = type.isPlain
    ? [type.asPlain, 0]
    : type.isMap
      ? [type.asMap, 1]
      : [createType(registry, 'DoubleMapTypeV5', {
        hasher: type.asDoubleMap.hasher,
        key1: type.asDoubleMap.key1,
        key2: type.asDoubleMap.key2,
        value: type.asDoubleMap.value,
        key2Hasher: toStorageHasher(registry, type.asDoubleMap.key2Hasher)
      }), 2];

  return createType(registry, 'StorageFunctionMetadataV5', {
    documentation,
    fallback,
    name,
    modifier,
    type: createType(registry, 'StorageFunctionTypeV5', newType, index)
  });
}

/**
 * Convert from MetadataV4 to MetadataV5
 * See https://github.com/paritytech/substrate/pull/2836/files for details
 */
export default function toV5 (registry: Registry, { modules }: MetadataV4): MetadataV5 {
  return createType(registry, 'MetadataV5', {
    modules: modules.map(({ calls, events, name, prefix, storage }): ModuleMetadataV5 =>
      createType(registry, 'ModuleMetadataV5', {
        name,
        prefix,
        storage: storage.isSome
          ? new Option(
            registry,
            'Vec<StorageFunctionMetadataV5>',
            storage.unwrap().map((v): StorageFunctionMetadataV5 => toV5StorageFunction(registry, v))
          )
          : undefined,
        calls,
        events
      })
    )
  });
}
