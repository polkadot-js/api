// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { BTreeMap, Enum, Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
<<<<<<< HEAD
import { Bytes, Text, bool, u16, u32, u64, usize } from '@polkadot/types/primitive';
=======
import { Bytes, Text, bool, u16, u32, u64 } from '@polkadot/types/primitive';
>>>>>>> master

/** @name InkConstructorSpec */
export interface InkConstructorSpec extends Struct {
  readonly name: Text;
  readonly selector: InkSelector;
  readonly args: Vec<InkMessageParamSpec>;
  readonly docs: Vec<Text>;
}

/** @name InkContractContract */
export interface InkContractContract extends Struct {
<<<<<<< HEAD
  readonly authors: Vec<Text>;
  readonly name: Text;
  readonly version: Text;
=======
  readonly name: Text;
  readonly version: Text;
  readonly authors: Vec<Text>;
  readonly description: Option<Text>;
  readonly documentation: Option<Text>;
  readonly repository: Option<Text>;
  readonly homepage: Option<Text>;
  readonly license: Option<Text>;
>>>>>>> master
}

/** @name InkContractSource */
export interface InkContractSource extends Struct {
<<<<<<< HEAD
  readonly compiler: Text;
  readonly hash: U8aFixed;
  readonly language: Text;
=======
  readonly hash: U8aFixed;
  readonly language: Text;
  readonly compiler: Text;
>>>>>>> master
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
<<<<<<< HEAD
export interface InkDiscriminant extends usize {}

/** @name InkDisplayName */
export interface InkDisplayName extends InkPath {}
=======
export interface InkDiscriminant extends u32 {}

/** @name InkDisplayName */
export interface InkDisplayName extends MtPath {}
>>>>>>> master

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

<<<<<<< HEAD
/** @name InkPath */
export interface InkPath extends Vec<Text> {}

/** @name InkProject */
export interface InkProject extends Struct {
  readonly contract: InkContractContract;
  readonly metadata_version: Text;
  readonly source: InkContractSource;
=======
/** @name InkProject */
export interface InkProject extends Struct {
  readonly metadataVersion: Text;
  readonly source: InkContractSource;
  readonly contract: InkContractContract;
>>>>>>> master
  readonly spec: InkContractSpec;
  readonly storage: InkStorageLayout;
  readonly types: Vec<MtType>;
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

<<<<<<< HEAD
=======
/** @name MtPath */
export interface MtPath extends Vec<Text> {}

>>>>>>> master
/** @name MtType */
export interface MtType extends Struct {
  readonly def: MtTypeDef;
  readonly params: Vec<MtLookupTypeId>;
<<<<<<< HEAD
  readonly path: Vec<Text>;
=======
  readonly path: MtPath;
>>>>>>> master
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
<<<<<<< HEAD
  readonly isSlice: boolean;
  readonly asSlice: MtTypeDefSlice;
=======
>>>>>>> master
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

<<<<<<< HEAD
/** @name MtTypeDefSlice */
export interface MtTypeDefSlice extends Struct {
  readonly type: MtLookupTypeId;
}

=======
>>>>>>> master
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
