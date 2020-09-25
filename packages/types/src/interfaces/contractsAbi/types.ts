// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum, Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { Text, bool, u16, u32, u64 } from '@polkadot/types/primitive';

/** @name InkConstructorSpec */
export interface InkConstructorSpec extends Struct {
  readonly args: Vec<InkMessageParamSpec>;
  readonly docs: Vec<Text>;
  readonly name: Text;
  readonly selector: InkSelector;
}

/** @name InkContractSpec */
export interface InkContractSpec extends Struct {
  readonly constructors: Vec<InkConstructorSpec>;
  readonly docs: Vec<Text>;
  readonly events: Vec<InkEventSpec>;
  readonly messages: Vec<InkMessageSpec>;
  readonly name: Text;
}

/** @name InkEventParamSpec */
export interface InkEventParamSpec extends Struct {
  readonly docs: Vec<Text>;
  readonly indexed: bool;
  readonly name: Text;
  readonly type: InkTypeSpec;
}

/** @name InkEventSpec */
export interface InkEventSpec extends Struct {
  readonly args: Vec<InkEventParamSpec>;
  readonly docs: Vec<Text>;
  readonly name: Text;
}

/** @name InkLayoutArray */
export interface InkLayoutArray extends Struct {
  readonly cells_per_elem: u32;
  readonly layout: InkStorageLayout;
  readonly len: u32;
  readonly offset: InkLayoutKey;
}

/** @name InkLayoutCell */
export interface InkLayoutCell extends Struct {
  readonly key: InkLayoutKey;
  readonly ty: MtLookupTypeId;
}

/** @name InkLayoutField */
export interface InkLayoutField extends Struct {
  readonly layout: InkStorageLayout;
  readonly name: Text;
}

/** @name InkLayoutHash */
export interface InkLayoutHash extends Struct {
  readonly layout: InkStorageLayout;
  readonly offset: InkLayoutKey;
  readonly strategy: InkLayoutHashStrategy;
}

/** @name InkLayoutHashStrategy */
export interface InkLayoutHashStrategy extends Struct {
  readonly hasher: Text;
  readonly postfix: Text;
  readonly prefix: InkLayoutKey;
}

/** @name InkLayoutKey */
export interface InkLayoutKey extends U8aFixed {}

/** @name InkLayoutRange */
export interface InkLayoutRange extends Struct {
  readonly elemType: Text;
  readonly len: u32;
  readonly offset: InkLayoutKey;
}

/** @name InkLayoutStruct */
export interface InkLayoutStruct extends Struct {
  readonly fields: Vec<InkLayoutField>;
}

/** @name InkMessageParamSpec */
export interface InkMessageParamSpec extends Struct {
  readonly name: Text;
  readonly type: InkTypeSpec;
}

/** @name InkMessageSpec */
export interface InkMessageSpec extends Struct {
  readonly args: Vec<InkMessageParamSpec>;
  readonly docs: Vec<Text>;
  readonly mutates: bool;
  readonly name: Text;
  readonly returnType: Option<InkTypeSpec>;
  readonly selector: InkSelector;
}

/** @name InkProject */
export interface InkProject extends Struct {
  readonly spec: InkContractSpec;
  readonly storage: InkStorageLayout;
  readonly types: Vec<MtType>;
}

/** @name InkSelector */
export interface InkSelector extends U8aFixed {}

/** @name InkStorageLayout */
export interface InkStorageLayout extends Enum {
  readonly isArray: boolean;
  readonly asArray: InkLayoutArray;
  readonly isCell: boolean;
  readonly asCell: InkLayoutCell;
  readonly isHash: boolean;
  readonly asHash: InkLayoutHash;
  readonly isStruct: boolean;
  readonly asStruct: InkLayoutStruct;
}

/** @name InkTypeSpec */
export interface InkTypeSpec extends Struct {
  readonly displayName: Text;
  readonly id: MtLookupTypeId;
}

/** @name MtField */
export interface MtField extends Struct {
  readonly name: Option<Text>;
  readonly type: MtLookupTypeId;
}

/** @name MtLookupTypeId */
export interface MtLookupTypeId extends u32 {}

/** @name MtType */
export interface MtType extends Struct {
  readonly def: MtTypeDef;
  readonly params: Vec<MtLookupTypeId>;
  readonly path: Vec<Text>;
}

/** @name MtTypeDef */
export interface MtTypeDef extends Enum {
  readonly isArray: boolean;
  readonly asArray: MtTypeDefArray;
  readonly isComposite: boolean;
  readonly asComposite: MtTypeDefComposite;
  readonly isPrimitive: boolean;
  readonly asPrimitive: MtTypeDefPrimitive;
  readonly isSequence: boolean;
  readonly asSequence: MtTypeDefSequence;
  readonly isSlice: boolean;
  readonly asSlice: MtTypeDefSlice;
  readonly isTuple: boolean;
  readonly asTuple: MtTypeDefTuple;
  readonly isVariant: boolean;
  readonly asVariant: MtTypeDefVariant;
}

/** @name MtTypeDefArray */
export interface MtTypeDefArray extends Struct {
  readonly len: u16;
  readonly type: MtLookupTypeId;
}

/** @name MtTypeDefComposite */
export interface MtTypeDefComposite extends Struct {
  readonly fields: Vec<MtField>;
}

/** @name MtTypeDefPrimitive */
export interface MtTypeDefPrimitive extends Enum {
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

/** @name MtTypeDefSequence */
export interface MtTypeDefSequence extends Struct {
  readonly type: MtLookupTypeId;
}

/** @name MtTypeDefSlice */
export interface MtTypeDefSlice extends Struct {
  readonly type: MtLookupTypeId;
}

/** @name MtTypeDefTuple */
export interface MtTypeDefTuple extends Vec<MtLookupTypeId> {}

/** @name MtTypeDefVariant */
export interface MtTypeDefVariant extends Struct {
  readonly variants: Vec<MtVariant>;
}

/** @name MtVariant */
export interface MtVariant extends Struct {
  readonly discriminant: Option<u64>;
  readonly fields: Vec<MtField>;
  readonly name: Text;
}

export type PHANTOM_CONTRACTSABI = 'contractsAbi';
