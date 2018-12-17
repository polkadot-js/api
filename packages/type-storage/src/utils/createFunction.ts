// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Compact from '@polkadot/types/codec/Compact';
import { createType } from '@polkadot/types/codec';
import { StorageFunctionMetadata } from '@polkadot/types/Metadata/Modules';
import { StorageFunction } from '@polkadot/types/StorageKey';
import { Text } from '@polkadot/types/index';
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
export default function createFunction (section: Text | string, method: Text | string, meta: StorageFunctionMetadata, options: CreateItemOptions = {}): StorageFunction {
  // Can only have zero or one argument:
  // - storage.balances.freeBalance(address)
  // - storage.timestamp.blockPeriod()
  const storageFn = (arg?: any): Uint8Array => {
    let key = stringToU8a(
      options.key
        ? options.key
        : `${section.toString()} ${method.toString()}`
    );

    if (meta.type.isMap) {
      assert(!isUndefined(arg) && !isNull(arg), `${meta.name} expects one argument`);

      const type = meta.type.asMap.key.toString();

      // encode with fulle encoding, indicating that this is a storage key to allow any
      // specific encoding to take place (and example here is AccountIndex)
      const param = createType(type, arg).toU8a(false, true);

      key = u8aConcat(key, param);
    }

    // StorageKey is a Bytes, so is length-prefixed
    return Compact.addLengthPrefix(
      options.isUnhashed
        ? key
        : xxhashAsU8a(key, 128)
    );
  };

  storageFn.meta = meta;
  storageFn.method = stringLowerFirst(method.toString());
  storageFn.section = stringLowerFirst(section.toString());
  storageFn.toJSON = (): any => meta.toJSON();

  return storageFn as StorageFunction;
}
