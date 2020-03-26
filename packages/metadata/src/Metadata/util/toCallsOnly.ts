// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { FunctionMetadataLatest, MetadataLatest } from '@polkadot/types/interfaces/metadata';
import { AnyJson, Registry } from '@polkadot/types/types';

import { Option, Text, Vec } from '@polkadot/types';

interface ModuleMetadataCallsOnly {
  name: Text;
  calls: FunctionMetadataLatest[];
}

function mapCalls (registry: Registry, calls: Option<Vec<FunctionMetadataLatest>>): FunctionMetadataLatest[] {
  return calls.unwrapOr([] as FunctionMetadataLatest[]).map(({ args, documentation, name }) =>
    registry.createType('FunctionMetadataLatest', {
      args,
      name,
      documentation: documentation.map((doc) => doc.toString().trim())
    })
  );
}

/** @internal */
export default function toCallsOnly (registry: Registry, { extrinsic, modules }: MetadataLatest): AnyJson {
  return registry.createType('MetadataLatest', {
    modules: modules.map(({ calls, name }): ModuleMetadataCallsOnly => ({
      name,
      calls: mapCalls(registry, calls)
    })),
    extrinsic
  }).toJSON();
}
