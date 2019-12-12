// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InkProject, MtTypeDef, MtTypeIdDef, MtTypeIdArray, MtTypeIdCustom, MtTypeIdPrimitive, MtTypeIdSlice, MtTypeDefStruct, MtTypeDefTupleStruct, MtTypeDefClikeEnum } from '@polkadot/types/interfaces';
import { InterfaceTypes } from '@polkadot/types/types';

import { assert, isUndefined } from '@polkadot/util';

import { getInkString, getInkStrings, getInkType, getInkTypes } from './inkRegistry';
import sanitize from '@polkadot/types/codec/create/sanitize';

// this maps through the the enum defintion in types/interfaces/contractsAbi/defintions.ts
const PRIMITIVES: InterfaceTypes[] = ['bool', 'u8', 'Text', 'u8', 'u16', 'u32', 'u64', 'u128', 'i8', 'i16', 'i32', 'i64', 'i128'];

// convert a typeid into a VecFixed
export function getTypeIdArray (project: InkProject, typeId: MtTypeIdArray): [null, string] {
  const [, type] = convertLookupIdDef(project, getInkType(project, typeId.type));

  return [null, `[${type}; ${typeId.len}]`];
}

// convert a typeid into the custom
export function getTypeIdCustom (project: InkProject, typeId: MtTypeIdCustom, def: MtTypeDef): [string, string] {
  const inner = convertLookupDef(project, def);
  const name = getInkString(project, typeId.name);
  const namespace = getInkStrings(project, typeId.namespace);
  const params = convertLookupIdDefs(project, getInkTypes(project, typeId.params));
  const paramStr = params.length
    ? `<${params.map(([, type]): string => type).join(', ')}>`
    : '';

  return [`${namespace.join('::')}${namespace.length ? '::' : ''}${name}${paramStr}`, inner];
}

// convert a typeid into a primitive
export function getTypeIdPrimitive (_project: InkProject, typeId: MtTypeIdPrimitive): [null, InterfaceTypes] {
  const primitive = PRIMITIVES[typeId.index];

  assert(!isUndefined(primitive), `getInkPrimitive:: Unable to convert ${typeId} to primitive`);

  return [null, primitive];
}

// convert a typeid into the underlying Vec
export function getTypeIdSlice (project: InkProject, typeId: MtTypeIdSlice): [null, string] {
  const [, type] = convertLookupIdDef(project, getInkType(project, typeId.type));

  return [null, `Vec<${type}>`];
}

function _convertLookupIdDef (project: InkProject, type: MtTypeIdDef): [string | null, string] {
  if (type.id.isArray) {
    return getTypeIdArray(project, type.id.asArray);
  } else if (type.id.isCustom) {
    return getTypeIdCustom(project, type.id.asCustom, type.def);
  } else if (type.id.isPrimitive) {
    return getTypeIdPrimitive(project, type.id.asPrimitive);
  } else if (type.id.isSlice) {
    return getTypeIdSlice(project, type.id.asSlice);
  }

  throw new Error(`convertLookupIdDef:: Unable to create type from ${type}`);
}

export function convertLookupIdDef (project: InkProject, type: MtTypeIdDef): [string | null, string] {
  const [name, extracted] = _convertLookupIdDef(project, type);

  return [name ? sanitize(name) : null, sanitize(extracted)];
}

export function convertLookupIdDefs (project: InkProject, types: MtTypeIdDef[]): [string | null, string][] {
  return types.map((type): [string | null, string] => convertLookupIdDef(project, type));
}

export function convertLookupProject (project: InkProject): [string | null, string][] {
  return convertLookupIdDefs(project, project.lookup.types);
}

export function getTypeDefCEnum (project: InkProject, def: MtTypeDefClikeEnum): string {
  // FIXME We are currently ignoring the discriminant
  const entries = def.variants.map(({ name }): string => getInkString(project, name));

  return `{ _enum: [${entries.join(', ')}] }`;
}

export function getTypeDefStruct (project: InkProject, def: MtTypeDefStruct): string {
  const fields = def.fields.map((field): string => {
    const name = getInkString(project, field.name);
    const [, type] = convertLookupIdDef(project, getInkType(project, field.type));

    return `"${name}": "${type}"`;
  });

  return `{ ${fields.join(', ')} }`;
}

export function getTypeDefTupleStruct (project: InkProject, def: MtTypeDefTupleStruct): string {
  const fields = convertLookupIdDefs(project, getInkTypes(project, def.types));

  return `(${fields.map(([, type]): string => type).join(', ')})`;
}

export function convertLookupDef (project: InkProject, def: MtTypeDef): string {
  if (def.isBuiltin) {
    return '';
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
