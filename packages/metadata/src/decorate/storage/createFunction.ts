// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { StorageEntryMetadataLatest } from '@polkadot/types/interfaces/metadata';
import type { StorageEntry } from '@polkadot/types/primitive/types';
import type { Codec, Registry } from '@polkadot/types/types';

import BN from 'bn.js';

import { Raw } from '@polkadot/types/codec';
import { StorageKey } from '@polkadot/types/primitive';
import { assert, compactAddLength, compactStripLength, isFunction, isNull, isUndefined, stringLowerFirst, u8aConcat, u8aToU8a } from '@polkadot/util';
import { xxhashAsU8a } from '@polkadot/util-crypto';

import { getHasher, HasherFunction } from './getHasher';

export interface CreateItemOptions {
  key?: string;
  skipHashing?: boolean;
}

export interface CreateItemFn {
  meta: StorageEntryMetadataLatest;
  method: string;
  prefix: string;
  section: string;
}

interface IterFn {
  (): Raw;
  meta: StorageEntryMetadataLatest;
}

type CreateArgType = boolean | string | number | null | BN | BigInt | Uint8Array | Codec;

type U8aHasher = (input: Uint8Array) => Uint8Array;

// get the hashers, the base (and  in the case of DoubleMap), the second key
/** @internal */
function getHashers ({ meta: { type } }: CreateItemFn): [HasherFunction, HasherFunction?] {
  if (type.isDoubleMap) {
    return [
      getHasher(type.asDoubleMap.hasher),
      getHasher(type.asDoubleMap.key2Hasher)
    ];
  } else if (type.isMap) {
    return [getHasher(type.asMap.hasher)];
  }

  // the default
  return [getHasher()];
}

// create a base prefixed key
/** @internal */
function createPrefixedKey ({ method, prefix }: CreateItemFn): Uint8Array {
  return u8aConcat(xxhashAsU8a(prefix, 128), xxhashAsU8a(method, 128));
}

// eslint-disable-next-line @typescript-eslint/ban-types
function createNKeyMap (registry: Registry, itemFn: CreateItemFn, keys: (string | String)[], hashers: (U8aHasher | undefined)[], args: (CreateArgType | undefined)[]): Uint8Array {
  assert(args.length === keys.length, () => `${(itemFn.meta.name || 'unknown').toString()} requires ${keys.length} arguments`);
  assert(hashers.length === keys.length, () => `${keys.length} hashing functions should be supplied to ${(itemFn.meta.name || 'unknown').toString()}`);

  // as per createKey, always add the length prefix (underlying it is Bytes)
  return compactAddLength(
    u8aConcat(
      createPrefixedKey(itemFn),
      ...keys.map((type, index): Uint8Array => {
        const arg = args[index];
        const hasher = hashers[index];

        assert(isUndefined(arg) || isNull(arg), () => `${(itemFn.meta.name || 'unknown').toString()} has a null/undefined value at position ${index}`);
        assert(isFunction(hasher), () => `${(itemFn.meta.name || 'unknown').toString()} has an non-function hasher at position ${index}`);

        return hasher(registry.createType(type.toString() as 'Raw', arg).toU8a());
      })
    )
  );
}

// create a key for a DoubleMap type
/** @internal */
function createKeyDoubleMap (registry: Registry, itemFn: CreateItemFn, hashers: [U8aHasher, U8aHasher?], args: (CreateArgType | undefined)[]): Uint8Array {
  const map = itemFn.meta.type.asDoubleMap;

  return createNKeyMap(registry, itemFn, [map.key1, map.key2], hashers, args);
}

// attach the metadata to expand to a StorageFunction
/** @internal */
function expandWithMeta ({ meta, method, prefix, section }: CreateItemFn, _storageFn: (...args: (CreateArgType | undefined)[]) => Uint8Array): StorageEntry {
  const storageFn = _storageFn as StorageEntry;

  storageFn.meta = meta;
  storageFn.method = stringLowerFirst(method);
  storageFn.prefix = prefix;
  storageFn.section = section;

  // explicitly add the actual method in the toJSON, this gets used to determine caching and without it
  // instances (e.g. collective) will not work since it is only matched on param meta
  storageFn.toJSON = (): any => ({
    ...(meta.toJSON() as Record<string, unknown>),
    storage: { method, prefix, section }
  });

  return storageFn;
}

/** @internal */
function extendHeadMeta (registry: Registry, { meta: { documentation, name, type }, section }: CreateItemFn, { method }: StorageEntry, iterFn: (arg?: any) => Raw): (arg?: any) => StorageKey {
  const outputType = type.isMap
    ? type.asMap.key.toString()
    : type.asDoubleMap.key1.toString();

  // metadata with a fallback value using the type of the key, the normal
  // meta fallback only applies to actual entry values, create one for head
  (iterFn as IterFn).meta = registry.createType('StorageEntryMetadataLatest', {
    documentation,
    fallback: registry.createType('Bytes', registry.createType(outputType as 'Raw').toHex()),
    modifier: registry.createType('StorageEntryModifierLatest', 1), // required
    name,
    type: registry.createType('StorageEntryTypeLatest', registry.createType('Type', type.isMap ? type.asMap.key : type.asDoubleMap.key1), 0)
  });

  const prefixKey = registry.createType('StorageKey', iterFn, { method, section });

  return (arg?: any) =>
    !isUndefined(arg) && !isNull(arg)
      ? registry.createType('StorageKey', iterFn(arg), { method, section })
      : prefixKey;
}

// attach the full list hashing for prefixed maps
/** @internal */
function extendPrefixedMap (registry: Registry, itemFn: CreateItemFn, storageFn: StorageEntry): StorageEntry {
  const { meta: { type } } = itemFn;

  storageFn.iterKey = extendHeadMeta(registry, itemFn, storageFn, (arg?: any): Raw => {
    assert(type.isDoubleMap || isUndefined(arg), 'Filtering arguments for keys/entries are only valid on double maps');

    return new Raw(
      registry,
      type.isDoubleMap && !isUndefined(arg) && !isNull(arg)
        ? u8aConcat(
          createPrefixedKey(itemFn),
          getHasher(type.asDoubleMap.hasher)(
            registry.createType(type.asDoubleMap.key1.toString() as 'Raw', arg).toU8a()
          )
        )
        : createPrefixedKey(itemFn)
    );
  });

  return storageFn;
}

/** @internal */
export function createFunction (registry: Registry, itemFn: CreateItemFn, options: CreateItemOptions): StorageEntry {
  const { meta: { type } } = itemFn;
  const [hasher, key2Hasher] = getHashers(itemFn);

  // Can only have zero or one argument:
  //   - storage.system.account(address)
  //   - storage.timestamp.blockPeriod()
  // For doublemap queries the params is passed in as an tuple, [key1, key2]
  const storageFn = expandWithMeta(itemFn, (...args: (CreateArgType | undefined)[]): Uint8Array =>
    type.isDoubleMap
      ? createKeyDoubleMap(registry, itemFn, [hasher, key2Hasher], args)
      : itemFn.meta.type.isMap
        ? createNKeyMap(registry, itemFn, [itemFn.meta.type.asMap.key], [hasher], args)
        : options.skipHashing
          ? compactAddLength(u8aToU8a(options.key))
          : createNKeyMap(registry, itemFn, [], [], args)
  );

  if (type.isMap || type.isDoubleMap) {
    extendPrefixedMap(registry, itemFn, storageFn);
  }

  storageFn.keyPrefix = (arg?: any): Uint8Array =>
    (storageFn.iterKey && storageFn.iterKey(arg)) || compactStripLength(storageFn())[1];

  return storageFn;
}
