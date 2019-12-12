// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InkProject, MtLookupTextId, MtLookupTypeId, MtTypeIdDef } from '@polkadot/types/interfaces';

import { assert, isUndefined } from '@polkadot/util';

// convert the offset into project-specific, index-1
export function getRegistryOffset (id: MtLookupTextId | MtLookupTypeId): number {
  return id.toNumber() - 1;
}

// extract a single string from the project
export function getInkString (project: InkProject, id: MtLookupTextId): string {
  const offset = getRegistryOffset(id);
  const value = project.lookup.strings[offset];

  assert(!isUndefined(value), `getInkString:: Unable to find ${id.toNumber()} in string values`);

  return value.toString();
}

// extract and array of strings from the project
export function getInkStrings (project: InkProject, ids: MtLookupTextId[]): string[] {
  return ids.map((id): string => getInkString(project, id));
}

// extract a single ink type defintion from the project
export function getInkType (project: InkProject, id: MtLookupTypeId): MtTypeIdDef {
  const offset = getRegistryOffset(id);
  const type = project.lookup.types[offset];

  assert(!isUndefined(type), `getInkType:: Unable to find ${id.toNumber()} in type values`);

  return type;
}

// extract and array of ink type defs from the project
export function getInkTypes (project: InkProject, ids: MtLookupTypeId[]): MtTypeIdDef[] {
  return ids.map((id): MtTypeIdDef => getInkType(project, id));
}
