// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import {
  IStorageFunctionMetadata,
  StorageFunction
} from '@polkadot/types/primitive/StorageKey';
import { Bytes, Compact, StorageKey, Text, TypeRegistry, U8a } from '@polkadot/types';
import { StorageModifier } from '@polkadot/types/types';
import { assert, isNull, isUndefined, stringLowerFirst, stringToU8a, u8aConcat } from '@polkadot/util';
import { xxhashAsU8a } from '@polkadot/util-crypto';

export interface CreateItemOptions {
  isUnhashed?: boolean;
  key?: string;
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
export default function createFunction (section: string, method: Text | string, meta: IStorageFunctionMetadata, options: CreateItemOptions = {}): StorageFunction {
  const stringKey = options.key
    ? options.key
    : `${section.toString()} ${method.toString()}`;
  const rawKey = stringToU8a(stringKey);
  const typeRegistry = TypeRegistry.TYPE_REGISTRY;

  // Can only have zero or one argument:
  // - storage.balances.freeBalance(address)
  // - storage.timestamp.blockPeriod()
  const storageFn = (arg?: any): Uint8Array => {
    let key = rawKey;
    if (meta.type.isMap) {
      assert(!isUndefined(arg) && !isNull(arg), `${meta.name} expects one argument`);

      const type = meta.type.asMap().key;
      const param = typeRegistry.createType(type, arg).toU8a(false);

      key = u8aConcat(key, param);
    }

    // StorageKey is a Bytes, so is length-prefixed
    return Compact.addLengthPrefix(
      options.isUnhashed
        ? key
        : xxhashAsU8a(key, 128)
    );
  };

  if (meta.type.isMap && meta.type.isLinked) {
    // TODO: there needs some better way to do this
    const keyHash = new U8a(xxhashAsU8a(`head of ${stringKey}`, 128));
    const keyFn: any = () => keyHash;
    keyFn.meta = {
      name: meta.name,
      modifier: StorageModifier.Required,
      type: {
        isMap: false,
        isLinked: false,
        isDoubleMap: false,
        asMap: () => { throw new Error(); },
        asType: () => meta.type.asMap().key,
        asDoubleMap: () => { throw new Error(); }
      },
      default: new Bytes(),
      documentation: meta.documentation
    };
    storageFn.headKey = new StorageKey(keyFn);
  }

  storageFn.meta = meta;
  storageFn.method = stringLowerFirst(method.toString());
  storageFn.section = stringLowerFirst(section.toString());
  storageFn.toJSON = () => JSON.stringify(meta);

  return storageFn as StorageFunction;
}
