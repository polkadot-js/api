// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Call } from '@polkadot/types/interfaces';
import { CallFunction } from '@polkadot/types/types';

import { FunctionMetadata } from '@polkadot/types/Metadata/v7/Calls';
import { createType, Metadata } from '@polkadot/types';
import { assert, stringCamelCase } from '@polkadot/util';

/**
 * From the metadata of a function in the module's storage, generate the function
 * that will return the an [[CallFunction]].
 *
 * @param section - Name of the module section.
 * @param sectionIndex - Index of the module section in the modules array.
 * @param methodIndex - Index of the method inside the section.
 * @param callMetadata - Metadata of the call function.
 */
export default function createDescriptor (
  section: string,
  sectionIndex: number,
  methodIndex: number,
  callMetadata: FunctionMetadata,
  runtimeMetadata: Metadata
): CallFunction {
  const callIndex = new Uint8Array([sectionIndex, methodIndex]);
  const expectedArgs = callMetadata.args;
  const funcName = stringCamelCase(callMetadata.name.toString());
  const extrinsicFn = (...args: any[]): Call => {
    assert(
      expectedArgs.length.valueOf() === args.length,
      `Extrinsic ${section}.${funcName} expects ${expectedArgs.length.valueOf()} arguments, got ${args.length}.`
    );

    return createType('Call', {
      args,
      callIndex
    }, { meta: runtimeMetadata });
  };

  extrinsicFn.callIndex = callIndex;
  extrinsicFn.meta = callMetadata;
  extrinsicFn.method = funcName;
  extrinsicFn.section = section;
  extrinsicFn.toJSON = (): any =>
    callMetadata.toJSON();

  return extrinsicFn as CallFunction;
}
