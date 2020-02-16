// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ChainProperties } from '../interfaces/rpc';

import BN from 'bn.js';

import { CallFunction } from './calls';
import { Codec, Constructor } from './codec';
import { AnyJsonObject, InterfaceTypes } from './helpers';

export type RegistryTypes = Record<string, Constructor | string | Record<string, string> | { _enum: string[] | Record<string, string | null> } | { _set: Record<string, number> }>;

export interface RegistryMetadataText extends String, Codec {
  setOverride (override: string): void;
}

export interface RegistryMetadataCallArg {
  name: RegistryMetadataText;
  type: RegistryMetadataText;
}

export interface RegistryMetadataCall {
  args: RegistryMetadataCallArg[];
  name: RegistryMetadataText;

  toJSON (): string | AnyJsonObject;
}

export interface RegistryMetadataCalls {
  isSome: boolean;
  unwrap (): RegistryMetadataCall[];
}

export interface RegistryError {
  documentation: string[];
  index: number;
  name: string;
  section: string;
}

export interface RegistryMetadataError {
  // eslint-disable-next-line @typescript-eslint/ban-types
  name: String;
  // eslint-disable-next-line @typescript-eslint/ban-types
  documentation: String[];
}

export type RegistryMetadataErrors = RegistryMetadataError[];

export interface RegistryMetadataEvent {
  args: any[];
  name: RegistryMetadataText;
}

export interface RegistryMetadataEvents {
  isSome: boolean;
  unwrap (): RegistryMetadataEvent[];
}

export interface RegistryMetadataExtrinsic {
  version: BN;
  // eslint-disable-next-line @typescript-eslint/ban-types
  signedExtensions: String[];
}

export interface RegistryMetadataModule {
  calls: RegistryMetadataCalls;
  errors: RegistryMetadataErrors;
  events: RegistryMetadataEvents;
  name: RegistryMetadataText;
}

export interface RegistryMetadataLatest {
  modules: RegistryMetadataModule[];
  extrinsic: RegistryMetadataExtrinsic;
}

export interface RegistryMetadata {
  asLatest: RegistryMetadataLatest;
}

export interface Registry {
  readonly chainDecimals: number;
  readonly chainSS58: number | undefined;
  readonly chainToken: string;

  findMetaCall (callIndex: Uint8Array): CallFunction;
  findMetaError (errorIndex: Uint8Array): any;
  // due to same circular imports where types don't really want to import from EventData,
  // keep this as a generic Codec, however the actual impl. returns the correct
  findMetaEvent (eventIndex: Uint8Array): Constructor<any>;

  get <T extends Codec = Codec> (name: string): Constructor<T> | undefined;
  getChainProperties (): ChainProperties | undefined;
  getDefinition (name: string): string | undefined;
  getOrThrow <T extends Codec = Codec> (name: string, msg?: string): Constructor<T>;
  getSignedExtensionExtra (): Record<string, InterfaceTypes>;
  getSignedExtensionTypes (): Record<string, InterfaceTypes>;
  hasClass (name: string): boolean;
  hasDef (name: string): boolean;
  hasType (name: string): boolean;
  register (type: Constructor | RegistryTypes): void;
  register (name: string, type: Constructor): void;
  register (arg1: string | Constructor | RegistryTypes, arg2?: Constructor): void;
  setChainProperties (properties?: ChainProperties): void;
  setMetadata (metadata: RegistryMetadata): void;
}
