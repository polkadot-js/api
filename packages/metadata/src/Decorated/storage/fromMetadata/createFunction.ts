// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageEntryMetadataLatest } from '@polkadot/types/interfaces/metadata';
import { Codec, Registry } from '@polkadot/types/types';

import BN from 'bn.js';
import { Compact, U8a, createType, createTypeUnsafe } from '@polkadot/types/codec';
import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
import { assert, isNull, isUndefined, stringLowerFirst, stringToU8a, u8aConcat } from '@polkadot/util';
import { xxhashAsU8a } from '@polkadot/util-crypto';

import getHasher, { HasherFunction } from './getHasher';

const EMPTY_U8A = new Uint8Array([]);

export interface CreateItemOptions {
  key?: string;
  skipHashing?: boolean; // We don't hash the keys defined in ./substrate.ts
}

export interface CreateItemFn {
  meta: StorageEntryMetadataLatest;
  method: string;
  prefix: string;
  section: string;
}

type CreateArgType = boolean | string | number | null | BN | Uint8Array | Codec;

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

// create a key for a DoubleMap type
function createKeyDoubleMap (registry: Registry, { meta: { name, type } }: CreateItemFn, stringKey: string, args: [CreateArgType, CreateArgType], [hasher1, hasher2]: [HasherFunction, HasherFunction?]): Uint8Array {
  // since we are passing an almost-unknown through, trust, but verify
  assert(
    Array.isArray(args) && !isUndefined(args[0]) && !isNull(args[0]) && !isUndefined(args[1]) && !isNull(args[1]),
    `${name} is a DoubleMap and requires two arguments`
  );

  const [key1, key2] = args;
  const type1 = type.asDoubleMap.key1.toString();
  const type2 = type.asDoubleMap.key2.toString();
  const param1Encoded = u8aConcat(stringToU8a(stringKey), createTypeUnsafe(registry, type1, [key1]).toU8a(true));

  // as per createKey, always add the length prefix (underlying it is Bytes)
  return Compact.addLengthPrefix(u8aConcat(
    hasher1(param1Encoded),
    (hasher2 as HasherFunction)(createTypeUnsafe(registry, type2, [key2]).toU8a(true))
  ));
}

// create a key for either a map or a plain value
function createKey (registry: Registry, { meta: { name, type }, method, prefix }: CreateItemFn, stringKey: string, arg: CreateArgType, hasher: (value: Uint8Array) => Uint8Array): Uint8Array {
  let key: Uint8Array | undefined;
  let param: Uint8Array = EMPTY_U8A;

  if (type.isMap) {
    const map = type.asMap;

    // TODO For iteration over values of map.kind.isPrefixedMap, we need to allow empty
    assert(!isUndefined(arg) && !isNull(arg), `${name} is a Map and requires one argument`);

    param = createTypeUnsafe(registry, map.key.toString(), [arg]).toU8a();

    // prefix maps are using prefixes to optimize the trie, so the key generation are
    // done differently where the prefix/method are hashed separately with only the
    // paramter for the key being attached via the hasher
    if (map.kind.isPrefixedMap) {
      key = u8aConcat(xxhashAsU8a(prefix, 128), xxhashAsU8a(method, 128), hasher(param));
    }
  }

  // StorageKey is a Bytes, so is length-prefixed
  return Compact.addLengthPrefix(key || hasher(u8aConcat(stringToU8a(stringKey), param)));
}

// attach the metadata to expsnd to a StorageFunction
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

// attch the head key hashing for linked maps
function extendLinkedMap (registry: Registry, { meta: { documentation, name, type } }: CreateItemFn, storageFn: StorageEntry, stringKey: string, hasher: HasherFunction): StorageEntry {
  const headHash = new U8a(registry, hasher(`head of ${stringKey}`));
  const headFn: any = (): U8a =>
    headHash;

  // metadata with a fallback value using the type of the key, the normal
  // meta fallback only applies to actual entry values, create one for head
  headFn.meta = createType(registry, 'StorageEntryMetadataLatest', {
    name,
    modifier: createType(registry, 'StorageEntryModifierLatest', 1), // required
    type: createType(registry, 'StorageEntryTypeLatest', createType(registry, 'PlainTypeLatest', type.asMap.key), 0),
    fallback: createType(registry, 'Bytes', createTypeUnsafe(registry, type.asMap.key.toString()).toHex()),
    documentation
  });

  // here we pass the section/method through as well - these are not on
  // the function itself, so specify these explicitly to the constructor
  storageFn.headKey = createType(registry, 'StorageKey', headFn, {
    method: storageFn.method,
    section: `head of ${storageFn.section}`
  });

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
export default function createFunction (registry: Registry, item: CreateItemFn, options: CreateItemOptions = {}): StorageEntry {
  const { meta: { type } } = item;
  const stringKey = expandKey(item, options);
  const [hasher, key2Hasher] = getHashers(item);

  // Can only have zero or one argument:
  //   - storage.balances.freeBalance(address)
  //   - storage.timestamp.blockPeriod()
  // For doublemap queries the params is passed in as an tuple, [key1, key2]
  const _storageFn = (arg?: CreateArgType | [CreateArgType?, CreateArgType?]): Uint8Array =>
    type.isDoubleMap
      ? createKeyDoubleMap(registry, item, stringKey, arg as [CreateArgType, CreateArgType], [hasher, key2Hasher])
      : createKey(registry, item, stringKey, arg as CreateArgType, options.skipHashing ? NULL_HASHER : hasher);

  const storageFn = expandWithMeta(item, _storageFn as StorageEntry);

  if (type.isMap && type.asMap.kind.isLinkedMap) {
    extendLinkedMap(registry, item, storageFn, stringKey, hasher);
  }

  return storageFn;
}
