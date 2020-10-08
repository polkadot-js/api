// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum, Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { Text, bool, u16, u32, u64 } from '@polkadot/types/primitive';
import { H256 } from '@polkadot/types/interfaces/runtime';

/** @name InkConstructorSpec */
export interface InkConstructorSpec extends Struct {
  readonly name: Text;
  readonly selector: InkSelector;
  readonly args: Vec<InkMessageParamSpec>;
  readonly docs: Vec<Text>;
}

/** @name InkContractContract */
export interface InkContractContract extends Struct {
  readonly authors: Vec<Text>;
  readonly name: Text;
  readonly version: Text;
}

/** @name InkContractSource */
export interface InkContractSource extends Struct {
  readonly compiler: Text;
  readonly hash: H256;
  readonly language: Text;
}

/** @name InkContractSpec */
export interface InkContractSpec extends Struct {
  readonly name: Text;
  readonly constructors: Vec<InkConstructorSpec>;
  readonly messages: Vec<InkMessageSpec>;
  readonly events: Vec<InkEventSpec>;
  readonly docs: Vec<Text>;
}

/** @name InkEventParamSpec */
export interface InkEventParamSpec extends Struct {
  readonly name: Text;
  readonly indexed: bool;
  readonly type: InkTypeSpec;
  readonly docs: Vec<Text>;
}

/** @name InkEventSpec */
export interface InkEventSpec extends Struct {
  readonly name: Text;
  readonly args: Vec<InkEventParamSpec>;
  readonly docs: Vec<Text>;
}

/** @name InkLayoutCell */
export interface InkLayoutCell extends Struct {
  readonly key: InkLayoutKey;
  readonly ty: MtLookupTypeId;
}

/** @name InkLayoutField */
export interface InkLayoutField extends Struct {
  readonly name: Text;
  readonly layout: InkStorageLayout;
}

/** @name InkLayoutKey */
export interface InkLayoutKey extends U8aFixed {}

/** @name InkLayoutRange */
export interface InkLayoutRange extends Struct {
  readonly offset: InkLayoutKey;
  readonly len: u32;
  readonly elemType: Text;
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
  readonly name: Text;
  readonly selector: InkSelector;
  readonly mutates: bool;
  readonly payable: bool;
  readonly args: Vec<InkMessageParamSpec>;
  readonly returnType: Option<InkTypeSpec>;
  readonly docs: Vec<Text>;
}

/** @name InkProject */
export interface InkProject extends Struct {
  readonly metadataVersion: Text;
  readonly source: InkContractSource;
  readonly contract: InkContractContract;
  readonly types: Vec<MtType>;
  readonly spec: InkContractSpec;
}

/** @name InkSelector */
export interface InkSelector extends U8aFixed {}

/** @name InkStorageLayout */
export interface InkStorageLayout extends Enum {
  readonly isCell: boolean;
  readonly asCell: InkLayoutCell;
  readonly isStruct: boolean;
  readonly asStruct: InkLayoutStruct;
}

/** @name InkTypeSpec */
export interface InkTypeSpec extends Struct {
  readonly id: MtLookupTypeId;
  readonly displayName: Text;
}

/** @name MtField */
export interface MtField extends Struct {
  readonly name: Option<Text>;
  readonly type: MtLookupTypeId;
}

/** @name MtLookupTypeId */
export interface MtLookupTypeId extends u32 {}

/** @name MtRegistry */
export interface MtRegistry extends Struct {
  readonly strings: Vec<Text>;
  readonly types: Vec<MtType>;
}

/** @name MtType */
export interface MtType extends Struct {
  readonly path: Vec<Text>;
  readonly params: Vec<MtLookupTypeId>;
  readonly def: MtTypeDef;
}

/** @name MtTypeDef */
export interface MtTypeDef extends Enum {
  readonly isComposite: boolean;
  readonly asComposite: MtTypeDefComposite;
  readonly isVariant: boolean;
  readonly asVariant: MtTypeDefVariant;
  readonly isSequence: boolean;
  readonly asSequence: MtTypeDefSequence;
  readonly isArray: boolean;
  readonly asArray: MtTypeDefArray;
  readonly isTuple: boolean;
  readonly asTuple: MtTypeDefTuple;
  readonly isPrimitive: boolean;
  readonly asPrimitive: MtTypeDefPrimitive;
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

/** @name MtTypeDefTuple */
export interface MtTypeDefTuple extends Vec<MtLookupTypeId> {}

/** @name MtTypeDefVariant */
export interface MtTypeDefVariant extends Struct {
  readonly variants: Vec<MtVariant>;
}

/** @name MtVariant */
export interface MtVariant extends Struct {
  readonly name: Text;
  readonly fields: Vec<MtField>;
  readonly discriminant: Option<u64>;
}

export type PHANTOM_CONTRACTSABI = 'contractsAbi';
