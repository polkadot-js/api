// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { FunctionMetadataLatest, MetadataLatest } from '../../interfaces/metadata';
import type { AnyJson, Registry } from '../../types';

import { Option, Vec } from '../../codec';
import { Text, u8 } from '../../primitive';

interface ModuleMetadataTrimmed {
  calls: Option<Vec<FunctionMetadataLatest>>;
  index: u8;
  name: Text;
}

function trimDocs (docs: Vec<Text>): string[] {
  const strings = docs.map((doc) => doc.toString().trim());
  const firstEmpty = strings.findIndex((doc) => !doc.length);

  return firstEmpty === -1
    ? strings
    : strings.slice(0, firstEmpty);
}

function mapCalls (registry: Registry, _calls: Option<Vec<FunctionMetadataLatest>>): Option<Vec<FunctionMetadataLatest>> {
  const calls = _calls.unwrapOr(null);

  return registry.createType(
    'Option<Vec<FunctionMetadataLatest>>',
    calls
      ? calls.map(({ args, docs, name }) =>
        registry.createType('FunctionMetadataLatest', {
          args,
          docs: trimDocs(docs),
          name
        })
      )
      : null
  );
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
