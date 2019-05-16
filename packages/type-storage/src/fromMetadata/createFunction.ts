// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createType, Bytes, Compact, StorageKey, Text, U8a } from '@plugnet/types';
import { PlainType, StorageFunctionMetadata, StorageFunctionModifier, StorageFunctionType } from '@plugnet/types/Metadata/v4/Storage';
import { StorageFunction } from '@plugnet/types/primitive/StorageKey';
import { assert, isNull, isUndefined, stringLowerFirst, stringToU8a, u8aConcat } from '@plugnet/util';

import getHasher from './getHasher';

export interface CreateItemOptions {
  key?: string;
  skipHashing?: boolean; // We don't hash the keys defined in ./substrate.ts
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
export default function createFunction (section: Text | string, method: Text | string, meta: StorageFunctionMetadata, options: CreateItemOptions = {}): StorageFunction {
  const stringKey = options.key
    ? options.key
    : `${section.toString()} ${method.toString()}`;
  const rawKey = stringToU8a(stringKey);

  // Get the hashing function
  // FIXME Hash correctly for double map too
  const hasher = meta.type.isMap
    ? getHasher(meta.type.asMap.hasher)
    : getHasher();

  // Can only have zero or one argument:
  // - storage.balances.freeBalance(address)
  // - storage.timestamp.blockPeriod()
  const storageFn = (arg?: any): Uint8Array => {
    let key = rawKey;
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

  if (meta.type.isMap && meta.type.asMap.isLinked) {
    const keyHash = new U8a(hasher(`head of ${stringKey}`));
    const keyFn: any = () => keyHash;
    keyFn.meta = new StorageFunctionMetadata({
      name: meta.name,
      modifier: new StorageFunctionModifier('Required'),
      type: new StorageFunctionType(new PlainType(meta.type.asMap.key), 0),
      fallback: new Bytes(),
      documentation: meta.documentation
    });
    storageFn.headKey = new StorageKey(keyFn);
  }

  storageFn.meta = meta;
  storageFn.method = stringLowerFirst(method.toString());
  storageFn.section = stringLowerFirst(section.toString());
  storageFn.toJSON = (): any => meta.toJSON();

  return storageFn as StorageFunction;
}
