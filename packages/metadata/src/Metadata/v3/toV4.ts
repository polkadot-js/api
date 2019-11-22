// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '@polkadot/types/types';

import StorageHasher from '@polkadot/types/primitive/StorageHasher';
import { createType, Option, Vec } from '@polkadot/types/codec';

import MetadataV3 from './Metadata';
import MetadataV4 from '../v4';
import { ModuleMetadataV4 } from '../v4/Metadata';
import { StorageFunctionMetadata, StorageFunctionType } from '../v4/Storage';
import { StorageFunctionMetadata as StorageFunctionMetadataV3 } from './Storage';

/**
 * Convert V3 StorageFunction to V4 StorageFunction
 */
function toV4StorageFunction (registry: Registry, storageFn: StorageFunctionMetadataV3): StorageFunctionMetadata {
  const { documentation, fallback, modifier, name, type } = storageFn;

  // Convert the old type to the new type: there is one new field
  // called `hasher`, which we initialize to xxHash (the default in
  // v3).
  const [newType, index] = type.isPlain
    ? [type.asPlain, 0]
    : type.isMap
      ? [createType(registry, 'MapTypeV4', {
        hasher: new StorageHasher(registry, 'Twox128'),
        key: type.asMap.key,
        value: type.asMap.value,
        linked: type.asMap.linked
      }), 1]
      : [createType(registry, 'DoubleMapTypeV4', {
        hasher: new StorageHasher(registry, 'Twox128'),
        key1: type.asDoubleMap.key1,
        key2: type.asDoubleMap.key2,
        value: type.asDoubleMap.value,
        key2Hasher: type.asDoubleMap.key2Hasher
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
 * Convert from MetadataV3 to MetadataV4
 * See https://github.com/paritytech/substrate/pull/2268 for details
 */
export default function toV4 (registry: Registry, { modules }: MetadataV3): MetadataV4 {
  return new MetadataV4(registry, {
    modules: modules.map(({ calls, events, name, prefix, storage }): ModuleMetadataV4 =>
      new ModuleMetadataV4(registry, {
        calls,
        events,
        name,
        prefix,
        storage: storage.isSome
          ? new Option(
            registry,
            Vec.with(StorageFunctionMetadata),
            storage.unwrap().map((v): StorageFunctionMetadata => toV4StorageFunction(registry, v))
          )
          : undefined
      })
    )
  });
}
