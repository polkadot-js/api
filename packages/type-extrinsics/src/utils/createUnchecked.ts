// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ExtrinsicFunction } from '../types';

import { FunctionMetadata } from '@polkadot/types/Metadata';
import { Extrinsic, Method } from '@polkadot/types/index';

/**
 * From the metadata of a function in the module's storage, generate the function
 * that will return the an UncheckExtrinsic.
 *
 * @param index - Index of the module section in the modules array.
 */
export default function createDescriptor (
  section: string,
  method: string,
  index: number,
  meta: FunctionMetadata
): ExtrinsicFunction {
  const callIndex = new Uint8Array([index, meta.id.toNumber()]);
  let extrinsicFn: any;

  // If the extrinsic function has an argument of type `Origin`, we ignore it
  // FIXME should be `arg.type !== Origin`, but doesn't work...
  const expectedArgs = meta.arguments.filter((arg) =>
    arg.type.toString() !== 'Origin'
  );

  extrinsicFn = (...args: any[]): Extrinsic => {
    if (expectedArgs.length.valueOf() !== args.length) {
      throw new Error(`Extrinsic ${section}.${method} expects ${expectedArgs.length.valueOf()} arguments, got ${args.length}.`);
    }

    return new Extrinsic({
      method: new Method(callIndex, meta, args)
    });
  };

  extrinsicFn.callIndex = callIndex;
  extrinsicFn.meta = meta;
  extrinsicFn.method = method;
  extrinsicFn.section = section;
  extrinsicFn.toJSON = (): any =>
    meta.toJSON();

  return extrinsicFn as ExtrinsicFunction;
}
