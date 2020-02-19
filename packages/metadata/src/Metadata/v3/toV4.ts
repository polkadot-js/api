// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataV3, MetadataV4, ModuleMetadataV4, StorageFunctionMetadataV3, StorageFunctionMetadataV4 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import { createType } from '@polkadot/types/create';
import { Option } from '@polkadot/types/codec';

/** @internal */
function toV4StorageFunction (registry: Registry, storageFn: StorageFunctionMetadataV3): StorageFunctionMetadataV4 {
  const { documentation, fallback, modifier, name, type } = storageFn;

  // Convert the old type to the new type: there is one new field
  // called `hasher`, which we initialize to xxHash (the default in
  // v3).
  const [newType, index] = type.isPlain
    ? [type.asPlain, 0]
    : type.isMap
      ? [createType(registry, 'MapTypeV4', {
        hasher: createType(registry, 'StorageHasherV4', 'Twox128'),
        key: type.asMap.key,
        value: type.asMap.value,
        linked: type.asMap.linked
      }), 1]
      : [createType(registry, 'DoubleMapTypeV4', {
        hasher: createType(registry, 'StorageHasherV4', 'Twox128'),
        key1: type.asDoubleMap.key1,
        key2: type.asDoubleMap.key2,
        value: type.asDoubleMap.value,
        key2Hasher: type.asDoubleMap.key2Hasher
      }), 2];

  return createType(registry, 'StorageFunctionMetadataV4', {
    documentation,
    fallback,
    name,
    modifier,
    type: createType(registry, 'StorageFunctionTypeV4', newType, index)
  });
}

/** @internal */
export default function toV4 (registry: Registry, { modules }: MetadataV3): MetadataV4 {
  return createType(registry, 'MetadataV4', {
    modules: modules.map(({ calls, events, name, prefix, storage }): ModuleMetadataV4 =>
      createType(registry, 'ModuleMetadataV4', {
        calls,
        events,
        name,
        prefix,
        storage: storage.isSome
          ? new Option(
            registry,
            'Vec<StorageFunctionMetadataV4>',
            storage.unwrap().map((v): StorageFunctionMetadataV4 => toV4StorageFunction(registry, v))
          )
          : undefined
      })
    )
  });
}
