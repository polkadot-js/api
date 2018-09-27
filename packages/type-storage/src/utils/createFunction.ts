// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { StorageFunctionMetadata } from '@polkadot/api-codec/Metadata';
import { StorageFunction } from '@polkadot/api-codec/StorageKey';
import U8a from '@polkadot/api-codec/codec/U8a';

import { createTypeInstance } from '@polkadot/api-codec/codec';
import { Text } from '@polkadot/api-codec/index';
import u8aConcat from '@polkadot/util/u8a/concat';
import xxhash from '@polkadot/util-crypto/xxhash/asU8a';

export interface CreateItemOptions {
  isUnhashed?: boolean;
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
export function createFunction (
  prefix: Text | U8a,
  functionMetadata: StorageFunctionMetadata,
  options: CreateItemOptions = {}
) {
  let func: any; // The return value, it's a function that has metadata.

  if (options.isUnhashed) {
    func = () => prefix.toU8a();
  } else {
    // TODO Find better type than any
    // Can only have zero or one argument:
    // - storage.balances.freeBalance(address)
    // - storage.timestamp.blockPeriod()
    func = (arg?: any) => {
      if (functionMetadata.type.isMap) {
        if (!arg) {
          throw new Error(`${functionMetadata.name} expects one argument.`);
        }

        const type = functionMetadata.type.asMap.key.toString(); // Argument type, as string

        return xxhash(
          u8aConcat(
            prefix.toU8a(),
            createTypeInstance(type, arg).toU8a()
          ),
          128
        );
      }

      return xxhash(prefix.toU8a(), 128);
    };
  }

  // Add metadata to the storage function
  Object.assign(func as StorageFunction, {
    documentation: functionMetadata.documentation,
    type: functionMetadata.type
  });

  return func as StorageFunction;
}
