// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import '@polkadot/types-create/types/augmentRegistry';

import type { Codec, CodecClass } from '@polkadot/types-codec/types';
import type { TypeDef } from '@polkadot/types-create/types';
import type { BN } from '@polkadot/util';
import type { ExtDef } from '../extrinsic/signedExtensions/types';
import type { MetadataLatest } from '../interfaces/metadata';
import type { SiField, SiLookupTypeId } from '../interfaces/scaleInfo';
import type { ChainProperties } from '../interfaces/system';
import type { Metadata, PortableRegistry } from '../metadata';
import type { CallFunction as CallFunctionExt } from './calls';
import type { DetectCodec } from './detect';
import type { CodecHasher, RegisteredTypes } from './registry';

declare module '@polkadot/types-codec/types/registry' {
  export interface RegistryError {
    fields: SiField[];
  }

  export interface Registry {
    // readonly chainDecimals: number[];
    // readonly chainSS58: number | undefined;
    // readonly chainTokens: string[];
    readonly knownTypes: RegisteredTypes;
    // readonly lookup: PortableRegistry;
    readonly metadata: MetadataLatest;
    readonly unknownTypes: string[];
    readonly signedExtensions: string[];

    // createdAtHash?: Hash;

    findMetaCall (callIndex: Uint8Array): CallFunctionExt;
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
}
