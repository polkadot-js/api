// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createType, Bytes, Compact, StorageKey, U8a } from '@polkadot/types';
import { PlainType, StorageEntryMetadata, StorageEntryModifier, StorageEntryType } from '@polkadot/types/Metadata/v6/Storage';
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
export default function createFunction ({ meta, method, prefix, section }: CreateItemFn, options: CreateItemOptions = {}): StorageEntry {
  const stringKey = options.key
    ? options.key
    : `${prefix} ${method}`;
  const rawKey = stringToU8a(stringKey);

  // Get the hashing function
  let hasher: HasherFunction;
  let key2Hasher: HasherFunction;

  if (meta.type.isDoubleMap) {
    hasher = getHasher(meta.type.asDoubleMap.hasher);
    key2Hasher = getHasher(meta.type.asDoubleMap.key2Hasher);
  } else if (meta.type.isMap) {
    hasher = getHasher(meta.type.asMap.hasher);
  } else {
    hasher = getHasher();
  }

  // Can only have zero or one argument:
  // - storage.balances.freeBalance(address)
  // - storage.timestamp.blockPeriod()
  const _storageFn = (arg?: any): Uint8Array => {
    let key = rawKey;

    if (meta.type.isDoubleMap) {
      assert(!isUndefined(arg) && !isNull(arg) && !isUndefined(arg[0]) && !isNull(arg[0]) && !isUndefined(arg[1]) && !isNull(arg[1]), `${meta.name} expects two arguments`);

      const type1 = meta.type.asDoubleMap.key1.toString();
      const type2 = meta.type.asDoubleMap.key2.toString();
      const param1Encoded = u8aConcat(key, createType(type1, arg[0]).toU8a(true));
      const param1Hashed = hasher(param1Encoded);
      const param2Hashed = key2Hasher(createType(type2, arg[1]).toU8a(true));

      return Compact.addLengthPrefix(u8aConcat(param1Hashed, param2Hashed));
    }

    if (meta.type.isMap) {
      assert(!isUndefined(arg) && !isNull(arg), `${meta.name} expects one argument`);

      const type = meta.type.asMap.key.toString();
      const param = createType(type, arg).toU8a();

      key = u8aConcat(key, param);
    }

    // StorageKey is a Bytes, so is length-prefixed
    return Compact.addLengthPrefix(
      options.skipHashing
        ? key
        : hasher(key)
    );
  };

  const storageFn = _storageFn as StorageEntry;

  storageFn.meta = meta;
  storageFn.method = stringLowerFirst(method);
  storageFn.prefix = prefix;
  storageFn.section = section;
  storageFn.toJSON = (): any => meta.toJSON();

  if (meta.type.isMap && meta.type.asMap.isLinked) {
    const keyHash = new U8a(hasher(`head of ${stringKey}`));
    const keyFn: any = (): U8a => keyHash;

    // metadata with a flabbcak value using the type of the key, the normal
    // meta fallback only applies to actual entry values, create one for head
    keyFn.meta = new StorageEntryMetadata({
      name: meta.name,
      modifier: new StorageEntryModifier('Required'),
      type: new StorageEntryType(new PlainType(meta.type.asMap.key), 0),
      fallback: new Bytes(createType(meta.type.asMap.key).toHex()),
      documentation: meta.documentation
    });

    // here we pass the section/methos through as well - these are not on
    // the function itself, so specify these explicitly to the constructor
    storageFn.headKey = new StorageKey(keyFn, {
      method: storageFn.method,
      section: `head of ${storageFn.section}`
    });

    // adjust the fallback value - the metadata only specifies the value
    // part, add a Linkage<Type> to the fallback aswell. The additional
    // bytes here is a represnettaion of teh Options for next/prev
    meta.set('fallback', new Bytes(meta.fallback.toHex().concat('0000')));
  }

  return storageFn;
}
