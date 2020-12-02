// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { FunctionMetadataLatest, MetadataLatest } from '@polkadot/types/interfaces/metadata';
import type { AnyJson, Registry } from '@polkadot/types/types';

import { Option, Vec } from '@polkadot/types/codec';
import { Text, u8 } from '@polkadot/types/primitive';

interface ModuleMetadataTrimmed {
  calls: Option<Vec<FunctionMetadataLatest>>;
  index: u8;
  name: Text;
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
export function toCallsOnly (registry: Registry, { extrinsic, modules }: MetadataLatest): AnyJson {
  return registry.createType('MetadataLatest', {
    extrinsic,
    modules: modules.map(({ calls, index, name }): ModuleMetadataTrimmed => ({
      calls: mapCalls(registry, calls),
      index,
      name
    }))
  }).toJSON();
}
