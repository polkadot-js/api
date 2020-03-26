// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { FunctionMetadataLatest, MetadataLatest } from '@polkadot/types/interfaces/metadata';
import { AnyJson, Registry } from '@polkadot/types/types';

import { Option, Text, Vec } from '@polkadot/types';

interface ModuleMetadataTrimmed {
  name: Text;
  calls: Option<Vec<FunctionMetadataLatest>>;
}

function mapCalls (registry: Registry, _calls: Option<Vec<FunctionMetadataLatest>>): Option<Vec<FunctionMetadataLatest>> {
  const calls = _calls.unwrapOr(null);

  return registry.createType(
    'Option<Vec<FunctionMetadataLatest>>' as any,
    calls
      ? calls.map(({ args, documentation, name }) =>
        registry.createType('FunctionMetadataLatest', {
          args,
          name,
          documentation: documentation.map((doc) => doc.toString().trim())
        })
      )
      : null
  );
}

/** @internal */
export default function toCallsOnly (registry: Registry, { extrinsic, modules }: MetadataLatest): AnyJson {
  return registry.createType('MetadataLatest', {
    modules: modules.map(({ calls, name }): ModuleMetadataTrimmed => ({
      name,
      calls: mapCalls(registry, calls)
    })),
    extrinsic
  }).toJSON();
}
