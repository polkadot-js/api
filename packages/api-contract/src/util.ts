// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InkProject, MtRegistryIndex } from '@polkadot/types/interfaces';
import { Codec, Registry, TypeDefInfo, TypeDef } from '@polkadot/types/types';

import { Option, Raw, createClass } from '@polkadot/types';
import { createTypeUnsafe } from '@polkadot/types/codec';
import { assert, isUndefined } from '@polkadot/util';

export function formatData (registry: Registry, data: Raw, { info, type }: TypeDef): Codec {
  if (info === TypeDefInfo.Option) {
    return new Option(
      registry,
      createClass(registry, type),
      createTypeUnsafe(registry, type, [data], true)
    );
  }

  return createTypeUnsafe(registry, type, [data], true);
}

export function registryLookup (project: InkProject, index: MtRegistryIndex): string {
  const offset = index.toNumber() - 1;
  const value = project.lookup.strings[offset];

  assert(!isUndefined(value), `InkProject.lookup:: Unable to find ${index.toNumber()} in string values`);

  return value.toString();
}

export function registryLookupAll (project: InkProject, indexes: MtRegistryIndex[]): string[] {
  return indexes.map((index): string => registryLookup(project, index));
}
