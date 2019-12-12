// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InkProject, MtLookupTextId, MtLookupTypeId, MtTypeIdDef } from '@polkadot/types/interfaces';

import { assert, isUndefined } from '@polkadot/util';

function getRegistryOffset (index: MtLookupTextId | MtLookupTypeId): number {
  return index.toNumber() - 1;
}

export function getInkString (project: InkProject, index: MtLookupTextId): string {
  const offset = getRegistryOffset(index);
  const value = project.lookup.strings[offset];

  assert(!isUndefined(value), `getInkString:: Unable to find ${index.toNumber()} in string values`);

  return value.toString();
}

export function getInkStrings (project: InkProject, indexes: MtLookupTextId[]): string[] {
  return indexes.map((index): string => getInkString(project, index));
}

export function getInkType (project: InkProject, index: MtLookupTypeId): MtTypeIdDef {
  const offset = getRegistryOffset(index);
  const type = project.lookup.types[offset];

  assert(!isUndefined(type), `getInkType:: Unable to find ${index.toNumber()} in type values`);

  return type;
}

export function getInkTypes (project: InkProject, indexes: MtLookupTypeId[]): MtTypeIdDef[] {
  return indexes.map((index): MtTypeIdDef => getInkType(project, index));
}
