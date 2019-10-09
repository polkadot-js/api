// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '@polkadot/types/types';

import BN from 'bn.js';
import { Compact, U8a, createType, createTypeUnsafe } from '@polkadot/types';
import { StorageEntryMetadata, StorageEntryType } from '@polkadot/types/Metadata/v8/Storage';
import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
import { assert, isNull, isUndefined, stringLowerFirst, stringToU8a, u8aConcat } from '@polkadot/util';

import getHasher, { HasherFunction } from './getHasher';

export interface CreateItemOptions {
  key?: string;
  skipHashing?: boolean; // We don't hash the keys defined in ./substrate.ts
}

export interface CreateItemFn {
  meta: StorageEntryMetadata;
  method: string;
  prefix: string;
  section: string;
}

type CreateArgType = boolean | string | number | null | BN | Uint8Array | Codec;

const NULL_HASHER = (value: Uint8Array): Uint8Array => value;

// with the prefix, method & options, create both the string & raw keys
function createKeys ({ method, prefix }: CreateItemFn, options: CreateItemOptions): [string, Uint8Array] {
  const stringKey = options.key
    ? options.key
    : `${prefix} ${method}`;

  return [
    stringKey,
    stringToU8a(stringKey)
  ];
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
function createKeyDoubleMap ({ meta: { name, type } }: CreateItemFn, rawKey: Uint8Array, args: [CreateArgType, CreateArgType], [hasher, key2Hasher]: [HasherFunction, HasherFunction?]): Uint8Array {
  // since we are passing an almost-unknown through, trust, but verify
  assert(
    Array.isArray(args) && !isUndefined(args[0]) && !isNull(args[0]) && !isUndefined(args[1]) && !isNull(args[1]),
    `${name} is a DoubleMap and requires two arguments`
  );

  const [key1, key2] = args;
  const type1 = type.asDoubleMap.key1.toString();
  const type2 = type.asDoubleMap.key2.toString();
  const param1Encoded = u8aConcat(rawKey, createTypeUnsafe(type1, [key1]).toU8a(true));
  const param1Hashed = hasher(param1Encoded);

  // If this fails it means the getHashers function failed - and we have much bigger issues
  const param2Hashed = (key2Hasher as HasherFunction)(createTypeUnsafe(type2, [key2]).toU8a(true));

  // as per createKey, always add the length prefix (underlying it is Bytes)
  return Compact.addLengthPrefix(u8aConcat(param1Hashed, param2Hashed));
}

// create a key for either a map or a plain value
function createKey ({ meta: { name, type } }: CreateItemFn, rawKey: Uint8Array, arg: CreateArgType, hasher: (value: Uint8Array) => Uint8Array): Uint8Array {
  let key = rawKey;

  if (type.isMap) {
    assert(!isUndefined(arg) && !isNull(arg), `${name} is a Map and requires one argument`);

    const mapType = type.asMap.key.toString();
    const param = createTypeUnsafe(mapType, [arg]).toU8a();

    key = u8aConcat(key, param);
  }

  // StorageKey is a Bytes, so is length-prefixed
  return Compact.addLengthPrefix(hasher(key));
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
function extendLinkedMap ({ meta: { documentation, name, type } }: CreateItemFn, storageFn: StorageEntry, stringKey: string, hasher: HasherFunction): StorageEntry {
  const headHash = new U8a(hasher(`head of ${stringKey}`));
  const headFn: any = (): U8a =>
    headHash;

  // metadata with a fallback value using the type of the key, the normal
  // meta fallback only applies to actual entry values, create one for head
  headFn.meta = new StorageEntryMetadata({
    name,
    modifier: createType('StorageEntryModifierLatest', 1), // required
    type: new StorageEntryType(createType('PlainTypeLatest', type.asMap.key), 0),
    fallback: createType('Bytes', createTypeUnsafe(type.asMap.key.toString()).toHex()),
    documentation
  });

  // here we pass the section/method through as well - these are not on
  // the function itself, so specify these explicitly to the constructor
  storageFn.headKey = createType('StorageKey', headFn, {
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
export default function createFunction (item: CreateItemFn, options: CreateItemOptions = {}): StorageEntry {
  const { meta: { type } } = item;
  const [stringKey, rawKey] = createKeys(item, options);
  const [hasher, key2Hasher] = getHashers(item);

  // Can only have zero or one argument:
  //   - storage.balances.freeBalance(address)
  //   - storage.timestamp.blockPeriod()
  // For doublemap queries the params is passed in as an tuple, [key1, key2]
  const _storageFn = (arg?: CreateArgType | [CreateArgType?, CreateArgType?]): Uint8Array =>
    type.isDoubleMap
      ? createKeyDoubleMap(item, rawKey, arg as [CreateArgType, CreateArgType], [hasher, key2Hasher])
      : createKey(item, rawKey, arg as CreateArgType, options.skipHashing ? NULL_HASHER : hasher);

  const storageFn = expandWithMeta(item, _storageFn as StorageEntry);

  if (type.isMap && type.asMap.linked.isTrue) {
    extendLinkedMap(item, storageFn, stringKey, hasher);
  }

  return storageFn;
}
