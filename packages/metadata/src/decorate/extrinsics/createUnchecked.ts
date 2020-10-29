// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Call } from '@polkadot/types/interfaces';
import { AnyJson, CallFunction, Registry, RegistryMetadataCall } from '@polkadot/types/types';

import { assert, stringCamelCase } from '@polkadot/util';

/** @internal */
export default function createDescriptor (registry: Registry, section: string, callIndex: Uint8Array, callMetadata: RegistryMetadataCall): CallFunction {
  const expectedArgs = callMetadata.args;
  const funcName = stringCamelCase(callMetadata.name);

  const extrinsicFn = (...args: any[]): Call => {
    assert(expectedArgs.length === args.length, `Extrinsic ${section}.${funcName} expects ${expectedArgs.length.valueOf()} arguments, got ${args.length}.`);

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
