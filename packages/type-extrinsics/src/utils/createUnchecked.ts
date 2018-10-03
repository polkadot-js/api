// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { FunctionMetadata } from '@polkadot/types/Metadata';
import ExtrinsicIndex from '@polkadot/types/ExtrinsicIndex';
import Text from '@polkadot/types/Text';

import { ExtrinsicFunction } from '../types';
import Descriptor from '../Descriptor';
import UncheckedMortalExtrinsic from '../UncheckedMortalExtrinsic';

/**
 * From the metadata of a function in the module's storage, generate the function
 * that will return the an UncheckExtrinsic.
 *
 * @param index - Index of the module section in the modules array.
 */
export default function createDescriptor (
  prefix: Text,
  name: Text,
  index: number,
  meta: FunctionMetadata
): ExtrinsicFunction {
  let extrinsicFn: any;

  // If the extrinsic function has an argument of type `Origin`, we ignore it
  // FIXME should be `arg.type !== Origin`, but doesn't work...
  const expectedArgs = meta.arguments.filter((arg) => arg.type.toString() !== 'Origin');

  extrinsicFn = (...args: any[]): UncheckedMortalExtrinsic => {
    if (expectedArgs.length.valueOf() !== args.length) {
      throw new Error(`Extrinsic ${prefix}.${name} expects ${expectedArgs.length.valueOf()} arguments, got ${args.length}.`);
    }

    const descriptor = new Descriptor(
      new ExtrinsicIndex().fromU8a(new Uint8Array([index, meta.id.toNumber()])),
      meta,
      args
    );

    return new UncheckedMortalExtrinsic(descriptor);

  };

  extrinsicFn.meta = meta;

  return extrinsicFn as ExtrinsicFunction;
}
