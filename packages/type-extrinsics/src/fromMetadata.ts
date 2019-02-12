// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RuntimeModuleMetadata, FunctionMetadata, FunctionArgumentMetadata } from '@polkadot/types/Metadata/v0/Modules';
import { Methods, ModulesWithMethods, MethodFunction } from '@polkadot/types/Method';
import Metadata from '@polkadot/types/Metadata';
import MetadataV0 from '@polkadot/types/Metadata/v0';
import MetadataV2 from '@polkadot/types/Metadata/v2';

import { stringCamelCase } from '@polkadot/util';

import createUnchecked from './utils/createUnchecked';
import extrinsics from './index';
import { MetadataCall } from '@polkadot/types/Metadata/v2/Calls';
import { Vector } from '@polkadot/types/codec';

function fromMetadataV0 (metadata: MetadataV0): ModulesWithMethods {
  let indexCount = -1;

  const findIndex = (prefix: string): number => {
    indexCount++;

    const mod = metadata.calls.find((item) => item.prefix.toString() === prefix);

    if (!mod) {
      console.error(`Unable to find module index for '${prefix}'`);

      // compatible with old versions
      return indexCount;
    }

    return mod.index.toNumber();
  };

  return metadata.modules.reduce((result, meta: RuntimeModuleMetadata) => {
    if (!meta.module.call || !meta.module.call.functions.length) {
      return result;
    }

    const prefix = stringCamelCase(meta.prefix.toString());
    const index = findIndex(meta.prefix.toString());

    result[prefix] = meta.module.call.functions.reduce((newModule, funcMeta) => {
      // extrinsics.balances.set_balance -> extrinsics.balances.setBalance
      const funcName = stringCamelCase(funcMeta.name.toString());

      newModule[funcName] = createUnchecked(prefix, funcName, index, funcMeta);

      return newModule;
    }, {} as Methods);

    return result;
  }, { ...extrinsics });
}

function callToMethodFunction (prefix: string, section: number, id: number, call: MetadataCall): MethodFunction {
  const name = stringCamelCase(call.name.toString());
  const meta = new FunctionMetadata({
    id,
    name: call.name,
    arguments: call.args.map(arg => new FunctionArgumentMetadata({
      name: arg.name,
      type: arg.type.name
    })),
    documentation: call.docs
  });
  return createUnchecked(prefix, name, section, meta);
}

function callsToMethods (prefix: string, section: number, calls: Vector<MetadataCall>): Methods {
  const methods = {} as Methods;
  let index = 0;
  for (const call of calls) {
    const func = callToMethodFunction(prefix, section, index, call);
    methods[func.name.toString()] = func;
    ++index;
  }
  return methods;
}

function fromMetadataV2 (metadata: MetadataV2): ModulesWithMethods {
  const result = { ...extrinsics };
  let index = 0;
  for (const m of metadata.modules) {
    const prefix = m.prefix.toString();
    const methods = callsToMethods(m.prefix.toString(), index, m.calls.unwrap());
    result[stringCamelCase(prefix)] = methods;
    ++index;
  }
  return result;
}

/**
 * Extend a storage object with the storage modules & module functions present
 * in the metadata.
 *
 * @param extrinsics - An extrinsics object to be extended.
 * @param metadata - The metadata to extend the storage object against.
 */
export default function fromMetadata (metadata: Metadata): ModulesWithMethods {
  const v0 = metadata.asV0;
  if (v0) {
    return fromMetadataV0(v0);
  }
  const v2 = metadata.asV2;
  if (v2) {
    return fromMetadataV2(v2);
  }
  throw new Error('Unsupported metadata version');
}
