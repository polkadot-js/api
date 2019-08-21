// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '@polkadot/types/types';

import BN from 'bn.js';
import { Bytes, Compact, StorageKey, U8a } from '@polkadot/types';
import { createType, createTypeUnsafe } from '@polkadot/types/codec';
import { StorageEntryMetadata, StorageEntryType } from '@polkadot/types/Metadata/v7/Storage';
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
function createKeys (prefix: string, method: string, options: CreateItemOptions): [string, Uint8Array] {
  const stringKey = options.key
    ? options.key
    : `${prefix} ${method}`;
  const rawKey = stringToU8a(stringKey);

  return [stringKey, rawKey];
}

// get the hashers, the base (and  in the case of DoubleMap), the second key
function getHashers ({ type }: StorageEntryMetadata): [HasherFunction, HasherFunction?] {
  if (type.isDoubleMap) {
    return [
      getHasher(type.asDoubleMap.hasher),
      getHasher(type.asDoubleMap.key2Hasher)
    ];
  } else if (type.isMap) {
    return [getHasher(type.asMap.hasher)];
  }

  return [getHasher()];
}

// create a key for a DoubleMap type
function createDoubleMapKey (meta: StorageEntryMetadata, rawKey: Uint8Array, args: [CreateArgType, CreateArgType], [hasher, key2Hasher]: [HasherFunction, HasherFunction?]): Uint8Array {
  // since we are passing an almost-unknown through, trust, but verify
  assert(Array.isArray(args) && !isUndefined(args[0]) && !isNull(args[0]) && !isUndefined(args[1]) && !isNull(args[1]), `${meta.name} expects two arguments`);

  const [key1, key2] = args;
  const type1 = meta.type.asDoubleMap.key1.toString();
  const type2 = meta.type.asDoubleMap.key2.toString();
  const param1Encoded = u8aConcat(rawKey, createTypeUnsafe(type1, [key1]).toU8a(true));
  const param1Hashed = hasher(param1Encoded);

  // @ts-ignore If this fails it means the getHashers function failed - and we have much bigger issues
  const param2Hashed = key2Hasher(createTypeUnsafe(type2, [key2]).toU8a(true));

  return Compact.addLengthPrefix(u8aConcat(param1Hashed, param2Hashed));
}

// create a key for either a map or a plain value
function createKey (meta: StorageEntryMetadata, rawKey: Uint8Array, arg: CreateArgType, hasher: (value: Uint8Array) => Uint8Array): Uint8Array {
  let key = rawKey;

  if (meta.type.isMap) {
    assert(!isUndefined(arg) && !isNull(arg), `${meta.name} expects one argument`);

    const type = meta.type.asMap.key.toString();
    const param = createTypeUnsafe(type, [arg]).toU8a();

    key = u8aConcat(key, param);
  }

  // StorageKey is a Bytes, so is length-prefixed
  return Compact.addLengthPrefix(hasher(key));
}

// attach the metadata to expsnd to a StorageFunction
function expandWithMeta (storageFn: StorageEntry, { meta, method, prefix, section }: CreateItemFn): StorageEntry {
  storageFn.meta = meta;
  storageFn.method = stringLowerFirst(method);
  storageFn.prefix = prefix;
  storageFn.section = section;

  // explicitly add the actual method in the toJSON, this gets used to determine caching and without it
  // instances (e.g. collective) will not work since it is only matched on param meta
  storageFn.toJSON = (): any => ({ ...(meta.toJSON() as any), storage: { method, prefix, section } });

  return storageFn;
}

// attch the head key hashing for linked maps
function extendLinkedMap (storageFn: StorageEntry, { meta }: CreateItemFn, stringKey: string, hasher: HasherFunction): StorageEntry {
  const headHash = new U8a(hasher(`head of ${stringKey}`));
  const headFn: any = (): U8a => headHash;

  // metadata with a fallback value using the type of the key, the normal
  // meta fallback only applies to actual entry values, create one for head
  headFn.meta = new StorageEntryMetadata({
    name: meta.name,
    modifier: createType('StorageEntryModifierV7', 1), // required
    type: new StorageEntryType(createType('PlainTypeV7', meta.type.asMap.key), 0),
    fallback: new Bytes(createTypeUnsafe(meta.type.asMap.key.toString()).toHex()),
    documentation: meta.documentation
  });

  // here we pass the section/method through as well - these are not on
  // the function itself, so specify these explicitly to the constructor
  storageFn.headKey = new StorageKey(headFn, {
    method: storageFn.method,
    section: `head of ${storageFn.section}`
  });

  return storageFn;
}

/**
 * From the schema of a function in the module's storage, generate the function
 * that will return the correct storage key.
 *
 * @param schema - The function's definition schema to create the function from.
 * The schema is taken from state_getMetadata.
 * @param options - Additional options when creating the function. These options
 * are not known at runtime (from state_getMetadata), they need to be supplied
 * by us manually at compile time.
 */
export default function createFunction (item: CreateItemFn, options: CreateItemOptions = {}): StorageEntry {
  const { meta, method, prefix } = item;
  const [stringKey, rawKey] = createKeys(prefix, method, options);
  const [hasher, key2Hasher] = getHashers(meta);

  // Can only have zero or one argument:
  //   - storage.balances.freeBalance(address)
  //   - storage.timestamp.blockPeriod()
  // For doublemap queries the params is passed in as an tuple, [key1, key2]
  const _storageFn = (arg?: CreateArgType | [CreateArgType?, CreateArgType?]): Uint8Array =>
    meta.type.isDoubleMap
      ? createDoubleMapKey(meta, rawKey, arg as [CreateArgType, CreateArgType], [hasher, key2Hasher])
      : createKey(meta, rawKey, arg as CreateArgType, options.skipHashing ? NULL_HASHER : hasher);

  const storageFn = expandWithMeta(_storageFn as StorageEntry, item);

  if (meta.type.isMap && meta.type.asMap.linked.isTrue) {
    extendLinkedMap(storageFn, item, stringKey, hasher);
  }

  return storageFn;
}
