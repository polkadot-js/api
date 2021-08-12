// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-var-requires */

import type { ExtDef } from '../extrinsic/signedExtensions/types';
import type { ChainProperties, CodecHash, DispatchErrorModule, Hash, MetadataLatest, PortableRegistry, SiLookupTypeId } from '../interfaces/types';
import type { CallFunction, Codec, CodecHasher, Constructor, DetectCodec, DetectConstructor, RegisteredTypes, Registry, RegistryError, RegistryTypes } from '../types';
import type { CreateOptions } from './types';

import { assert, assertReturn, BN_ZERO, formatBalance, isFunction, isString, isU8a, logger, stringCamelCase, stringify, u8aToHex } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import { DoNotConstruct } from '../codec/DoNotConstruct';
import { Json } from '../codec/Json';
import { Raw } from '../codec/Raw';
import { expandExtensionTypes, fallbackExtensions, findUnknownExtensions } from '../extrinsic/signedExtensions';
import { GenericEventData } from '../generic/Event';
import * as baseTypes from '../index.types';
import * as definitions from '../interfaces/definitions';
import { decorateConstants, decorateExtrinsics } from '../metadata/decorate';
import { Metadata } from '../metadata/Metadata';
import { createClass, getTypeClass } from './createClass';
import { createTypeUnsafe } from './createType';
import { getTypeDef } from './getTypeDef';

const l = logger('registry');

// create error mapping from metadata
function injectErrors (_: Registry, metadata: Metadata, metadataErrors: Record<string, RegistryError>): void {
  const modules = metadata.asLatest.modules;

  // decorate the errors
  modules.forEach(({ errors, index, name }, _sectionIndex): void => {
    const sectionIndex = metadata.version >= 12
      ? index.toNumber()
      : _sectionIndex;
    const sectionName = stringCamelCase(name);

    errors.forEach(({ docs, name }, index): void => {
      const eventIndex = new Uint8Array([sectionIndex, index]);

      metadataErrors[u8aToHex(eventIndex)] = {
        docs: docs.map((d) => d.toString()),
        index,
        method: name.toString(),
        name: name.toString(),
        section: sectionName
      };
    });
  });
}

// create event classes from metadata
function injectEvents (registry: Registry, metadata: Metadata, metadataEvents: Record<string, Constructor<GenericEventData>>): void {
  // decorate the events
  metadata.asLatest.modules
    .filter(({ events }) => events.isSome)
    .forEach(({ events, index, name }, _sectionIndex): void => {
      const sectionIndex = metadata.version >= 12
        ? index.toNumber()
        : _sectionIndex;
      const sectionName = stringCamelCase(name);

      events.unwrap().forEach((meta, methodIndex): void => {
        const methodName = meta.name.toString();
        const typeDef = meta.args.map((arg) => getTypeDef(arg));
        let Types: Constructor<Codec>[] | null = null;

        // Lazy create the actual type classes right at the point of use
        const getTypes = (): Constructor<Codec>[] => {
          if (!Types) {
            Types = typeDef.map((typeDef) => getTypeClass(registry, typeDef));
          }

          return Types;
        };

        metadataEvents[u8aToHex(new Uint8Array([sectionIndex, methodIndex]))] = class extends GenericEventData {
          constructor (registry: Registry, value: Uint8Array) {
            super(registry, value, getTypes(), typeDef, meta, sectionName, methodName);
          }
        };
      });
    });
}

// create extrinsic mapping from metadata
function injectExtrinsics (registry: Registry, metadata: Metadata, metadataCalls: Record<string, CallFunction>): void {
  const extrinsics = decorateExtrinsics(registry, metadata.asLatest, metadata.version);

  // decorate the extrinsics
  Object.values(extrinsics).forEach((methods): void =>
    Object.values(methods).forEach((method): void => {
      metadataCalls[u8aToHex(method.callIndex)] = method;
    })
  );
}

// extract additional properties from the metadata
function extractProperties (registry: Registry, metadata: Metadata): ChainProperties | undefined {
  const original = registry.getChainProperties();
  const constants = decorateConstants(registry, metadata.asLatest, metadata.version);
  const ss58Format = constants.system?.ss58Prefix;

  if (!ss58Format) {
    return original;
  }

  const { tokenDecimals, tokenSymbol } = original || {};

  return registry.createType('ChainProperties', { ss58Format, tokenDecimals, tokenSymbol });
}

export class TypeRegistry implements Registry {
  #classes = new Map<string, Constructor>();

  #definitions = new Map<string, string>();

  #metadata?: MetadataLatest;

  readonly #metadataCalls: Record<string, CallFunction> = {};

  readonly #metadataErrors: Record<string, RegistryError> = {};

  readonly #metadataEvents: Record<string, Constructor<GenericEventData>> = {};

  #unknownTypes = new Map<string, boolean>();

  #chainProperties?: ChainProperties;

  #hasher: (data: Uint8Array) => Uint8Array = blake2AsU8a;

  readonly #knownDefaults: RegistryTypes;

  readonly #knownDefinitions: Record<string, { types: RegistryTypes }>;

  #knownTypes: RegisteredTypes = {};

  #signedExtensions: string[] = fallbackExtensions;

  #userExtensions?: ExtDef;

  public createdAtHash?: Hash;

  constructor (createdAtHash?: Hash | Uint8Array | string) {
    this.#knownDefaults = { Json, Metadata, Raw, ...baseTypes };
    this.#knownDefinitions = definitions as unknown as Record<string, { types: RegistryTypes }>;

    this.init();

    if (createdAtHash) {
      this.createdAtHash = this.createType('Hash', createdAtHash);
    }
  }

  public init (): this {
    // start clean
    this.#classes = new Map<string, Constructor>();
    this.#definitions = new Map<string, string>();
    this.#unknownTypes = new Map<string, boolean>();
    this.#knownTypes = {};

    // register know, first classes then on-demand-created definitions
    this.register(this.#knownDefaults);
    Object.values(this.#knownDefinitions).forEach(({ types }): void =>
      this.register(types)
    );

    return this;
  }

  public get chainDecimals (): number[] {
    if (this.#chainProperties?.tokenDecimals.isSome) {
      const allDecimals = this.#chainProperties.tokenDecimals.unwrap();

      if (allDecimals.length) {
        return allDecimals.map((b) => b.toNumber());
      }
    }

    return [12];
  }

  public get chainSS58 (): number | undefined {
    return this.#chainProperties?.ss58Format.isSome
      ? this.#chainProperties.ss58Format.unwrap().toNumber()
      : undefined;
  }

  public get chainTokens (): string[] {
    if (this.#chainProperties?.tokenSymbol.isSome) {
      const allTokens = this.#chainProperties.tokenSymbol.unwrap();

      if (allTokens.length) {
        return allTokens.map((s) => s.toString());
      }
    }

    return [formatBalance.getDefaults().unit];
  }

  /**
   * @description Returns tru if the type is in a Compat format
   */
  public isLookupType (value: string): boolean {
    return /Lookup\d+$/.test(value);
  }

  /**
   * @description Creates a lookup string from the supplied id
   */
  public createLookupType (lookupId: SiLookupTypeId | number): string {
    return `Lookup${lookupId.toString()}`;
  }

  public get knownTypes (): RegisteredTypes {
    return this.#knownTypes;
  }

  public get lookup (): PortableRegistry {
    throw new Error('Unimplemented');

    // return this.metadata.lookup;
  }

  public get metadata (): MetadataLatest {
    assert(this.#metadata, 'Metadata has not been set on this registry');

    return this.#metadata;
  }

  public get unknownTypes (): string[] {
    return [...this.#unknownTypes.keys()];
  }

  public get signedExtensions (): string[] {
    return this.#signedExtensions;
  }

  /**
   * @describe Creates an instance of the class
   */
  public createClass <T extends Codec = Codec, K extends string = string> (type: K): DetectConstructor<T, K> {
    return createClass(this, type);
  }

  /**
   * @description Creates an instance of a type as registered
   */
  public createType <T extends Codec = Codec, K extends string = string> (type: K, ...params: unknown[]): DetectCodec<T, K> {
    return createTypeUnsafe(this, type, params);
  }

  /**
   * @description Creates an instance of a type as registered
   */
  public createTypeUnsafe <T extends Codec = Codec, K extends string = string> (type: K, params: unknown[], options?: CreateOptions): DetectCodec<T, K> {
    return createTypeUnsafe(this, type, params, options);
  }

  // find a specific call
  public findMetaCall (callIndex: Uint8Array): CallFunction {
    const hexIndex = u8aToHex(callIndex);

    return assertReturn(this.#metadataCalls[hexIndex], `findMetaCall: Unable to find Call with index ${hexIndex}/[${callIndex.toString()}]`);
  }

  // finds an error
  public findMetaError (errorIndex: Uint8Array | DispatchErrorModule): RegistryError {
    const hexIndex = u8aToHex(
      isU8a(errorIndex)
        ? errorIndex
        : new Uint8Array([errorIndex.index.toNumber(), errorIndex.error.toNumber()])
    );

    return assertReturn(this.#metadataErrors[hexIndex], `findMetaError: Unable to find Error with index ${hexIndex}/[${errorIndex.toString()}]`);
  }

  public findMetaEvent (eventIndex: Uint8Array): Constructor<GenericEventData> {
    const hexIndex = u8aToHex(eventIndex);

    return assertReturn(this.#metadataEvents[hexIndex], `findMetaEvent: Unable to find Event with index ${hexIndex}/[${eventIndex.toString()}]`);
  }

  public get <T extends Codec = Codec, K extends string = string> (name: K, withUnknown?: boolean): DetectConstructor<T, K> | undefined {
    let Type = this.#classes.get(name);

    // we have not already created the type, attempt it
    if (!Type) {
      const definition = this.#definitions.get(name);
      let BaseType: Constructor | undefined;

      // we have a definition, so create the class now (lazily)
      if (definition) {
        BaseType = createClass(this, definition);
      } else if (withUnknown) {
        l.warn(`Unable to resolve type ${name}, it will fail on construction`);

        this.#unknownTypes.set(name, true);
        BaseType = DoNotConstruct.with(name);
      }

      if (BaseType) {
        // NOTE If we didn't extend here, we would have strange artifacts. An example is
        // Balance, with this, new Balance() instanceof u128 is true, but Balance !== u128
        // Additionally, we now pass through the registry, which is a link to ourselves
        Type = class extends BaseType {};

        this.#classes.set(name, Type);
      }
    }

    return Type as DetectConstructor<T, K>;
  }

  public getChainProperties (): ChainProperties | undefined {
    return this.#chainProperties;
  }

  public getClassName (clazz: Constructor): string | undefined {
    const entry = [...this.#classes.entries()].find(([, test]) => test === clazz);

    return entry
      ? entry[0]
      : undefined;
  }

  public getDefinition (typeName: string): string | undefined {
    return this.#definitions.get(typeName);
  }

  public getModuleInstances (specName: string, moduleName: string): string[] | undefined {
    return this.#knownTypes?.typesBundle?.spec?.[specName]?.instances?.[moduleName];
  }

  public getOrThrow <T extends Codec = Codec, K extends string = string> (name: K, msg?: string): DetectConstructor<T, K> {
    return assertReturn(this.get<T, K>(name), msg || `type ${name} not found`);
  }

  public getOrUnknown <T extends Codec = Codec, K extends string = string> (name: K): DetectConstructor<T, K> {
    return this.get<T, K>(name, true) as DetectConstructor<T, K>;
  }

  public getSignedExtensionExtra (): Record<string, string> {
    return expandExtensionTypes(this.#signedExtensions, 'payload', this.#userExtensions);
  }

  public getSignedExtensionTypes (): Record<string, string> {
    return expandExtensionTypes(this.#signedExtensions, 'extrinsic', this.#userExtensions);
  }

  public hasClass (name: string): boolean {
    return this.#classes.has(name);
  }

  public hasDef (name: string): boolean {
    return this.#definitions.has(name);
  }

  public hasType (name: string): boolean {
    return !this.#unknownTypes.get(name) && (this.hasClass(name) || this.hasDef(name));
  }

  public hash (data: Uint8Array): CodecHash {
    return this.createType('CodecHash', this.#hasher(data));
  }

  public register (type: Constructor | RegistryTypes): void;

  // eslint-disable-next-line no-dupe-class-members
  public register (name: string, type: Constructor): void;

  // eslint-disable-next-line no-dupe-class-members
  public register (arg1: string | Constructor | RegistryTypes, arg2?: Constructor): void {
    // NOTE Constructors appear as functions here
    if (isFunction(arg1)) {
      this.#classes.set(arg1.name, arg1);
    } else if (isString(arg1)) {
      assert(isFunction(arg2), () => `Expected class definition passed to '${arg1}' registration`);
      assert(arg1 !== arg2.toString(), () => `Unable to register circular ${arg1} === ${arg1}`);

      this.#classes.set(arg1, arg2);
    } else {
      this._registerObject(arg1);
    }
  }

  private _registerObject (obj: RegistryTypes): void {
    Object.entries(obj).forEach(([name, type]): void => {
      if (isFunction(type)) {
        // This _looks_ a bit funny, but `typeof Clazz === 'function'
        this.#classes.set(name, type);
      } else {
        const def = isString(type)
          ? type
          : stringify(type);

        assert(name !== def, () => `Unable to register circular ${name} === ${def}`);

        // we already have this type, remove the classes registered for it
        if (this.#classes.has(name)) {
          this.#classes.delete(name);
        }

        this.#definitions.set(name, def);
      }
    });
  }

  // sets the chain properties
  public setChainProperties (properties?: ChainProperties): void {
    if (properties) {
      this.#chainProperties = properties;
    }
  }

  setHasher (hasher?: CodecHasher | null): void {
    this.#hasher = hasher || blake2AsU8a;
  }

  setKnownTypes (knownTypes: RegisteredTypes): void {
    this.#knownTypes = knownTypes;
  }

  // sets the metadata
  public setMetadata (metadata: Metadata, signedExtensions?: string[], userExtensions?: ExtDef): void {
    this.#metadata = metadata.asLatest;

    injectExtrinsics(this, metadata, this.#metadataCalls);
    injectErrors(this, metadata, this.#metadataErrors);
    injectEvents(this, metadata, this.#metadataEvents);

    // setup the available extensions
    this.setSignedExtensions(
      signedExtensions || (
        metadata.asLatest.extrinsic.version.gt(BN_ZERO)
          ? metadata.asLatest.extrinsic.signedExtensions.map((key) => key.toString())
          : fallbackExtensions
      ),
      userExtensions
    );

    // setup the chain properties with format overrides
    this.setChainProperties(
      extractProperties(this, metadata)
    );
  }

  // sets the available signed extensions
  setSignedExtensions (signedExtensions: string[] = fallbackExtensions, userExtensions?: ExtDef): void {
    this.#signedExtensions = signedExtensions;
    this.#userExtensions = userExtensions;

    const unknown = findUnknownExtensions(this.#signedExtensions, this.#userExtensions);

    if (unknown.length) {
      l.warn(`Unknown signed extensions ${unknown.join(', ')} found, treating them as no-effect`);
    }
  }
}
