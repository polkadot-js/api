// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InkProject, MtLookupTypeId, MtTypeDef, MtTypeId, MtTypeIdDef, MtTypeIdArray, MtTypeIdCustom, MtTypeIdPrimitive, MtTypeIdSlice, MtTypeDefStruct, MtTypeDefTupleStruct, MtTypeDefClikeEnum } from '@polkadot/types/interfaces';
import { InterfaceTypes } from '@polkadot/types/types';

import { assert, isUndefined } from '@polkadot/util';

import { getInkString, getInkStrings, getInkType } from './inkRegistry';
import sanitize from '@polkadot/types/codec/create/sanitize';

// this maps through the the enum defintion in types/interfaces/contractsAbi/defintions.ts
const PRIMITIVES: InterfaceTypes[] = ['bool', 'u8', 'Text', 'u8', 'u16', 'u32', 'u64', 'u128', 'i8', 'i16', 'i32', 'i64', 'i128'];

function sanitizeOrNull (type: string | null): string | null {
  return type
    ? sanitize(type)
    : null;
}

function getTypeName (project: InkProject, lookup: MtLookupTypeId): string | null {
  const [id, type] = convertLookupIdDef(project, getInkType(project, lookup));

  return id || type;
}

export function getTypeDefCEnum (project: InkProject, defCE: MtTypeDefClikeEnum): string | null {
  // FIXME We are currently ignoring the discriminant
  const entries = defCE.variants.map(({ name }): string => getInkString(project, name));

  return entries.length
    ? `{_enum:[${entries.join(', ')}]}`
    : null;
}

export function getTypeDefStruct (project: InkProject, defStruct: MtTypeDefStruct): string | null {
  const fields = defStruct.fields.map((field): string => {
    const name = getInkString(project, field.name);
    const type = getTypeName(project, field.type);

    return `"${name}": "${type}"`;
  });

  return fields.length
    ? `{${fields.join(',')}}`
    : null;
}

export function getTypeDefTupleStruct (project: InkProject, defTs: MtTypeDefTupleStruct): string | null {
  const types = defTs.types.map((type): string | null => getTypeName(project, type));

  return types.length
    ? `(${types.join(', ')})`
    : null;
}

export function getTypeDef (project: InkProject, def: MtTypeDef): string | null {
  if (def.isBuiltin) {
    return null;
  } else if (def.isClikeEnum) {
    return getTypeDefCEnum(project, def.asClikeEnum);
  } else if (def.isEnum) {
    // TODO
  } else if (def.isStruct) {
    return getTypeDefStruct(project, def.asStruct);
  } else if (def.isTupleStruct) {
    return getTypeDefTupleStruct(project, def.asTupleStruct);
  }

  // this will throw for isUnion
  throw new Error(`convertLookupDef:: Unable to create def from ${def}`);
}

// convert a typeid into a VecFixed
export function getTypeIdArray (project: InkProject, idArray: MtTypeIdArray): string {
  const type = getTypeName(project, idArray.type);

  return `[${type};${idArray.len}]`;
}

// convert a typeid into the custom
export function getTypeIdCustom (project: InkProject, idCustom: MtTypeIdCustom): string {
  const name = getInkString(project, idCustom.name);
  const namespace = getInkStrings(project, idCustom.namespace);
  const params = idCustom.params.length
    ? `<${idCustom.params.map((type): string | null => getTypeName(project, type)).join(', ')}>`
    : '';

  return `${namespace.join('::')}${namespace.length ? '::' : ''}${name}${params}`;
}

// convert a typeid into a primitive
export function getTypeIdPrimitive (_project: InkProject, idPrim: MtTypeIdPrimitive): InterfaceTypes {
  const primitive = PRIMITIVES[idPrim.index];

  assert(!isUndefined(primitive), `getInkPrimitive:: Unable to convert ${idPrim} to primitive`);

  return primitive;
}

// convert a typeid into the underlying Vec
export function getTypeIdSlice (project: InkProject,isSlice: MtTypeIdSlice): string {
  const type = getTypeName(project, isSlice.type);

  return `Vec<${type}>`;
}

// convert a typeid into the underlying id string
export function getTypeId (project: InkProject, id: MtTypeId): string {
  if (id.isArray) {
    return getTypeIdArray(project, id.asArray);
  } else if (id.isCustom) {
    return getTypeIdCustom(project, id.asCustom);
  } else if (id.isPrimitive) {
    return getTypeIdPrimitive(project, id.asPrimitive);
  } else if (id.isSlice) {
    return getTypeIdSlice(project, id.asSlice);
  }

  throw new Error(`convertLookupIdDef:: Unable to create type from ${id}`);
}

export function convertLookupIdDef (project: InkProject, mt: MtTypeIdDef): [string | null, string | null] {
  return [
    sanitizeOrNull(getTypeId(project, mt.id)),
    sanitizeOrNull(getTypeDef(project, mt.def))
  ];
}

export function convertLookupIdDefs (project: InkProject, types: MtTypeIdDef[]): [string | null, string | null][] {
  return types.map((type): [string | null, string | null] =>
    convertLookupIdDef(project, type)
  );
}

export function convertLookupProject (project: InkProject): [string | null, string | null][] {
  return convertLookupIdDefs(project, project.lookup.types);
}
