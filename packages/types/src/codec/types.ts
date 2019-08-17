// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export enum TypeDefInfo {
  Compact,
  DoubleMap,
  Enum,
  Linkage,
  Option,
  Plain,
  Set,
  Struct,
  Tuple,
  Vec,
  VecFixed,
  // anything not fully supported (keep this as the last entry)
  Null
}

export interface TypeDefExtVecFixed {
  length: number;
  type: string;
}

export interface TypeDefExtEnumDiscriminant {
  discriminant: number;
}

export interface TypeDef {
  info: TypeDefInfo;
  index?: number;
  ext?: TypeDefExtVecFixed | TypeDefExtEnumDiscriminant; // add additional here as required
  name?: string;
  namespace?: string;
  type: string;
  sub?: TypeDef | TypeDef[];
}

export type TypeIndex = number;
export type StringIndex = number;

export type MetaTypeIdPrimitive = string;

export type MetaTypeIdTuple = TypeIndex[];

export interface MetaTypeIdArray {
  'array.len': number;
  'array.type': TypeIndex;
}

export interface MetaTypeIdCustom {
  'custom.name': StringIndex;
  'custom.namespace'?: StringIndex[];
  'custom.params'?: TypeIndex[];
}

export type MetaTypeId = MetaTypeIdPrimitive | MetaTypeIdTuple | MetaTypeIdArray | MetaTypeIdCustom;
// MetaTypeIdPrimitive | MetaTypeIdTuple | MetaTypeIdArray | MetaTypeIdCustom;
// export type MetaTypeId = Record<string, any>;

export interface MetaTypeDefStructField {
  name: StringIndex;
  type: TypeIndex;
}

export type MetaTypeDefBuiltIn = 'builtin';

export interface MetaTypeDefStruct {
  'struct.fields'?: MetaTypeDefStructField[];
}

export interface MetaTypeDefTupleStruct {
  'tuple_struct_variant.name'?: StringIndex;
  'tuple_struct.types': TypeIndex[];
}

export type MetaTypeDef = MetaTypeDefBuiltIn | MetaTypeDefStruct | MetaTypeDefTupleStruct;

export interface MetaType {
  def: MetaTypeDef;
  id: MetaTypeId | null;
}

export interface MetaRegistryJson {
  registry: {
    strings: string[];
    types: MetaType[];
  };
}
