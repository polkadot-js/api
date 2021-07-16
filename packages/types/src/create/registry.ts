// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExtDef } from '../extrinsic/signedExtensions/types';
import type { MetadataLatest } from '../interfaces/metadata';
import type { SiLookupTypeId } from '../interfaces/scaleInfo';
import type { ChainProperties, CodecHash, DispatchErrorModule, Hash, PortableRegistry } from '../interfaces/types';
import type { CallFunction, Codec, CodecHasher, Constructor, InterfaceTypes, RegisteredTypes, Registry, RegistryError, RegistryTypes, WrappedConstructor } from '../types';

import { assert, assertReturn, BN_ZERO, formatBalance, isFunction, isString, isU8a, logger, stringCamelCase, stringify, u8aToHex } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import { Json } from '../codec/Json';
import { Raw } from '../codec/Raw';
import { isWrappedClass } from '../codec/utils/isWrappedClass';
import { expandExtensionTypes, fallbackExtensions, findUnknownExtensions } from '../extrinsic/signedExtensions';
import { GenericEventData } from '../generic/Event';
import * as baseTypes from '../index.types';
import * as definitions from '../interfaces/definitions';
import { decorateConstants, decorateExtrinsics } from '../metadata/decorate';
import { Metadata } from '../metadata/Metadata';
import { createClass } from './createClass';
import { createType } from './createType';

const l = logger('registry');

// create error mapping from metadata
function injectErrors (_: Registry, metadata: Metadata, metadataErrors: Record<string, RegistryError>): void {
  const { lookup, pallets } = metadata.asLatest;

  // decorate the errors
  pallets.forEach((section, _sectionIndex): void => {
    const sectionIndex = metadata.version >= 12
      ? section.index.toNumber()
      : _sectionIndex;
    const sectionName = stringCamelCase(section.name);

    if (section.errors.isSome) {
      lookup.getSiType(section.errors.unwrap().type).def.asVariant.variants.forEach(({ docs, fields, index, name }): void => {
        const variantIndex = index.toNumber();
        const eventIndex = new Uint8Array([sectionIndex, variantIndex]);

        metadataErrors[u8aToHex(eventIndex)] = {
          docs: docs.map((d) => d.toString()),
          fields,
          index: variantIndex,
          method: name.toString(),
          name: name.toString(),
          section: sectionName
        };
      });
    }
  });
}

// create event classes from metadata
function injectEvents (registry: Registry, metadata: Metadata, metadataEvents: Record<string, Constructor<GenericEventData>>): void {
  const { lookup, pallets } = metadata.asLatest;

  // decorate the events
  pallets
    .filter(({ events }) => events.isSome)
    .forEach((section, _sectionIndex): void => {
      const sectionIndex = metadata.version >= 12
        ? section.index.toNumber()
        : _sectionIndex;
      const sectionName = stringCamelCase(section.name);

      lookup.getSiType(section.events.unwrap().type).def.asVariant.variants.forEach((meta): void => {
        const { fields, index, name } = meta;
        const methodName = name.toString();
        const variantIndex = index.toNumber();
        const eventIndex = new Uint8Array([sectionIndex, variantIndex]);
        const typeDef = fields.map(({ type }) => lookup.getTypeDef(type));
        let Types: WrappedConstructor<Codec>[] | null;

        // Lazy create the actual type classes right at the point of use
        const getTypes = (): Constructor<Codec>[] => {
          if (!Types) {
            Types = fields.map(({ type }) => lookup.getClass(type));
          }

          return Types.map(({ Clazz }) => Clazz);
        };

        metadataEvents[u8aToHex(eventIndex)] = class extends GenericEventData {
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
  #classes = new Map<string, WrappedConstructor>();

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
    this.#classes = new Map<string, WrappedConstructor>();
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

  public get knownTypes (): RegisteredTypes {
    return this.#knownTypes;
  }

  public get lookup (): PortableRegistry {
    return this.metadata.lookup;
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
  public createClass <K extends keyof InterfaceTypes> (type: K): Constructor<InterfaceTypes[K]> {
    // this is a weird one, the issue is that TS gets into a know if not done
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return createClass(this, type) as any;
  }

  /**
   * @describe Creates an instance of a class identified by type id
   */
  public createSiClass <K extends keyof InterfaceTypes> (lookupId: SiLookupTypeId): Constructor<InterfaceTypes[K]> {
    // this is a weird one, the issue is that TS gets into a know if not done
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.lookup.getClass(lookupId).Clazz as any;
  }

  /**
   * @describe Creates an instance of a class identified by type id
   */
  createSiType <K extends keyof InterfaceTypes> (lookupId: SiLookupTypeId, ...params: unknown[]): InterfaceTypes[K] {
    return this.lookup.createType(lookupId, params);
  }

  /**
   * @description Creates an instance of a type as registered
   */
  public createType <K extends keyof InterfaceTypes> (type: K, ...params: unknown[]): InterfaceTypes[K] {
    return createType(this, type, ...params);
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
        : new Uint8Array([
          errorIndex.index.toNumber(),
          errorIndex.error.toNumber()
        ])
    );

    return assertReturn(this.#metadataErrors[hexIndex], `findMetaError: Unable to find Error with index ${hexIndex}/[${errorIndex.toString()}]`);
  }

  public findMetaEvent (eventIndex: Uint8Array): Constructor<GenericEventData> {
    const hexIndex = u8aToHex(eventIndex);

    return assertReturn(this.#metadataEvents[hexIndex], `findMetaEvent: Unable to find Event with index ${hexIndex}/[${eventIndex.toString()}]`);
  }

  public get <T extends Codec = Codec> (name: string, withUnknown?: boolean): WrappedConstructor<T> | undefined {
    let wrapped = this.#classes.get(name);

    // we have not already created the type, attempt it
    if (!wrapped) {
      const definition = this.#definitions.get(name);

      // we have a definition, so create the class now (lazily)
      if (definition) {
        const { Clazz } = createClass(this, definition);

        wrapped = { Clazz: class extends Clazz {}, isWrapped: true };
        this.#classes.set(name, wrapped);
      } else if (withUnknown) {
        l.warn(`Unable to resolve type ${name}, it will fail on construction`);

        this.#unknownTypes.set(name, true);
      }
    }

    return wrapped as WrappedConstructor<T>;
  }

  public getChainProperties (): ChainProperties | undefined {
    return this.#chainProperties;
  }

  public getClassName (Type: Constructor | WrappedConstructor): string | undefined {
    const test = isWrappedClass(Type) ? Type.Clazz : Type;
    const entry = [...this.#classes.entries()].find(([, { Clazz }]) => test === Clazz);

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

  public getOrThrow <T extends Codec = Codec> (name: string, msg?: string): Constructor<T> {
    const wrapped = this.get<T>(name);

    assert(wrapped, msg || `type ${name} not found`);

    return wrapped.Clazz;
  }

  public getOrUnknown <T extends Codec = Codec> (name: string): Constructor<T> {
    const wrapped = this.get<T>(name, true) as WrappedConstructor<T>;

    return wrapped && wrapped.Clazz;
  }

  public getSignedExtensionExtra (): Record<string, keyof InterfaceTypes> {
    return expandExtensionTypes(this.#signedExtensions, 'payload', this.#userExtensions);
  }

  public getSignedExtensionTypes (): Record<string, keyof InterfaceTypes> {
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
      this.#classes.set(arg1.name, { Clazz: arg1, isWrapped: true });
    } else if (isString(arg1)) {
      assert(isFunction(arg2), () => `Expected class definition passed to '${arg1}' registration`);
      assert(arg1 !== arg2.toString(), () => `Unable to register circular ${arg1} === ${arg1}`);

      this.#classes.set(arg1, { Clazz: arg2, isWrapped: true });
    } else {
      this._registerObject(arg1);
    }
  }

  private _registerObject (obj: RegistryTypes): void {
    Object.entries(obj).forEach(([name, type]): void => {
      if (isFunction(type)) {
        // This _looks_ a bit funny, but `typeof Clazz === 'function'
        this.#classes.set(name, { Clazz: type, isWrapped: true });
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
          // FIXME Use the extension and their injected types
          ? metadata.asLatest.extrinsic.signedExtensions.map(({ identifier }) => identifier.toString())
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
