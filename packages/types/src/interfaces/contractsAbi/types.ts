// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum, Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { Text, bool, u16, u32, u64 } from '@polkadot/types/primitive';

/** @name InkConstructorSpec */
export interface InkConstructorSpec extends Struct {
  readonly name: MtLookupTextId;
  readonly selector: InkSelector;
  readonly args: Vec<InkMessageParamSpec>;
  readonly docs: Vec<Text>;
}

/** @name InkContractSpec */
export interface InkContractSpec extends Struct {
  readonly name: MtLookupTextId;
  readonly constructors: Vec<InkConstructorSpec>;
  readonly messages: Vec<InkMessageSpec>;
  readonly events: Vec<InkEventSpec>;
  readonly docs: Vec<Text>;
}

/** @name InkEventParamSpec */
export interface InkEventParamSpec extends Struct {
  readonly name: MtLookupTextId;
  readonly indexed: bool;
  readonly type: InkTypeSpec;
  readonly docs: Vec<Text>;
}

/** @name InkEventSpec */
export interface InkEventSpec extends Struct {
  readonly name: MtLookupTextId;
  readonly args: Vec<InkEventParamSpec>;
  readonly docs: Vec<Text>;
}

/** @name InkLayoutField */
export interface InkLayoutField extends Struct {
  readonly name: MtLookupTextId;
  readonly layout: InkStorageLayout;
}

/** @name InkLayoutKey */
export interface InkLayoutKey extends U8aFixed {}

/** @name InkLayoutRange */
export interface InkLayoutRange extends Struct {
  readonly offset: InkLayoutKey;
  readonly len: u32;
  readonly elemType: MtLookupTextId;
}

/** @name InkLayoutStruct */
export interface InkLayoutStruct extends Struct {
  readonly type: MtLookupTextId;
  readonly fields: Vec<InkLayoutField>;
}

/** @name InkMessageParamSpec */
export interface InkMessageParamSpec extends Struct {
  readonly name: MtLookupTextId;
  readonly type: InkTypeSpec;
}

/** @name InkMessageSpec */
export interface InkMessageSpec extends Struct {
  readonly name: MtLookupTextId;
  readonly selector: InkSelector;
  readonly mutates: bool;
  readonly args: Vec<InkMessageParamSpec>;
  readonly returnType: Option<InkTypeSpec>;
  readonly docs: Vec<Text>;
}

/** @name InkProject */
export interface InkProject extends Struct {
  readonly lookup: MtRegistry;
  readonly storage: InkStorageLayout;
  readonly contract: InkContractSpec;
}

/** @name InkSelector */
export interface InkSelector extends U8aFixed {}

/** @name InkStorageLayout */
export interface InkStorageLayout extends Enum {
  readonly isRange: boolean;
  readonly asRange: InkLayoutRange;
  readonly isStruct: boolean;
  readonly asStruct: InkLayoutStruct;
}

/** @name InkTypeSpec */
export interface InkTypeSpec extends Struct {
  readonly id: MtLookupTypeId;
  readonly displayName: MtLookupTextId;
}

/** @name MtClikeEnumVariant */
export interface MtClikeEnumVariant extends Struct {
  readonly name: MtLookupTextId;
  readonly discriminant: u64;
}

/** @name MtEnumVariant */
export interface MtEnumVariant extends Enum {
  readonly isUnit: boolean;
  readonly asUnit: MtEnumVariantUnit;
  readonly isStruct: boolean;
  readonly asStruct: MtEnumVariantStruct;
  readonly isTupleStruct: boolean;
  readonly asTupleStruct: MtEnumVariantTupleStruct;
}

/** @name MtEnumVariantStruct */
export interface MtEnumVariantStruct extends Struct {
  readonly name: MtLookupTextId;
  readonly fields: Vec<MtNamedField>;
}

/** @name MtEnumVariantTupleStruct */
export interface MtEnumVariantTupleStruct extends Struct {
  readonly name: MtLookupTextId;
  readonly types: Vec<MtLookupTypeId>;
}

/** @name MtEnumVariantUnit */
export interface MtEnumVariantUnit extends Struct {
  readonly name: MtLookupTextId;
}

/** @name MtLookupTextId */
export interface MtLookupTextId extends u32 {}

/** @name MtLookupTypeId */
export interface MtLookupTypeId extends u32 {}

/** @name MtNamedField */
export interface MtNamedField extends Struct {
  readonly name: MtLookupTextId;
  readonly type: MtLookupTypeId;
}

/** @name MtRegistry */
export interface MtRegistry extends Struct {
  readonly strings: Vec<Text>;
  readonly types: Vec<MtTypeIdDef>;
}

/** @name MtTypeDef */
export interface MtTypeDef extends Enum {
  readonly isBuiltin: boolean;
  readonly isStruct: boolean;
  readonly asStruct: MtTypeDefStruct;
  readonly isTupleStruct: boolean;
  readonly asTupleStruct: MtTypeDefTupleStruct;
  readonly isClikeEnum: boolean;
  readonly asClikeEnum: MtTypeDefClikeEnum;
  readonly isEnum: boolean;
  readonly asEnum: MtTypeDefEnum;
  readonly isUnion: boolean;
  readonly asUnion: MtTypeDefUnion;
}

/** @name MtTypeDefClikeEnum */
export interface MtTypeDefClikeEnum extends Struct {
  readonly variants: Vec<MtClikeEnumVariant>;
}

/** @name MtTypeDefEnum */
export interface MtTypeDefEnum extends Struct {
  readonly variants: Vec<MtEnumVariant>;
}

/** @name MtTypeDefStruct */
export interface MtTypeDefStruct extends Struct {
  readonly fields: Vec<MtNamedField>;
}

/** @name MtTypeDefTupleStruct */
export interface MtTypeDefTupleStruct extends Struct {
  readonly types: Vec<MtLookupTypeId>;
}

/** @name MtTypeDefUnion */
export interface MtTypeDefUnion extends Struct {
  readonly fields: Vec<MtNamedField>;
}

/** @name MtTypeId */
export interface MtTypeId extends Enum {
  readonly isCustom: boolean;
  readonly asCustom: MtTypeIdCustom;
  readonly isSlice: boolean;
  readonly asSlice: MtTypeIdSlice;
  readonly isArray: boolean;
  readonly asArray: MtTypeIdArray;
  readonly isTuple: boolean;
  readonly asTuple: MtTypeIdTuple;
  readonly isPrimitive: boolean;
  readonly asPrimitive: MtTypeIdPrimitive;
}

/** @name MtTypeIdArray */
export interface MtTypeIdArray extends Struct {
  readonly len: u16;
  readonly type: MtLookupTypeId;
}

/** @name MtTypeIdCustom */
export interface MtTypeIdCustom extends Struct {
  readonly name: MtLookupTextId;
  readonly namespace: Vec<MtLookupTextId>;
  readonly params: Vec<MtLookupTypeId>;
}

/** @name MtTypeIdDef */
export interface MtTypeIdDef extends Struct {
  readonly id: MtTypeId;
  readonly def: MtTypeDef;
}

/** @name MtTypeIdPrimitive */
export interface MtTypeIdPrimitive extends Enum {
  readonly isBool: boolean;
  readonly isChar: boolean;
  readonly isStr: boolean;
  readonly isU8: boolean;
  readonly isU16: boolean;
  readonly isU32: boolean;
  readonly isU64: boolean;
  readonly isU128: boolean;
  readonly isI8: boolean;
  readonly isI16: boolean;
  readonly isI32: boolean;
  readonly isI64: boolean;
  readonly isI128: boolean;
}

/** @name MtTypeIdSlice */
export interface MtTypeIdSlice extends Struct {
  readonly type: MtLookupTypeId;
}

/** @name MtTypeIdTuple */
export interface MtTypeIdTuple extends Vec<MtTypeId> {}

export type PHANTOM_CONTRACTSABI = 'contractsAbi';
