// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageEntryMetadataLatest } from '@polkadot/types/interfaces/metadata';
import { Codec, Registry } from '@polkadot/types/types';

import BN from 'bn.js';
import { Compact, U8a, createType, createTypeUnsafe } from '@polkadot/types/codec';
import StorageKey, { StorageEntry } from '@polkadot/types/primitive/StorageKey';
import { assert, isNull, isUndefined, stringLowerFirst, stringToU8a, u8aConcat } from '@polkadot/util';
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
  (): U8a;
  meta: StorageEntryMetadataLatest;
}

type CreateArgType = boolean | string | number | null | BN | Uint8Array | Codec;

const EMPTY_U8A = new Uint8Array([]);
const NULL_HASHER = (value: Uint8Array): Uint8Array => value;

// with the prefix, method & options, create both the string & raw keys
function expandKey ({ method, prefix }: CreateItemFn, options: CreateItemOptions): string {
  return options.key
    ? options.key
    : `${prefix} ${method}`;
}

// get the hashers, the base (and  in the case of DoubleMap), the second key
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
function createPrefixedKey ({ method, prefix }: CreateItemFn): Uint8Array {
  return u8aConcat(xxhashAsU8a(prefix, 128), xxhashAsU8a(method, 128));
}

// create a key for a DoubleMap type
function createKeyDoubleMap (registry: Registry, itemFn: CreateItemFn, stringKey: string, args: [CreateArgType, CreateArgType], [hasher1, hasher2]: [HasherFunction, HasherFunction?], metaVersion: number): Uint8Array {
  const { meta: { name, type } } = itemFn;

  // since we are passing an almost-unknown through, trust, but verify
  assert(
    Array.isArray(args) && !isUndefined(args[0]) && !isNull(args[0]) && !isUndefined(args[1]) && !isNull(args[1]),
    `${name} is a DoubleMap and requires two arguments`
  );

  // if this fails, we have bigger issues
  assert(!isUndefined(hasher2), '2 hashing functions should be defined for DoubleMaps');

  const [key1, key2] = args;
  const map = type.asDoubleMap;
  const val1 = createTypeUnsafe(registry, map.key1.toString(), [key1]).toU8a(true);
  const val2 = createTypeUnsafe(registry, map.key2.toString(), [key2]).toU8a(true);

  // as per createKey, always add the length prefix (underlying it is Bytes)
  return Compact.addLengthPrefix(
    metaVersion <= 8
      ? u8aConcat(
        hasher1(u8aConcat(stringToU8a(stringKey), val1)),
        hasher2(val2)
      )
      : u8aConcat(
        createPrefixedKey(itemFn),
        hasher1(val1),
        hasher2(val2)
      )
  );
}

// create a key for either a map or a plain value
function createKey (registry: Registry, itemFn: CreateItemFn, stringKey: string, arg: CreateArgType, hasher: (value: Uint8Array) => Uint8Array, metaVersion: number): Uint8Array {
  const { meta: { name, type } } = itemFn;
  let key: Uint8Array | undefined;
  let param: Uint8Array = EMPTY_U8A;

  if (type.isMap) {
    const map = type.asMap;

    assert(!isUndefined(arg) && !isNull(arg), `${name} is a Map and requires one argument`);

    param = createTypeUnsafe(registry, map.key.toString(), [arg]).toU8a();

    // prefix maps are using prefixes to optimize the trie, so the key generation are
    // done differently where the prefix/method are hashed separately with only the
    // parameter for the key being attached via the hasher
    if (map.kind.isPrefixedMap) {
      key = u8aConcat(createPrefixedKey(itemFn), hasher(param));
    }
  }

  // StorageKey is a Bytes, so is length-prefixed
  return Compact.addLengthPrefix(key || (
    metaVersion <= 8
      ? hasher(u8aConcat(stringToU8a(stringKey), param))
      : u8aConcat(createPrefixedKey(itemFn), param.length ? hasher(param) : EMPTY_U8A)
  ));
}

// attach the metadata to expand to a StorageFunction
function expandWithMeta ({ meta, method, prefix, section }: CreateItemFn, storageFn: StorageEntry): StorageEntry {
  storageFn.meta = meta;
  storageFn.method = stringLowerFirst(method);
  storageFn.prefix = prefix;
  storageFn.section = section;

  // explicitly add the actual method in the toJSON, this gets used to determine caching and without it
  // instances (e.g. collective) will not work since it is only matched on param meta
  storageFn.toJSON = (): any => ({
    ...(meta.toJSON() as any),
    storage: { method, prefix, section }
  });

  return storageFn;
}

function extendHeadMeta (registry: Registry, { meta: { documentation, name, type }, section }: CreateItemFn, { method }: StorageEntry, iterFn: () => U8a): StorageKey {
  const map = type.asMap;
  const outputType = map.key.toString();

  // metadata with a fallback value using the type of the key, the normal
  // meta fallback only applies to actual entry values, create one for head
  (iterFn as IterFn).meta = createType(registry, 'StorageEntryMetadataLatest', {
    name,
    modifier: createType(registry, 'StorageEntryModifierLatest', 1), // required
    type: createType(registry, 'StorageEntryTypeLatest', createType(registry, 'PlainTypeLatest', map.key), 0),
    fallback: createType(registry, 'Bytes', createTypeUnsafe(registry, outputType).toHex()),
    documentation
  });

  return createType(registry, 'StorageKey', iterFn, { method, section });
}

// attach the head key hashing for linked maps
function extendLinkedMap (registry: Registry, itemFn: CreateItemFn, storageFn: StorageEntry, stringKey: string, hasher: HasherFunction): StorageEntry {
  storageFn.iterKey = extendHeadMeta(registry, itemFn, storageFn, (): U8a =>
    new U8a(registry, hasher(`head of ${stringKey}`))
  );

  return storageFn;
}

// attach the full list hashing for prefixed maps
function extendPrefixedMap (registry: Registry, itemFn: CreateItemFn, storageFn: StorageEntry): StorageEntry {
  storageFn.iterKey = extendHeadMeta(registry, itemFn, storageFn, (): U8a =>
    new U8a(registry, createPrefixedKey(itemFn))
  );

  return storageFn;
}

/**
 * From the schema of a function in the module's storage, generate the function
 * that will return the correct storage key.
 *
 * @param item - The function's definition schema to create the function from.
 * The schema is taken from state_getMetadata.
 * @param options - Additional options when creating the function. These options
 * are not known at runtime (from state_getMetadata), they need to be supplied
 * by us manually at compile time.
 */
export default function createFunction (registry: Registry, itemFn: CreateItemFn, options: CreateItemOptions): StorageEntry {
  const { meta: { type } } = itemFn;
  const stringKey = expandKey(itemFn, options);
  const [hasher, key2Hasher] = getHashers(itemFn);

  // Can only have zero or one argument:
  //   - storage.balances.freeBalance(address)
  //   - storage.timestamp.blockPeriod()
  // For doublemap queries the params is passed in as an tuple, [key1, key2]
  const _storageFn = (arg?: CreateArgType | [CreateArgType?, CreateArgType?]): Uint8Array =>
    type.isDoubleMap
      ? createKeyDoubleMap(registry, itemFn, stringKey, arg as [CreateArgType, CreateArgType], [hasher, key2Hasher], options.metaVersion)
      : createKey(registry, itemFn, stringKey, arg as CreateArgType, options.skipHashing ? NULL_HASHER : hasher, options.metaVersion);

  const storageFn = expandWithMeta(itemFn, _storageFn as StorageEntry);

  if (type.isMap) {
    const map = type.asMap;

    if (map.kind.isLinkedMap) {
      extendLinkedMap(registry, itemFn, storageFn, stringKey, hasher);
    } else if (map.kind.isPrefixedMap) {
      extendPrefixedMap(registry, itemFn, storageFn);
    }
  }

  return storageFn;
}
