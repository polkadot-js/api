// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { createType } from '@polkadot/api-codec/codec';
import { FunctionMetadata } from '@polkadot/api-codec/Metadata';
import { Extrinsic, Text } from '@polkadot/api-codec/index';
import u8aConcat from '@polkadot/util/u8a/concat';

import { ExtrinsicFunction } from '../types';

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
export default function createExtrinsic (
  prefix: string | Text,
  name: string | Text,
  meta: FunctionMetadata
): ExtrinsicFunction {
  let extrinsicFn: any;

  // If the extrinsic function has an argument of type `Origin`, we ignore it
  // FIXME should be `arg.type !== Origin`, but doesn't work...
  const expectedArgs = meta.arguments.filter((arg) => arg.type.toString() !== 'Origin');

  extrinsicFn = (...args: any[]): Extrinsic => {
    if (expectedArgs.length.valueOf() !== args.length) {
      throw new Error(`Extrinsic ${prefix}.${name} expects ${expectedArgs.length.valueOf()} arguments, got ${args.length}.`);
    }

    return new Extrinsic(
      u8aConcat(
        meta.id.toU8a(),
        ...expectedArgs.map((argument, index) => {
          const type = argument.type.toString(); // Argument type, as string

          return createType(type, args[index]).toU8a();
        })
      )
    );

  };

  extrinsicFn.meta = meta;

  return extrinsicFn as ExtrinsicFunction;
}
