// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Enum, Option, Raw, Struct, Text, U8aFixed, Vec, bool, u32, u64 } from '@polkadot/types';
  import type { PortableType } from '@polkadot/types/interfaces/metadata';
  import type { Si0Type, SiLookupTypeId, SiPath } from '@polkadot/types/interfaces/scaleInfo';
  import type { ITuple } from '@polkadot/types/types';

/** @name ContractConstructorSpecLatest */
export interface ContractConstructorSpecLatest extends ContractConstructorSpecV2 {}

/** @name ContractConstructorSpecV0 */
export interface ContractConstructorSpecV0 extends Struct {
  readonly name: Text;
  readonly selector: ContractSelector;
  readonly args: Vec<ContractMessageParamSpecV0>;
  readonly docs: Vec<Text>;
}

/** @name ContractConstructorSpecV2 */
export interface ContractConstructorSpecV2 extends Struct {
  readonly label: Text;
  readonly selector: ContractSelector;
  readonly args: Vec<ContractMessageParamSpecV2>;
  readonly docs: Vec<Text>;
}

/** @name ContractContractSpecV0 */
export interface ContractContractSpecV0 extends Struct {
  readonly constructors: Vec<ContractConstructorSpecV0>;
  readonly messages: Vec<ContractMessageSpecV0>;
  readonly events: Vec<ContractEventSpecV0>;
  readonly docs: Vec<Text>;
}

/** @name ContractContractSpecV2 */
export interface ContractContractSpecV2 extends Struct {
  readonly constructors: Vec<ContractConstructorSpecV2>;
  readonly messages: Vec<ContractMessageSpecV2>;
  readonly events: Vec<ContractEventSpecV2>;
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

/** @name ContractEventParamSpecV0 */
export interface ContractEventParamSpecV0 extends Struct {
  readonly name: Text;
  readonly indexed: bool;
  readonly type: ContractTypeSpec;
  readonly docs: Vec<Text>;
}

/** @name ContractEventParamSpecV2 */
export interface ContractEventParamSpecV2 extends Struct {
  readonly label: Text;
  readonly indexed: bool;
  readonly type: ContractTypeSpec;
  readonly docs: Vec<Text>;
}

/** @name ContractEventSpecLatest */
export interface ContractEventSpecLatest extends ContractEventSpecV2 {}

/** @name ContractEventSpecV0 */
export interface ContractEventSpecV0 extends Struct {
  readonly name: Text;
  readonly args: Vec<ContractEventParamSpecV0>;
  readonly docs: Vec<Text>;
}

/** @name ContractEventSpecV2 */
export interface ContractEventSpecV2 extends Struct {
  readonly label: Text;
  readonly args: Vec<ContractEventParamSpecV0>;
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

/** @name ContractMessageParamSpecLatest */
export interface ContractMessageParamSpecLatest extends ContractMessageParamSpecV2 {}

/** @name ContractMessageParamSpecV0 */
export interface ContractMessageParamSpecV0 extends Struct {
  readonly name: Text;
  readonly type: ContractTypeSpec;
}

/** @name ContractMessageParamSpecV2 */
export interface ContractMessageParamSpecV2 extends Struct {
  readonly label: Text;
  readonly type: ContractTypeSpec;
}

/** @name ContractMessageSpecLatest */
export interface ContractMessageSpecLatest extends ContractMessageSpecV2 {}

/** @name ContractMessageSpecV0 */
export interface ContractMessageSpecV0 extends Struct {
  readonly name: Text;
  readonly selector: ContractSelector;
  readonly mutates: bool;
  readonly payable: bool;
  readonly args: Vec<ContractMessageParamSpecV0>;
  readonly returnType: Option<ContractTypeSpec>;
  readonly docs: Vec<Text>;
}

/** @name ContractMessageSpecV2 */
export interface ContractMessageSpecV2 extends Struct {
  readonly label: Text;
  readonly selector: ContractSelector;
  readonly mutates: bool;
  readonly payable: bool;
  readonly args: Vec<ContractMessageParamSpecV2>;
  readonly returnType: Option<ContractTypeSpec>;
  readonly docs: Vec<Text>;
}

/** @name ContractMetadata */
export interface ContractMetadata extends Enum {
  readonly isV0: boolean;
  readonly asV0: ContractMetadataV0;
  readonly isV1: boolean;
  readonly asV1: ContractMetadataV1;
  readonly isV2: boolean;
  readonly asV2: ContractMetadataV2;
}

/** @name ContractMetadataLatest */
export interface ContractMetadataLatest extends ContractMetadataV2 {}

/** @name ContractMetadataV0 */
export interface ContractMetadataV0 extends Struct {
  readonly types: Vec<Si0Type>;
  readonly spec: ContractContractSpecV0;
}

/** @name ContractMetadataV1 */
export interface ContractMetadataV1 extends Struct {
  readonly types: Vec<PortableType>;
  readonly spec: ContractContractSpecV0;
}

/** @name ContractMetadataV2 */
export interface ContractMetadataV2 extends Struct {
  readonly types: Vec<PortableType>;
  readonly spec: ContractContractSpecV2;
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
  readonly spec: ContractContractSpecV0;
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
