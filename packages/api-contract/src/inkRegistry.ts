// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InkProject, MtLookupTextId, MtLookupTypeId, MtTypeIdDef, MtTypeId } from '@polkadot/types/interfaces';
import { InterfaceTypes } from '@polkadot/types/types';

import { assert, isUndefined } from '@polkadot/util';

// this maps through the the enum defintion in types/interfaces/contractsAbi/defintions.ts
const PRIMITIVES: InterfaceTypes[] = ['bool', 'u8', 'Text', 'u8', 'u16', 'u32', 'u64', 'u128', 'i8', 'i16', 'i32', 'i64', 'i128'];

export function getInkPrimitive (_project: InkProject, typeId: MtTypeId): InterfaceTypes {
  const primitive = PRIMITIVES[typeId.asPrimitive.index];

  assert(!isUndefined(primitive), `getInkPrimitive:: Unable to convert ${typeId} to primitive`);

  return primitive;
}

function getRegistryOffset (index: MtLookupTextId | MtLookupTypeId): number {
  return index.toNumber() - 1;
}

export function getInkString (project: InkProject, id: MtLookupTextId): string {
  const offset = getRegistryOffset(id);
  const value = project.lookup.strings[offset];

  assert(!isUndefined(value), `getInkString:: Unable to find ${id.toNumber()} in string values`);

  return value.toString();
}

export function getInkStrings (project: InkProject, ids: MtLookupTextId[]): string[] {
  return ids.map((id): string => getInkString(project, id));
}

export function getInkType (project: InkProject, id: MtLookupTypeId): MtTypeIdDef {
  const offset = getRegistryOffset(id);
  const type = project.lookup.types[offset];

  assert(!isUndefined(type), `getInkType:: Unable to find ${id.toNumber()} in type values`);

  return type;
}

export function getInkTypes (project: InkProject, ids: MtLookupTypeId[]): MtTypeIdDef[] {
  return ids.map((id): MtTypeIdDef => getInkType(project, id));
}
