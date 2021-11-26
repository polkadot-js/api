// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Enum, Option, Raw, Struct, Text, U8aFixed, Vec, bool, u32, u64 } from '@polkadot/types';
import type { PortableType } from '@polkadot/types/interfaces/metadata';
import type { Si0Type, SiLookupTypeId, SiPath } from '@polkadot/types/interfaces/scaleInfo';
import type { ITuple } from '@polkadot/types/types';

/** @name ContractConstructorSpec */
export interface ContractConstructorSpec extends Struct {
  readonly name: Text;
  readonly selector: ContractSelector;
  readonly args: Vec<ContractMessageParamSpec>;
  readonly docs: Vec<Text>;
}

/** @name ContractContractSpec */
export interface ContractContractSpec extends Struct {
  readonly constructors: Vec<ContractConstructorSpec>;
  readonly messages: Vec<ContractMessageSpec>;
  readonly events: Vec<ContractEventSpec>;
  readonly docs: Vec<Text>;
}

/** @name ContractCryptoHasher */
export interface ContractCryptoHasher extends Enum {
  readonly isBlake2x256: boolean;
  readonly isSha2x256: boolean;
  readonly isKeccak256: boolean;
}

/** @name ContractDiscriminant */
export interface ContractDiscriminant extends u32 {}

/** @name ContractDisplayName */
export interface ContractDisplayName extends SiPath {}

/** @name ContractEventParamSpec */
export interface ContractEventParamSpec extends Struct {
  readonly name: Text;
  readonly indexed: bool;
  readonly type: ContractTypeSpec;
  readonly docs: Vec<Text>;
}

/** @name ContractEventSpec */
export interface ContractEventSpec extends Struct {
  readonly name: Text;
  readonly args: Vec<ContractEventParamSpec>;
  readonly docs: Vec<Text>;
}

/** @name ContractLayoutArray */
export interface ContractLayoutArray extends Struct {
  readonly offset: ContractLayoutKey;
  readonly len: u32;
  readonly cellsPerElem: u64;
  readonly layout: ContractStorageLayout;
}

/** @name ContractLayoutCell */
export interface ContractLayoutCell extends Struct {
  readonly key: ContractLayoutKey;
  readonly ty: SiLookupTypeId;
}

/** @name ContractLayoutEnum */
export interface ContractLayoutEnum extends Struct {
  readonly dispatchKey: ContractLayoutKey;
  readonly variants: BTreeMap<ContractDiscriminant, ContractLayoutStruct>;
}

/** @name ContractLayoutHash */
export interface ContractLayoutHash extends Struct {
  readonly offset: ContractLayoutKey;
  readonly strategy: ContractLayoutHashingStrategy;
  readonly layout: ContractStorageLayout;
}

/** @name ContractLayoutHashingStrategy */
export interface ContractLayoutHashingStrategy extends Struct {
  readonly hasher: ContractCryptoHasher;
  readonly postfix: Bytes;
  readonly prefix: Bytes;
}

/** @name ContractLayoutKey */
export interface ContractLayoutKey extends U8aFixed {}

/** @name ContractLayoutStruct */
export interface ContractLayoutStruct extends Struct {
  readonly fields: Vec<ContractLayoutStructField>;
}

/** @name ContractLayoutStructField */
export interface ContractLayoutStructField extends Struct {
  readonly layout: ContractStorageLayout;
  readonly name: Text;
}

/** @name ContractMessageParamSpec */
export interface ContractMessageParamSpec extends Struct {
  readonly name: Text;
  readonly type: ContractTypeSpec;
}

/** @name ContractMessageSpec */
export interface ContractMessageSpec extends Struct {
  readonly name: Text;
  readonly selector: ContractSelector;
  readonly mutates: bool;
  readonly payable: bool;
  readonly args: Vec<ContractMessageParamSpec>;
  readonly returnType: Option<ContractTypeSpec>;
  readonly docs: Vec<Text>;
}

/** @name ContractMetadata */
export interface ContractMetadata extends Enum {
  readonly isV0: boolean;
  readonly asV0: ContractMetadataV0;
  readonly isV1: boolean;
  readonly asV1: ContractMetadataV1;
}

/** @name ContractMetadataLatest */
export interface ContractMetadataLatest extends ContractMetadataV1 {}

/** @name ContractMetadataV0 */
export interface ContractMetadataV0 extends Struct {
  readonly types: Vec<Si0Type>;
  readonly spec: ContractContractSpec;
}

/** @name ContractMetadataV1 */
export interface ContractMetadataV1 extends Struct {
  readonly types: Vec<PortableType>;
  readonly spec: ContractContractSpec;
}

/** @name ContractProject */
export interface ContractProject extends ITuple<[ContractProjectInfo, ContractMetadata]> {}

/** @name ContractProjectContract */
export interface ContractProjectContract extends Struct {
  readonly name: Text;
  readonly version: Text;
  readonly authors: Vec<Text>;
  readonly description: Option<Text>;
  readonly docs: Option<Text>;
  readonly repository: Option<Text>;
  readonly homepage: Option<Text>;
  readonly license: Option<Text>;
}

/** @name ContractProjectInfo */
export interface ContractProjectInfo extends Struct {
  readonly source: ContractProjectSource;
  readonly contract: ContractProjectContract;
}

/** @name ContractProjectSource */
export interface ContractProjectSource extends Struct {
  readonly wasmHash: U8aFixed;
  readonly language: Text;
  readonly compiler: Text;
  readonly wasm: Raw;
}

/** @name ContractProjectV0 */
export interface ContractProjectV0 extends Struct {
  readonly metadataVersion: Text;
  readonly source: ContractProjectSource;
  readonly contract: ContractProjectContract;
  readonly types: Vec<Si0Type>;
  readonly spec: ContractContractSpec;
}

/** @name ContractSelector */
export interface ContractSelector extends U8aFixed {}

/** @name ContractStorageLayout */
export interface ContractStorageLayout extends Enum {
  readonly isCell: boolean;
  readonly asCell: ContractLayoutCell;
  readonly isHash: boolean;
  readonly asHash: ContractLayoutHash;
  readonly isArray: boolean;
  readonly asArray: ContractLayoutArray;
  readonly isStruct: boolean;
  readonly asStruct: ContractLayoutStruct;
  readonly isEnum: boolean;
  readonly asEnum: ContractLayoutEnum;
}

/** @name ContractTypeSpec */
export interface ContractTypeSpec extends Struct {
  readonly type: SiLookupTypeId;
  readonly displayName: ContractDisplayName;
}

export type PHANTOM_CONTRACTSABI = 'contractsAbi';
