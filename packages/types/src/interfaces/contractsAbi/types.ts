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

/** @name MtField */
export interface MtField extends Struct {
  readonly name: Option<MtLookupTextId>;
  readonly type: MtLookupTypeId;
}

/** @name MtLookupTextId */
export interface MtLookupTextId extends u32 {}

/** @name MtLookupTypeId */
export interface MtLookupTypeId extends u32 {}

/** @name MtRegistry */
export interface MtRegistry extends Struct {
  readonly strings: Vec<Text>;
  readonly types: Vec<MtType>;
}

/** @name MtType */
export interface MtType extends Enum {
  readonly isComposite: boolean;
  readonly asComposite: MtTypeComposite;
  readonly isVariant: boolean;
  readonly asVariant: MtTypeVariant;
  readonly isSlice: boolean;
  readonly asSlice: MtTypeSlice;
  readonly isArray: boolean;
  readonly asArray: MtTypeArray;
  readonly isTuple: boolean;
  readonly asTuple: MtTypeTuple;
  readonly isPrimitive: boolean;
  readonly asPrimitive: MtTypePrimitive;
}

/** @name MtTypeArray */
export interface MtTypeArray extends Struct {
  readonly len: u16;
  readonly type: MtLookupTypeId;
}

/** @name MtTypeComposite */
export interface MtTypeComposite extends Struct {
  readonly name: MtLookupTextId;
  readonly namespace: Vec<MtLookupTextId>;
  readonly params: Vec<MtLookupTypeId>;
  readonly fields: Vec<MtField>;
}

/** @name MtTypePrimitive */
export interface MtTypePrimitive extends Enum {
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

/** @name MtTypeSlice */
export interface MtTypeSlice extends Struct {
  readonly type: MtLookupTypeId;
}

/** @name MtTypeTuple */
export interface MtTypeTuple extends Vec<MtLookupTypeId> {}

/** @name MtTypeVariant */
export interface MtTypeVariant extends Struct {
  readonly name: MtLookupTextId;
  readonly namespace: Vec<MtLookupTextId>;
  readonly params: Vec<MtLookupTypeId>;
  readonly variants: Vec<MtVariant>;
}

/** @name MtVariant */
export interface MtVariant extends Struct {
  readonly name: MtLookupTextId;
  readonly fields: Vec<MtField>;
  readonly discriminant: Option<u64>;
}

export type PHANTOM_CONTRACTSABI = 'contractsAbi';
