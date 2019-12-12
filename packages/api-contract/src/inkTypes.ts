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

function getTypeName (project: InkProject, lookup: MtLookupTypeId): string {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const [, id] = convertIdDef(project, getInkType(project, lookup), lookup.toNumber());

  return id;
}

function getTypeDefCEnum (project: InkProject, defCE: MtTypeDefClikeEnum): string {
  // FIXME We are currently ignoring the discriminant
  const entries = defCE.variants.map(({ name }): string => getInkString(project, name));

  return entries.length
    ? `{_enum:[${entries.join(', ')}]}`
    : 'Null';
}

function getTypeDefStruct (project: InkProject, defStruct: MtTypeDefStruct): string {
  const fields = defStruct.fields.map((field): string => {
    const name = getInkString(project, field.name);
    const type = getTypeName(project, field.type);

    return `"${name}": ${JSON.stringify(type)}`;
  });

  return fields.length
    ? `{${fields.join(',')}}`
    : 'Null';
}

function getTypeDefTupleStruct (project: InkProject, defTs: MtTypeDefTupleStruct): string {
  const types = defTs.types.map((type): string | null => getTypeName(project, type));

  return types.length
    ? `(${types.join(', ')})`
    : 'Null';
}

function getTypeDef (project: InkProject, def: MtTypeDef): string | null {
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
function getTypeIdArray (project: InkProject, idArray: MtTypeIdArray): string {
  const type = getTypeName(project, idArray.type);

  return `[${type};${idArray.len}]`;
}

// convert a typeid into the custom
function getTypeIdCustom (project: InkProject, idCustom: MtTypeIdCustom): string {
  const name = getInkString(project, idCustom.name);
  const namespaces = getInkStrings(project, idCustom.namespace);
  const params = idCustom.params.length
    ? `<${idCustom.params.map((type): string | null => getTypeName(project, type)).join(', ')}>`
    : '';
  const namespace = namespaces.length
    ? `${namespaces.join('::')}::`
    : '';

  return `${namespace}${name}${params}`;
}

// convert a typeid into a primitive
function getTypeIdPrimitive (_project: InkProject, idPrim: MtTypeIdPrimitive): InterfaceTypes {
  const primitive = PRIMITIVES[idPrim.index];

  assert(!isUndefined(primitive), `getInkPrimitive:: Unable to convert ${idPrim} to primitive`);

  return primitive;
}

// convert a typeid into the underlying Vec
function getTypeIdSlice (project: InkProject, idSlice: MtTypeIdSlice): string {
  const type = getTypeName(project, idSlice.type);

  return `Vec<${type}>`;
}

// convert a typeid into the underlying id string
function getTypeId (project: InkProject, id: MtTypeId): string {
  if (id.isArray) {
    return getTypeIdArray(project, id.asArray);
  } else if (id.isCustom) {
    return getTypeIdCustom(project, id.asCustom);
  } else if (id.isPrimitive) {
    return getTypeIdPrimitive(project, id.asPrimitive);
  } else if (id.isSlice) {
    return getTypeIdSlice(project, id.asSlice);
  }

  throw new Error(`convertIdDef:: Unable to create type from ${id}`);
}

function convertIdDef (project: InkProject, { id, def }: MtTypeIdDef, index: number): [number, string, string | null] {
  const name = sanitize(getTypeId(project, id));
  const type = sanitizeOrNull(getTypeDef(project, def));

  return [index, type ? `${index}::${name}` : name, type];
}

function convertIdDefs (project: InkProject, types: MtTypeIdDef[]): [number, string, string | null][] {
  return types.map((type, index): [number, string, string | null] =>
    convertIdDef(project, type, index + 1)
  );
}

export function getProjectTypes (project: InkProject): [number, string, string | null][] {
  return convertIdDefs(project, project.lookup.types);
}
