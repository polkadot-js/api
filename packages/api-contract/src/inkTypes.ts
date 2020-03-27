// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import {
  InkProject,
  MtField,
  MtLookupTypeId,
  MtLookupTextId,
  MtType,
  MtTypeArray,
  MtTypeComposite,
  MtTypeVariant,
  MtTypePrimitive,
  MtTypeSlice,
  MtVariant, MtTypeTuple,
} from '@polkadot/types/interfaces';
import { InterfaceTypes } from '@polkadot/types/types';

import { assert, isUndefined } from '@polkadot/util';

import { getInkString, getInkStrings, getInkType } from './inkRegistry';
import sanitize from '@polkadot/types/create/sanitize';

// this maps through the the enum defintion in types/interfaces/contractsAbi/defintions.ts
const PRIMITIVES: (keyof InterfaceTypes)[] = ['bool', 'u8', 'Text', 'u8', 'u16', 'u32', 'u64', 'u128', 'i8', 'i16', 'i32', 'i64', 'i128'];

interface ITypePath
{
  name: MtLookupTextId,
  namespace: MtLookupTextId[],
  params: MtLookupTypeId[]
};

function sanitizeOrNull (type: string | null): string | null {
  return type
    ? sanitize(type)
    : null;
}

function getTypeName (project: InkProject, lookup: MtLookupTypeId): string {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const [, id] = convertType(project, getInkType(project, lookup), lookup.toNumber());

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

// convert a typeid into a VecFixed
function getTypeArray (project: InkProject, idArray: MtTypeArray): string {
  const type = getTypeName(project, idArray.type);

  return `[${type};${idArray.len}]`;
}

// convert a typeid into the custom
function resolveTypeFromPath (project: InkProject, path: ITypePath): string {
  const name = getInkString(project, path.name);
  const namespaces = getInkStrings(project, path.namespace);
  const params = path.params.length
    ? `<${path.params.map((type): string | null => getTypeName(project, type)).join(', ')}>`
    : '';
  const namespace = namespaces.length
    ? `${namespaces.join('::')}::`
    : '';

  return `${namespace}${name}${params}`;
}

// Fields must either be *all* named (e.g. a struct) or *all* unnamed (e.g a tuple)
function buildTypeDefFields (project: InkProject, typeFields: MtField[]): string {
  let allNamed = true;
  let allUnnamed = true;
  for (let field of typeFields) {
    allNamed = allNamed && field.name.isSome;
    allUnnamed = allUnnamed && field.name.isNone;
  }

  if (allNamed) {
    const fields = typeFields.map((field): string => {
      const type = getTypeName(project, field.type);

      const name = getInkString(project, field.name.unwrap());
      return `"${name}": ${JSON.stringify(type)}`;
    });

    return fields.length
      ? `{${fields.join(',')}}`
      : 'Null';
  }

  if (allUnnamed) {
    const fields = typeFields.map((field): string | null =>
      getTypeName(project, field.type)
    );

    return fields.length
      ? `(${fields.join(', ')})`
      : 'Null';
  }

  throw new Error(`buildTypeDefFields:: Fields must either be *all* named or *all* unnamed`);
}

function buildTypeDefVariant (project: InkProject, typeTuple: MtTypeVariant): string {
  // todo: construct variant type def
}

// convert a type definition into a primitive
function getTypePrimitive (_project: InkProject, idPrim: MtTypePrimitive): keyof InterfaceTypes {
  const primitive = PRIMITIVES[idPrim.index];

  assert(!isUndefined(primitive), `getTypePrimitive:: Unable to convert ${idPrim} to primitive`);

  return primitive;
}

// convert a type definition into the underlying Vec
function getTypeSlice (project: InkProject, idSlice: MtTypeSlice): string {
  const type = getTypeName(project, idSlice.type);

  return `Vec<${type}>`;
}

function getTypeTuple (project: InkProject, typeTuple: MtTypeTuple): string {
  const types = typeTuple.map((type): string | null => getTypeName(project, type));

  return types.length
    ? `(${types.join(', ')})`
    : 'Null';
}

function resolveType (project: InkProject, type: MtType): string {
  if (type.isComposite) {
    return resolveTypeFromPath(project, type.asComposite);
  } else if (type.isVariant) {
    return resolveTypeFromPath(project, type.asVariant);
  } else if (type.isArray) {
    return getTypeArray(project, type.asArray);
  } else if (type.isPrimitive) {
    return getTypePrimitive(project, type.asPrimitive);
  } else if (type.isSlice) {
    return getTypeSlice(project, type.asSlice);
  } else if (type.isTuple) {
    return getTypeTuple(project, type.asTuple);
  }

  throw new Error(`convertType:: Unable to create type from ${type}`);
}

// builds the type definition for any user defined complex type e.g structs/enums
function buildTypeDef (project: InkProject, type: MtType): string | null {
  if (type.isComposite) {
    return buildTypeDefFields(project, type.asComposite.fields);
  } else if (type.isVariant) {
    return buildTypeDefVariant(project, type.asVariant);
  } else {
    return null;
  }
}

function convertType (project: InkProject, type: MtType, index: number): [number, string, string | null] {
  const name = resolveType(project, type);
  const type_def = buildTypeDef(project, type);
  return [index, type_def ? `${index}::${name}` : name, type_def];
}

function convertTypes (project: InkProject, types: MtType[]): [number, string, string | null][] {
  return types.map((type, index): [number, string, string | null] =>
    convertType(project, type, index + 1)
  );
}

export function getProjectTypes (project: InkProject): [number, string, string | null][] {
  return convertTypes(project, project.lookup.types);
}
