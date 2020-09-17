// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Codec, InterfaceTypes } from '../types';

// Type which says: if `K` is in the InterfaceTypes, then return InterfaceTypes[K], else fallback to T
export type FromReg<T extends Codec, K extends string> = K extends keyof InterfaceTypes
  ? InterfaceTypes[K]
  : T;

export enum TypeDefInfo {
  BTreeMap,
  BTreeSet,
  Compact,
  Enum,
  Linkage,
  Option,
  Plain,
  Result,
  Set,
  Struct,
  Tuple,
  Vec,
  VecFixed,
  HashMap,
  Int,
  UInt,
  DoNotConstruct,
  // anything not fully supported (keep this as the last entry)
  Null
}

export interface TypeDefExtEnumDiscriminant {
  discriminant: number;
}

export interface TypeDef {
  alias?: Map<string, string>;
  info: TypeDefInfo;
  index?: number;
  displayName?: string;
  ext?: TypeDefExtEnumDiscriminant; // add additional here as required
  length?: number;
  name?: string;
  namespace?: string;
  params?: TypeDef[];
  type: string;
  sub?: TypeDef | TypeDef[];
}

export type TypeIndex = number;

export type StringIndex = number;

export enum MetaTypeInfo {
  BuiltinPlain,
  BuiltinTuple,
  BuiltinVec,
  BuiltinVecFixed,
  Enum,
  ClikeEnum,
  Struct,
  TupleStruct,
  Null,
}

export type MetaTypeIdPrimitive = string;

export type MetaTypeIdTuple = TypeIndex[];

export interface MetaTypeIdCustom {
  'custom.name': StringIndex;
  'custom.namespace'?: StringIndex[];
  'custom.params'?: TypeIndex[];
}

export interface MetaTypeIdVec {
  'slice.type': TypeIndex;
}

export interface MetaTypeIdVecFixed {
  'array.len': number;
  'array.type': TypeIndex;
}

export type MetaTypeId = MetaTypeIdPrimitive | MetaTypeIdTuple | MetaTypeIdVec | MetaTypeIdVecFixed | MetaTypeIdCustom;
// MetaTypeIdPrimitive | MetaTypeIdTuple | MetaTypeIdArray | MetaTypeIdCustom;
// export type MetaTypeId = Record<string, any>;

export interface MetaTypeDefClikeEnumVariant {
  name: StringIndex;
  discriminant: number;
}

export interface MetaTypeDefClikeEnum {
  'clike_enum.variants': MetaTypeDefClikeEnumVariant[];
}

export type MetaTypeDefBuiltIn = 'builtin';

export interface MetaTypeDefEnumVariantUnit {
  'unit_variant.name': StringIndex;
}

export interface MetaTypeDefEnumVariantTupleStruct {
  'tuple_struct_variant.name': StringIndex;
  'tuple_struct_variant.types': TypeIndex[];
}

export interface MetaTypeDefStructField {
  name: StringIndex;
  type: TypeIndex;
}

export interface MetaTypeDefEnumVariantStruct {
  'struct_variant.name': StringIndex;
  'struct_variant.fields': MetaTypeDefStructField[];
}

export type MetaTypeDefEnumVariant = MetaTypeDefEnumVariantUnit | MetaTypeDefEnumVariantTupleStruct | MetaTypeDefEnumVariantStruct;

export interface MetaTypeDefEnum {
  'enum.variants': MetaTypeDefEnumVariant[];
}

export type MetaTypeDefUnionField = MetaTypeDefStructField;

export interface MetaTypeDefStruct {
  'struct.fields': MetaTypeDefStructField[];
}

export interface MetaTypeDefTupleStruct {
  'tuple_struct.types': TypeIndex[];
}

export interface MetaTypeDefUnion {
  'union.fields': MetaTypeDefUnionField[];
}

export type MetaTypeDef = MetaTypeDefBuiltIn | MetaTypeDefClikeEnum | MetaTypeDefEnum | MetaTypeDefStruct | MetaTypeDefTupleStruct | MetaTypeDefUnion;

export interface MetaType {
  def: MetaTypeDef;
  id: MetaTypeId | null;
}

export enum MetaRegistryItem {
  String,
  Type,
  TypeDef
}

export interface MetaRegistryJson {
  registry: {
    strings: string[];
    types: MetaType[];
  };
}
