// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types-codec/types/registry';
import '@polkadot/types-create/types/augmentRegistry';

import type { AnyString, Codec, CodecClass } from '@polkadot/types-codec/types';
import type { TypeDef } from '@polkadot/types-create/types';
import type { ExtDef } from '../extrinsic/signedExtensions/types';
import type { MetadataLatest } from '../interfaces/metadata';
import type { SiField, SiLookupTypeId } from '../interfaces/scaleInfo';
import type { ChainProperties } from '../interfaces/system';
import type { Metadata, PortableRegistry } from '../metadata';
import type { CallFunction as CallFunctionExt } from './calls';
import type { DetectCodec } from './detect';
import type { CodecHasher, RegisteredTypes } from './registry';

declare module '@polkadot/types-codec/types/registry' {
  interface RegistryError {
    fields: SiField[];
  }

  interface Registry {
    readonly firstCallIndex: Uint8Array;
    readonly knownTypes: RegisteredTypes;
    readonly metadata: MetadataLatest;
    readonly unknownTypes: string[];
    readonly signedExtensions: string[];

    findMetaCall (callIndex: Uint8Array): CallFunctionExt;

    clearCache (): void

    createLookupType (lookupId: SiLookupTypeId | number): string;

    createClass <T extends Codec = Codec, K extends string = string> (type: K): CodecClass<DetectCodec<T, K>>;
    createType <T extends Codec = Codec, K extends string = string> (type: K, ...params: unknown[]): DetectCodec<T, K>;

    get <T extends Codec = Codec, K extends string = string> (name: K, withUnknown?: boolean, knownTypeDef?: TypeDef): CodecClass<DetectCodec<T, K>> | undefined;
    getChainProperties (): ChainProperties | undefined;
    getDefinition (typeName: string): string | undefined;
    getModuleInstances (specName: AnyString, moduleName: string): string[] | undefined;

    setKnownTypes (types: RegisteredTypes): void;
    setChainProperties (properties?: ChainProperties): void;
    setHasher (hasher?: CodecHasher | null): void;
    setLookup (lookup: PortableRegistry): void;
    setMetadata (metadata: Metadata, signedExtensions?: string[], userExtensions?: ExtDef): void;
    setSignedExtensions (signedExtensions?: string[], userExtensions?: ExtDef): void;
  }
}
