// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataCall } from '@plugnet/types/Metadata/v1/Calls';
import { MethodFunction } from '@plugnet/types/primitive/Method';
import { Method } from '@plugnet/types';
import { assert } from '@plugnet/util';

/**
 * From the metadata of a function in the module's storage, generate the function
 * that will return the an UncheckExtrinsic.
 *
 * @param index - Index of the module section in the modules array.
 */
export default function createDescriptor (
  section: string,
  method: string,
  indexCount: number,
  meta: MetadataCall,
  index: number
): MethodFunction {
  const callIndex = new Uint8Array([indexCount, index]);

  const expectedArgs = Method.filterOrigin(meta);

  const extrinsicFn = (...args: any[]): Method => {
    assert(expectedArgs.length.valueOf() === args.length, `Extrinsic ${section}.${method} expects ${expectedArgs.length.valueOf()} arguments, got ${args.length}.`);

    return new Method({
      args,
      callIndex
    }, meta);
  };

  extrinsicFn.callIndex = callIndex;
  extrinsicFn.meta = meta;
  extrinsicFn.method = method;
  extrinsicFn.section = section;
  extrinsicFn.toJSON = (): any =>
    meta.toJSON();

  return extrinsicFn as MethodFunction;
}
