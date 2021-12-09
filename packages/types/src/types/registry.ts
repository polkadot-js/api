// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { BN } from '@polkadot/util';
import type { CreateOptions, TypeDef } from '../create/types';
import type { ExtDef } from '../extrinsic/signedExtensions/types';
import type { MetadataLatest } from '../interfaces/metadata';
import type { CodecHash, Hash } from '../interfaces/runtime';
import type { SiField, SiLookupTypeId } from '../interfaces/scaleInfo';
import type { ChainProperties } from '../interfaces/system';
import type { Metadata, PortableRegistry } from '../metadata';
import type { CallFunction } from './calls';
import type { Codec, Constructor } from './codec';
import type { DefinitionRpc, DefinitionRpcSub } from './definitions';
import type { DetectCodec, DetectConstructor } from './detect';

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

export type RegistryTypes =
  Record<string, Constructor | string | Record<string, string> |
  { _enum: string[] | Record<string, number> | Record<string, string | null> } |
  { _set: Record<string, number> }>;

export interface RegistryError {
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

export interface Registry {
  readonly chainDecimals: number[];
  readonly chainSS58: number | undefined;
  readonly chainTokens: string[];
  readonly knownTypes: RegisteredTypes;
  readonly lookup: PortableRegistry;
  readonly metadata: MetadataLatest;
  readonly unknownTypes: string[];
  readonly signedExtensions: string[];

  createdAtHash?: Hash;

  findMetaCall (callIndex: Uint8Array): CallFunction;
  findMetaError (errorIndex: Uint8Array | { error: BN, index: BN }): RegistryError;
  // due to same circular imports where types don't really want to import from EventData,
  // keep this as a generic Codec, however the actual impl. returns the correct
  findMetaEvent (eventIndex: Uint8Array): Constructor<any>;

  isLookupType (value: string): boolean;
  createLookupType (lookupId: SiLookupTypeId | number): string;

  createClass <T extends Codec = Codec, K extends string = string> (type: K): DetectConstructor<T, K>;
  createType <T extends Codec = Codec, K extends string = string> (type: K, ...params: unknown[]): DetectCodec<T, K>;
  createTypeUnsafe <T extends Codec = Codec, K extends string = string> (type: K, params: unknown[], options?: CreateOptions): DetectCodec<T, K>;
  get <T extends Codec = Codec, K extends string = string> (name: K, withUnknown?: boolean, knownTypeDef?: TypeDef): DetectConstructor<T, K> | undefined;
  getChainProperties (): ChainProperties | undefined;
  getClassName (clazz: Constructor): string | undefined;
  getDefinition (typeName: string): string | undefined;
  getModuleInstances (specName: string, moduleName: string): string[] | undefined;
  getOrThrow <T extends Codec = Codec, K extends string = string> (name: K, msg?: string): DetectConstructor<T, K>;
  getOrUnknown <T extends Codec = Codec, K extends string = string> (name: K): DetectConstructor<T, K>;
  setKnownTypes (types: RegisteredTypes): void;
  getSignedExtensionExtra (): Record<string, string>;
  getSignedExtensionTypes (): Record<string, string>;
  hasClass (name: string): boolean;
  hasDef (name: string): boolean;
  hasType (name: string): boolean;
  hash (data: Uint8Array): CodecHash;
  init (): Registry;
  register (type: Constructor | RegistryTypes): void;
  register (name: string, type: Constructor): void;
  register (arg1: string | Constructor | RegistryTypes, arg2?: Constructor): void;
  setChainProperties (properties?: ChainProperties): void;
  setHasher (hasher?: CodecHasher | null): void;
  setMetadata (metadata: Metadata, signedExtensions?: string[], userExtensions?: ExtDef): void;
  setSignedExtensions (signedExtensions?: string[], userExtensions?: ExtDef): void;
}
