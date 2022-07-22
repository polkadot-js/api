// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { BitVec, Bool, bool, Bytes, F32, f32, F64, f64, I8, i8, I16, i16, I32, i32, I64, i64, I128, i128, I256, i256, Json, Null, OptionBool, Raw, Text, Type, U8, u8, U16, u16, U32, u32, U64, u64, U128, u128, U256, u256, USize, usize } from '@polkadot/types-codec';
import type { RegistryTypes } from '@polkadot/types-codec/types';
import type { BN } from '@polkadot/util';
import type { GenericExtrinsic, GenericExtrinsicEra, GenericExtrinsicPayload, GenericSignerPayload } from '../extrinsic';
import type { ExtDef } from '../extrinsic/signedExtensions/types';
import type { GenericCall } from '../generic';
import type { HeaderPartial } from '../interfaces/runtime';
import type { RuntimeVersionPartial } from '../interfaces/state';
import type { Metadata, PortableRegistry } from '../metadata';
import type { Data, StorageKey } from '../primitive';
import type { DefinitionRpc, DefinitionRpcSub, DefinitionsCall } from './definitions';

export type { Registry, RegistryError, RegistryTypes } from '@polkadot/types-codec/types';

export interface InterfaceTypes {
  // base codec
  BitVec: BitVec, Bytes: Bytes, Json: Json, Null: Null, OptionBool: OptionBool, Raw: Raw, Text: Text, Type: Type,
  // base codec - upper variants
  Bool: Bool, F32: F32, F64: F64, I128: I128, I16: I16, I256: I256, I32: I32, I64: I64, I8: I8, U128: U128, U16: U16, U256: U256, U32: U32, U64: U64, U8: U8, USize: USize,
  // base codec - lower variants
  bool: bool, f32: f32, f64: f64, i128: i128, i16: i16, i256: i256, i32: i32, i64: i64, i8: i8, u128: u128, u16: u16, u256: u256, u32: u32, u64: u64, u8: u8, usize: usize,
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
  runtime?: DefinitionsCall;
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
   * @description Alias types, as received via the metadata, to a JS-specific type to avoid conflicts. For instance, you can rename the `Proposal` in the `treasury` module to `TreasuryProposal` as to not have conflicts with the one for democracy.
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
