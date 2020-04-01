// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Call } from '@polkadot/types/interfaces';
import { AnyJson, CallFunction, Registry, RegistryMetadataCall } from '@polkadot/types/types';

import { assert, stringCamelCase } from '@polkadot/util';

/** @internal */
export default function createDescriptor (registry: Registry, section: string, sectionIndex: number, methodIndex: number, callMetadata: RegistryMetadataCall): CallFunction {
  const callIndex = new Uint8Array([sectionIndex, methodIndex]);
  const expectedArgs = callMetadata.args;
  const funcName = stringCamelCase(callMetadata.name.toString());

  const extrinsicFn = (...args: any[]): Call => {
    assert(
      expectedArgs.length.valueOf() === args.length,
      `Extrinsic ${section}.${funcName} expects ${expectedArgs.length.valueOf()} arguments, got ${args.length}.`
    );

    return registry.createType('Call', {
      args,
      callIndex
    }, callMetadata);
  };

  extrinsicFn.callIndex = callIndex;
  extrinsicFn.meta = callMetadata;
  extrinsicFn.method = funcName;
  extrinsicFn.section = section;
  extrinsicFn.toJSON = (): AnyJson =>
    callMetadata.toJSON();

  return extrinsicFn as CallFunction;
}
