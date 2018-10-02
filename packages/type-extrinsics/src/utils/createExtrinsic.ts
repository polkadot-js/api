// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { createType } from '@polkadot/api-codec/codec';
import { FunctionMetadata } from '@polkadot/api-codec/Metadata';
import { Extrinsic, Text } from '@polkadot/api-codec/index';
import u8aConcat from '@polkadot/util/u8a/concat';

import { ExtrinsicFunction } from '../types';

/**
 * From the metadata of a function in the module's storage, generate the function
 * that will return the correctly-encoded Extrinsic.
 *
 * @param index - Index of the module section in the modules array.
 */
export default function createExtrinsic (
  section: string | Text,
  method: string | Text,
  index: number,
  meta: FunctionMetadata
): ExtrinsicFunction {
  let extrinsicFn: any;

  // If the extrinsic function has an argument of type `Origin`, we ignore it
  // FIXME should be `arg.type !== Origin`, but doesn't work...
  const expectedArgs = meta.arguments.filter((arg) => arg.type.toString() !== 'Origin');

  extrinsicFn = (...args: any[]): Extrinsic => {
    if (expectedArgs.length.valueOf() !== args.length) {
      throw new Error(`Extrinsic ${section}.${method} expects ${expectedArgs.length.valueOf()} arguments, got ${args.length}.`);
    }

    return new Extrinsic(
      u8aConcat(
        new Uint8Array([index, meta.id.toNumber()]),
        ...expectedArgs.map((argument, index) => {
          const type = argument.type.toString(); // Argument type, as string

          return createType(type, args[index]).toU8a();
        })
      )
    );
  };

  extrinsicFn.meta = meta;
  extrinsicFn.method = method.toString();
  extrinsicFn.section = section.toString();

  return extrinsicFn as ExtrinsicFunction;
}
