// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { BitVec, Bool, bool, Bytes, I8, i8, I16, i16, I32, i32, I64, i64, I128, i128, I256, i256, Json, Null, Raw, Text, Type, U8, u8, U16, u16, U32, u32, U64, u64, U128, u128, U256, u256, USize, usize } from '@polkadot/types-codec';
import type { Codec, CodecClass, RegistryError as RegistryErrorBase, RegistryTypes } from '@polkadot/types-codec/types';
import type { CreateRegistry, TypeDef } from '@polkadot/types-create/types';
import type { BN } from '@polkadot/util';
import type { GenericExtrinsic, GenericExtrinsicEra, GenericExtrinsicPayload, GenericSignerPayload } from '../extrinsic';
import type { ExtDef } from '../extrinsic/signedExtensions/types';
import type { GenericCall } from '../generic';
import type { MetadataLatest } from '../interfaces/metadata';
import type { HeaderPartial } from '../interfaces/runtime';
import type { SiField, SiLookupTypeId } from '../interfaces/scaleInfo';
import type { RuntimeVersionPartial } from '../interfaces/state';
import type { ChainProperties } from '../interfaces/system';
import type { Metadata, PortableRegistry } from '../metadata';
import type { Data, StorageKey } from '../primitive';
import type { CallFunction } from './calls';
import type { DefinitionRpc, DefinitionRpcSub } from './definitions';
import type { DetectCodec } from './detect';

export type { RegistryTypes } from '@polkadot/types-codec/types';

export interface InterfaceTypes {
  // base codec
  BitVec: BitVec, Bool: Bool, Bytes: Bytes, I128: I128, I16: I16, I256: I256, I32: I32, I64: I64, I8: I8, Json: Json, Null: Null, Raw: Raw, Text: Text, Type: Type, U128: U128, U16: U16, U256: U256, U32: U32, U64: U64, U8: U8, USize: USize, bool: bool, i128: i128, i16: i16, i256: i256, i32: i32, i64: i64, i8: i8, u128: u128, u16: u16, u256: u256, u32: u32, u64: u64, u8: u8, usize: usize,
  // extrinsic
  Extrinsic: GenericExtrinsic, ExtrinsicEra: GenericExtrinsicEra, ExtrinsicPayload: GenericExtrinsicPayload, SignerPayload: GenericSignerPayload,
  // generic
  Call: GenericCall,
  // primitive
  Data: Data, StorageKey: StorageKey,
  // metadata
  Metadata: Metadata, PortableRegistry: PortableRegistry,
  // interfaces
  HeaderPartial: HeaderPartial, RuntimeVersionPartial: RuntimeVersionPartial
}

export type CodecHasher = (data: Uint8Array) => Uint8Array;

export interface ChainUpgradeVersion {
  blockNumber: BN;
  specVersion: BN;
}

export interface ChainUpgrades {
  genesisHash: Uint8Array;
  network: string;
  versions: ChainUpgradeVersion[];
}

export interface RegistryError extends RegistryErrorBase {
  args: string[];
  docs: string[];
  fields: SiField[];
  index: number;
  // compat
  method: string;
  name: string;
  section: string;
}

export interface OverrideVersionedType {
  // min (v >= min) and max (v <= max)
  minmax: [number | undefined | null, number | undefined | null] | [number?, number?] | (number | undefined | null)[];
  types: RegistryTypes;
}

export type OverrideModuleType = Record<string, string>;
export type DeriveCustom = Record<string, Record<string, (instanceId: string, api: any) => (...args: any[]) => Observable<any>>>;

export type AliasDefinition = Record<string, OverrideModuleType>;

export interface OverrideBundleDefinition {
  alias?: AliasDefinition;
  derives?: DeriveCustom;
  hasher?: (data: Uint8Array) => Uint8Array;
  instances?: Record<string, string[]>;
  rpc?: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>>;
  signedExtensions?: ExtDef;
  types?: OverrideVersionedType[];
}

export interface OverrideBundleType {
  chain?: Record<string, OverrideBundleDefinition>;
  spec?: Record<string, OverrideBundleDefinition>;
}

export interface RegisteredTypes {
  /**
   * @description Specify the actual hasher override to use in the API. This generally should be done via the typesBundle
   */
  hasher?: (data: Uint8Array) => Uint8Array;

  /**
   * @description Additional types used by runtime modules. This is necessary if the runtime modules
   * uses types not available in the base Substrate runtime.
   */
  types?: RegistryTypes;
  /**
   * @description Alias an types, as received via the metadata, to a JS-specific type to avoid conflicts. For instance, you can rename the `Proposal` in the `treasury` module to `TreasuryProposal` as to not have conflicts with the one for democracy.
   */
  typesAlias?: AliasDefinition;
  /**
   * @description A bundle of types related to chain & spec that is injected based on what the chain contains
   */
  typesBundle?: OverrideBundleType;
  /**
   * @description Additional types that are injected based on the chain we are connecting to. There are keyed by the chain, i.e. `{ 'Kusama CC1': { ... } }`
   */
  typesChain?: Record<string, RegistryTypes>;
  /**
   * @description Additional types that are injected based on the type of node we are connecting to, as set via specName in the runtime version. There are keyed by the node, i.e. `{ 'edgeware': { ... } }`
   */
  typesSpec?: Record<string, RegistryTypes>;
}

// Note the commented interfaces here are directly from CodecRegistry
export interface Registry extends CreateRegistry {
  // readonly chainDecimals: number[];
  // readonly chainSS58: number | undefined;
  // readonly chainTokens: string[];
  readonly knownTypes: RegisteredTypes;
  readonly lookup: PortableRegistry;
  readonly metadata: MetadataLatest;
  readonly unknownTypes: string[];
  readonly signedExtensions: string[];

  // createdAtHash?: Hash;

  findMetaCall (callIndex: Uint8Array): CallFunction;
  findMetaError (errorIndex: Uint8Array | { error: BN, index: BN }): RegistryError;
  // due to same circular imports where types don't really want to import from EventData,
  // keep this as a generic Codec, however the actual impl. returns the correct
  // findMetaEvent (eventIndex: Uint8Array): CodecClass<any>;

  // isLookupType (value: string): boolean;
  createLookupType (lookupId: SiLookupTypeId | number): string;

  createClass <T extends Codec = Codec, K extends string = string> (type: K): CodecClass<DetectCodec<T, K>>;
  createType <T extends Codec = Codec, K extends string = string> (type: K, ...params: unknown[]): DetectCodec<T, K>;

  get <T extends Codec = Codec, K extends string = string> (name: K, withUnknown?: boolean, knownTypeDef?: TypeDef): CodecClass<DetectCodec<T, K>> | undefined;
  getChainProperties (): ChainProperties | undefined;
  // getClassName (clazz: Constructor): string | undefined;
  getDefinition (typeName: string): string | undefined;
  getModuleInstances (specName: string, moduleName: string): string[] | undefined;

  // getOrThrow <T extends Codec = Codec, K extends string = string> (name: K, msg?: string): CodecClass<DetectCodec<T, K>>;
  // getOrUnknown <T extends Codec = Codec, K extends string = string> (name: K): CodecClass<DetectCodec<T, K>>;

  setKnownTypes (types: RegisteredTypes): void;
  // getSignedExtensionExtra (): Record<string, string>;
  // getSignedExtensionTypes (): Record<string, string>;

  // hasClass (name: string): boolean;
  // hasDef (name: string): boolean;
  // hasType (name: string): boolean;
  // hash (data: Uint8Array): IU8a;
  init (): Registry;
  // register (type: CodecClass | RegistryTypes): void;
  // register (name: string, type: CodecClass): void;
  // register (arg1: string | CodecClass | RegistryTypes, arg2?: CodecClass): void;
  setChainProperties (properties?: ChainProperties): void;
  setHasher (hasher?: CodecHasher | null): void;
  setLookup (lookup: PortableRegistry): void;
  setMetadata (metadata: Metadata, signedExtensions?: string[], userExtensions?: ExtDef): void;
  setSignedExtensions (signedExtensions?: string[], userExtensions?: ExtDef): void;
}
