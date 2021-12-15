// Copyright 2017-2021 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';
import type { Codec, CodecClass } from './codec';
import type { ICompact, INumber, IU8a } from './interfaces';

export type RegistryTypes =
  Record<string, CodecClass | string | Record<string, string> |
  { _enum: string[] | Record<string, number> | Record<string, string | null> } |
  { _set: Record<string, number> }>;

export interface CodecCreateOptions {
  blockHash?: Uint8Array | string | null;
  isOptional?: boolean;
  isPedantic?: boolean;
}

export interface CodecRegistry {
  readonly chainDecimals: number[];
  readonly chainSS58: number | undefined;
  readonly chainTokens: string[];
  // readonly knownTypes: RegisteredTypes;
  // readonly lookup: PortableCodecRegistry;
  // readonly metadata: MetadataLatest;
  // readonly unknownTypes: string[];
  // readonly signedExtensions: string[];

  createdAtHash?: IU8a;

  findMetaCall (callIndex: Uint8Array): unknown;
  findMetaError (errorIndex: Uint8Array | { error: BN, index: BN }): unknown;
  findMetaEvent (eventIndex: Uint8Array): CodecClass<any>;

  isLookupType (value: string): boolean;
  createLookupType (lookupId: ICompact<INumber> | number): string;

  createClass <T extends Codec = Codec, K extends string = string> (type: K): CodecClass<T>;
  createType <T extends Codec = Codec, K extends string = string> (type: K, ...params: unknown[]): T;
  createTypeUnsafe <T extends Codec = Codec, K extends string = string> (type: K, params: unknown[], options?: CodecCreateOptions): T;

  // get <T extends Codec = Codec, K extends string = string, R = T> (name: K, withUnknown?: boolean, knownTypeDef?: TypeDef): CodecClass<R> | undefined;
  // getChainProperties (): ChainProperties | undefined;
  getClassName (clazz: CodecClass): string | undefined;
  // getDefinition (typeName: string): string | undefined;
  // getModuleInstances (specName: string, moduleName: string): string[] | undefined;
  // getOrThrow <T extends Codec = Codec, K extends string = string> (name: K, msg?: string): DetectCodecClass<T, K>;
  getOrUnknown <T extends Codec = Codec, K extends string = string, R = T> (name: K): CodecClass<R>;
  // setKnownTypes (types: RegisteredTypes): void;
  getSignedExtensionExtra (): Record<string, string>;
  getSignedExtensionTypes (): Record<string, string>;

  hasClass (name: string): boolean;
  hasDef (name: string): boolean;
  hasType (name: string): boolean;
  hash (data: Uint8Array): IU8a;
  // init (): CodecRegistry;
  register (type: CodecClass | RegistryTypes): void;
  register (name: string, type: CodecClass): void;
  register (arg1: string | CodecClass | RegistryTypes, arg2?: CodecClass): void;
  // setChainProperties (properties?: ChainProperties): void;
  // setHasher (hasher?: IU8aer | null): void;
  // setLookup (lookup: PortableCodecRegistry): void;
  setMetadata (metadata: unknown, signedExtensions?: string[], userExtensions?: unknown): void;
  // setSignedExtensions (signedExtensions?: string[], userExtensions?: ExtDef): void;
}
