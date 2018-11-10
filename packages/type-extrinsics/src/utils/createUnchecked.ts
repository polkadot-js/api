// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ExtrinsicFunction } from '../types';

import { FunctionMetadata } from '@polkadot/types/Metadata';
import { Extrinsic, Method } from '@polkadot/types/index';
import { assert } from '@polkadot/util';

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

  const expectedArgs = Method.filterOrigin(meta);

  extrinsicFn = (...args: any[]): Extrinsic => {
    assert(expectedArgs.length.valueOf() === args.length, `Extrinsic ${section}.${method} expects ${expectedArgs.length.valueOf()} arguments, got ${args.length}.`);

    return new Extrinsic({
      method: new Method({
        args,
        callIndex
      }, meta)
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
