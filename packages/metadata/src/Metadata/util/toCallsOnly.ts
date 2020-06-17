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

function trimDocs (documentation: Vec<Text>): string[] {
  const strings = documentation.map((doc) => doc.toString().trim());
  const firstEmpty = strings.findIndex((doc) => !doc.length);

  return firstEmpty === -1
    ? strings
    : strings.slice(0, firstEmpty);
}

function mapCalls (registry: Registry, _calls: Option<Vec<FunctionMetadataLatest>>): Option<Vec<FunctionMetadataLatest>> {
  const calls = _calls.unwrapOr(null);

  return registry.createType(
    'Option<Vec<FunctionMetadataLatest>>' as any,
    calls
      ? calls.map(({ args, documentation, name }) =>
        registry.createType('FunctionMetadataLatest', {
          args,
          documentation: trimDocs(documentation),
          name
        })
      )
      : null
  ) as Option<Vec<FunctionMetadataLatest>>;
}

/** @internal */
export default function toCallsOnly (registry: Registry, { extrinsic, modules }: MetadataLatest): AnyJson {
  return registry.createType('MetadataLatest', {
    extrinsic,
    modules: modules.map(({ calls, name }): ModuleMetadataTrimmed => ({
      calls: mapCalls(registry, calls),
      name
    }))
  }).toJSON();
}
