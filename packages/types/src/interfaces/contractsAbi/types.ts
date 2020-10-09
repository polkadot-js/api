// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { BTreeMap, Enum, Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { Bytes, Text, bool, u16, u32, u64 } from '@polkadot/types/primitive';

/** @name InkConstructorSpec */
export interface InkConstructorSpec extends Struct {
  readonly name: Text;
  readonly selector: InkSelector;
  readonly args: Vec<InkMessageParamSpec>;
  readonly docs: Vec<Text>;
}

/** @name InkContractSpec */
export interface InkContractSpec extends Struct {
  readonly constructors: Vec<InkConstructorSpec>;
  readonly messages: Vec<InkMessageSpec>;
  readonly events: Vec<InkEventSpec>;
  readonly docs: Vec<Text>;
}

/** @name InkCryptoHasher */
export interface InkCryptoHasher extends Enum {
  readonly isBlake2X256: boolean;
  readonly isSha2X256: boolean;
  readonly isKeccak256: boolean;
}

/** @name InkDiscriminant */
export interface InkDiscriminant extends u32 {}

/** @name InkDisplayName */
export interface InkDisplayName extends MtPath {}

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

/** @name InkLayoutArray */
export interface InkLayoutArray extends Struct {
  readonly offset: InkLayoutKey;
  readonly len: u32;
  readonly cellsPerElem: u64;
  readonly layout: InkStorageLayout;
}

/** @name InkLayoutCell */
export interface InkLayoutCell extends Struct {
  readonly key: InkLayoutKey;
  readonly ty: MtLookupTypeId;
}

/** @name InkLayoutEnum */
export interface InkLayoutEnum extends Struct {
  readonly dispatchKey: InkLayoutKey;
  readonly variants: BTreeMap<InkDiscriminant, InkLayoutStruct>;
}

/** @name InkLayoutHash */
export interface InkLayoutHash extends Struct {
  readonly offset: InkLayoutKey;
  readonly strategy: InkLayoutHashingStrategy;
  readonly layout: InkStorageLayout;
}

/** @name InkLayoutHashingStrategy */
export interface InkLayoutHashingStrategy extends Struct {
  readonly hasher: InkCryptoHasher;
  readonly postfix: Bytes;
  readonly prefix: Bytes;
}

/** @name InkLayoutKey */
export interface InkLayoutKey extends U8aFixed {}

/** @name InkLayoutStruct */
export interface InkLayoutStruct extends Struct {
  readonly fields: Vec<InkLayoutStructField>;
}

/** @name InkLayoutStructField */
export interface InkLayoutStructField extends Struct {
  readonly layout: InkStorageLayout;
  readonly name: Text;
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
  readonly source: InkProjectSource;
  readonly contract: InkProjectContract;
  readonly types: Vec<MtType>;
  readonly spec: InkContractSpec;
}

/** @name InkProjectContract */
export interface InkProjectContract extends Struct {
  readonly name: Text;
  readonly version: Text;
  readonly authors: Vec<Text>;
  readonly description: Option<Text>;
  readonly documentation: Option<Text>;
  readonly repository: Option<Text>;
  readonly homepage: Option<Text>;
  readonly license: Option<Text>;
}

/** @name InkProjectSource */
export interface InkProjectSource extends Struct {
  readonly hash: U8aFixed;
  readonly language: Text;
  readonly compiler: Text;
}

/** @name InkSelector */
export interface InkSelector extends U8aFixed {}

/** @name InkStorageLayout */
export interface InkStorageLayout extends Enum {
  readonly isCell: boolean;
  readonly asCell: InkLayoutCell;
  readonly isHash: boolean;
  readonly asHash: InkLayoutHash;
  readonly isArray: boolean;
  readonly asArray: InkLayoutArray;
  readonly isStruct: boolean;
  readonly asStruct: InkLayoutStruct;
  readonly isEnum: boolean;
  readonly asEnum: InkLayoutEnum;
}

/** @name InkTypeSpec */
export interface InkTypeSpec extends Struct {
  readonly type: MtLookupTypeId;
  readonly displayName: InkDisplayName;
}

/** @name MtField */
export interface MtField extends Struct {
  readonly name: Option<Text>;
  readonly type: MtLookupTypeId;
}

/** @name MtLookupTypeId */
export interface MtLookupTypeId extends u32 {}

/** @name MtPath */
export interface MtPath extends Vec<Text> {}

/** @name MtType */
export interface MtType extends Struct {
  readonly path: MtPath;
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
