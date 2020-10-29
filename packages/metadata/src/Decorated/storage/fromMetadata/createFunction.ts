// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { StorageEntryMetadataLatest } from '@polkadot/types/interfaces/metadata';
import { Codec, Registry } from '@polkadot/types/types';

import BN from 'bn.js';
import { Compact, Raw } from '@polkadot/types/codec';
import { createTypeUnsafe } from '@polkadot/types/create';
import StorageKey, { StorageEntry } from '@polkadot/types/primitive/StorageKey';
import { assert, compactStripLength, isNull, isUndefined, stringLowerFirst, u8aConcat } from '@polkadot/util';
import { xxhashAsU8a } from '@polkadot/util-crypto';

import getHasher, { HasherFunction } from './getHasher';

export interface CreateItemOptions {
  key?: string;
  metaVersion: number;
  skipHashing?: boolean; // We don't hash the keys defined in ./substrate.ts
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

type CreateArgType = boolean | string | number | null | BN | Uint8Array | Codec;

const EMPTY_U8A = new Uint8Array([]);
const NULL_HASHER = (value: Uint8Array): Uint8Array => value;

// with the prefix, method & options, create both the string & raw keys
/** @internal */
function expandKey ({ method, prefix }: CreateItemFn, options: CreateItemOptions): string {
  return options.key
    ? options.key
    : `${prefix} ${method}`;
}

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

// create a key for a DoubleMap type
/** @internal */
function createKeyDoubleMap (registry: Registry, itemFn: CreateItemFn, stringKey: string, args: [CreateArgType, CreateArgType], [hasher1, hasher2]: [HasherFunction, HasherFunction?]): Uint8Array {
  const { meta: { name, type } } = itemFn;

  // since we are passing an almost-unknown through, trust, but verify
  assert(Array.isArray(args) && !isUndefined(args[0]) && !isNull(args[0]) && !isUndefined(args[1]) && !isNull(args[1]), `${(name || 'unknown').toString()} is a DoubleMap and requires two arguments`);

  // if this fails, we have bigger issues
  assert(!isUndefined(hasher2), '2 hashing functions should be defined for DoubleMaps');

  const [key1, key2] = args;
  const map = type.asDoubleMap;
  const val1 = createTypeUnsafe(registry, map.key1.toString(), [key1]).toU8a();
  const val2 = createTypeUnsafe(registry, map.key2.toString(), [key2]).toU8a();

  // as per createKey, always add the length prefix (underlying it is Bytes)
  return Compact.addLengthPrefix(u8aConcat(
    createPrefixedKey(itemFn),
    hasher1(val1),
    hasher2(val2)
  ));
}

// create a key for either a map or a plain value
/** @internal */
function createKey (registry: Registry, itemFn: CreateItemFn, stringKey: string, arg: CreateArgType, hasher: (value: Uint8Array) => Uint8Array): Uint8Array {
  const { meta: { name, type } } = itemFn;
  let param: Uint8Array = EMPTY_U8A;

  if (type.isMap) {
    const map = type.asMap;

    assert(!isUndefined(arg) && !isNull(arg), `${name.toString()} is a Map and requires one argument`);

    param = createTypeUnsafe(registry, map.key.toString(), [arg]).toU8a();
  }

  // StorageKey is a Bytes, so is length-prefixed
  return Compact.addLengthPrefix(u8aConcat(
    createPrefixedKey(itemFn),
    param.length
      ? hasher(param)
      : EMPTY_U8A
  ));
}

// attach the metadata to expand to a StorageFunction
/** @internal */
function expandWithMeta ({ meta, method, prefix, section }: CreateItemFn, storageFn: StorageEntry): StorageEntry {
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
    fallback: registry.createType('Bytes', createTypeUnsafe(registry, outputType).toHex()),
    modifier: registry.createType('StorageEntryModifierLatest', 1), // required
    name,
    type: registry.createType('StorageEntryTypeLatest', registry.createType('Type', type.isMap ? type.asMap.key : type.asDoubleMap.key1), 0)
  });

  const prefixKey = registry.createType('StorageKey', iterFn, { method, section });

  return (arg?: any): StorageKey =>
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

    return type.isDoubleMap && !isUndefined(arg) && !isNull(arg)
      ? new Raw(registry, u8aConcat(createPrefixedKey(itemFn), getHasher(type.asDoubleMap.hasher)(registry.createType(type.asDoubleMap.key1.toString() as 'Raw', arg).toU8a())))
      : new Raw(registry, createPrefixedKey(itemFn));
  });

  return storageFn;
}

// attach the full list hashing for double maps
/** @internal */
function extendDoubleMap (registry: Registry, itemFn: CreateItemFn, storageFn: StorageEntry): StorageEntry {
  return extendPrefixedMap(registry, itemFn, storageFn);
}

/** @internal */
export default function createFunction (registry: Registry, itemFn: CreateItemFn, options: CreateItemOptions): StorageEntry {
  const { meta: { type } } = itemFn;
  const stringKey = expandKey(itemFn, options);
  const [hasher, key2Hasher] = getHashers(itemFn);

  // Can only have zero or one argument:
  //   - storage.system.account(address)
  //   - storage.timestamp.blockPeriod()
  // For doublemap queries the params is passed in as an tuple, [key1, key2]
  const _storageFn = (arg?: CreateArgType | [CreateArgType?, CreateArgType?]): Uint8Array =>
    type.isDoubleMap
      ? createKeyDoubleMap(registry, itemFn, stringKey, arg as [CreateArgType, CreateArgType], [hasher, key2Hasher])
      : createKey(registry, itemFn, stringKey, arg as CreateArgType, options.skipHashing ? NULL_HASHER : hasher);

  const storageFn = expandWithMeta(itemFn, _storageFn as StorageEntry);

  if (type.isMap) {
    extendPrefixedMap(registry, itemFn, storageFn);
  } else if (type.isDoubleMap) {
    extendDoubleMap(registry, itemFn, storageFn);
  }

  storageFn.keyPrefix = (arg?: any): Uint8Array =>
    (storageFn.iterKey && storageFn.iterKey(arg)) || compactStripLength(storageFn())[1];

  return storageFn;
}
