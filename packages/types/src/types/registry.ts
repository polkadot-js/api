// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type BN from 'bn.js';
import type { Metadata } from '@polkadot/metadata';
import type { Observable } from '@polkadot/x-rxjs';
import type { H256 } from '../interfaces/runtime';
import type { ChainProperties } from '../interfaces/system';
import type { CallFunction } from './calls';
import type { Codec, Constructor } from './codec';
import type { DefinitionRpc, DefinitionRpcSub } from './definitions';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InterfaceTypes { }

export interface ChainUpgradeVersion {
  blockNumber: BN;
  specVersion: BN;
}

export interface ChainUpgrades {
  genesisHash: Uint8Array;
  network: string;
  versions: ChainUpgradeVersion[];
}

export type RegistryTypes = Record<string, Constructor | string | Record<string, string> | { _enum: string[] | Record<string, string | null> } | { _set: Record<string, number> }>;

export interface RegistryError {
  documentation: string[];
  index: number;
  name: string;
  section: string;
}

export interface OverrideVersionedType {
  minmax: [number?, number?]; // min (v >= min) and max (v <= max)
  types: RegistryTypes;
}

export type OverrideModuleType = Record<string, string>;
export type DeriveCustom = Record<string, Record<string, (instanceId: string, api: any) => (...args: any[]) => Observable<any>>>;

export interface OverrideBundleDefinition {
  alias?: Record<string, OverrideModuleType>;
  derives?: DeriveCustom;
  rpc?: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>>;
  types?: OverrideVersionedType[];
}

export interface OverrideBundleType {
  chain?: Record<string, OverrideBundleDefinition>;
  spec?: Record<string, OverrideBundleDefinition>;
}

export interface RegisteredTypes {
  /**
   * @description Additional types used by runtime modules. This is necessary if the runtime modules
   * uses types not available in the base Substrate runtime.
   */
  types?: RegistryTypes;
  /**
   * @description Alias an types, as received via the metadata, to a JS-specific type to avoid conflicts. For instance, you can rename the `Proposal` in the `treasury` module to `TreasuryProposal` as to not have conflicts with the one for democracy.
   */
  typesAlias?: Record<string, OverrideModuleType>;
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
  readonly chainDecimals: number;
  readonly chainSS58: number | undefined;
  readonly chainToken: string;
  readonly knownTypes: RegisteredTypes;
  readonly signedExtensions: string[];

  findMetaCall (callIndex: Uint8Array): CallFunction;
  findMetaError (errorIndex: Uint8Array | { error: BN, index: BN }): RegistryError;
  // due to same circular imports where types don't really want to import from EventData,
  // keep this as a generic Codec, however the actual impl. returns the correct
  findMetaEvent (eventIndex: Uint8Array): Constructor<any>;

  createClass <K extends keyof InterfaceTypes> (type: K): Constructor<InterfaceTypes[K]>;
  createType <K extends keyof InterfaceTypes> (type: K, ...params: unknown[]): InterfaceTypes[K];
  get <T extends Codec = Codec> (name: string, withUnknown?: boolean): Constructor<T> | undefined;
  getChainProperties (): ChainProperties | undefined;
  getClassName (clazz: Constructor): string | undefined;
  getDefinition (name: string): string | undefined;
  getOrThrow <T extends Codec = Codec> (name: string, msg?: string): Constructor<T>;
  getOrUnknown <T extends Codec = Codec> (name: string): Constructor<T>;
  setKnownTypes (types: RegisteredTypes): void;
  getSignedExtensionExtra (): Record<string, keyof InterfaceTypes>;
  getSignedExtensionTypes (): Record<string, keyof InterfaceTypes>;
  hasClass (name: string): boolean;
  hasDef (name: string): boolean;
  hasType (name: string): boolean;
  hash (data: Uint8Array): H256;
  init (): Registry;
  register (type: Constructor | RegistryTypes): void;
  register (name: string, type: Constructor): void;
  register (arg1: string | Constructor | RegistryTypes, arg2?: Constructor): void;
  setChainProperties (properties?: ChainProperties): void;
  setHasher (hasher?: (data: Uint8Array) => Uint8Array): void;
  setMetadata (metadata: Metadata, signedExtensions?: string[]): void;
  setSignedExtensions (signedExtensions?: string[]): void;
}
