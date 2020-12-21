// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-var-requires */

import type { ChainProperties, DispatchErrorModule, H256 } from '../interfaces/types';
import type { CallFunction, Codec, Constructor, InterfaceTypes, RegisteredTypes, Registry, RegistryError, RegistryTypes } from '../types';

// we are attempting to avoid circular refs, hence the Metadata path import
import { decorateExtrinsics } from '@polkadot/metadata/decorate/extrinsics';
import { Metadata } from '@polkadot/metadata/Metadata';
import { assert, assertReturn, BN_ZERO, formatBalance, isFunction, isString, isU8a, logger, stringCamelCase, u8aToHex } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import { Json } from '../codec/Json';
import { Raw } from '../codec/Raw';
import { defaultExtensions, expandExtensionTypes, findUnknownExtensions } from '../extrinsic/signedExtensions';
import { GenericEventData } from '../generic/Event';
import * as baseTypes from '../index.types';
import * as definitions from '../interfaces/definitions';
import { DoNotConstruct } from '../primitive/DoNotConstruct';
import { createClass, getTypeClass } from './createClass';
import { createType } from './createType';
import { getTypeDef } from './getTypeDef';

const l = logger('registry');

// create error mapping from metadata
function injectErrors (_: Registry, metadata: Metadata, metadataErrors: Record<string, RegistryError>): void {
  const modules = metadata.asLatest.modules;
  const isIndexed = modules.some(({ index }) => !index.eqn(255));

  // decorate the errors
  modules.forEach((section, _sectionIndex): void => {
    const sectionIndex = isIndexed
      ? section.index.toNumber()
      : _sectionIndex;
    const sectionName = stringCamelCase(section.name);

    section.errors.forEach(({ documentation, name }, index): void => {
      const eventIndex = new Uint8Array([sectionIndex, index]);

      metadataErrors[u8aToHex(eventIndex)] = {
        documentation: documentation.map((d): string => d.toString()),
        index,
        name: name.toString(),
        section: sectionName
      };
    });
  });
}

// create event classes from metadata
function injectEvents (registry: Registry, metadata: Metadata, metadataEvents: Record<string, Constructor<GenericEventData>>): void {
  const modules = metadata.asLatest.modules;
  const isIndexed = modules.some(({ index }) => !index.eqn(255));

  // decorate the events
  modules
    .filter(({ events }): boolean => events.isSome)
    .forEach((section, _sectionIndex): void => {
      const sectionIndex = isIndexed
        ? section.index.toNumber()
        : _sectionIndex;
      const sectionName = stringCamelCase(section.name);

      section.events.unwrap().forEach((meta, methodIndex): void => {
        const methodName = meta.name.toString();
        const eventIndex = new Uint8Array([sectionIndex, methodIndex]);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        const typeDef = meta.args.map((arg) => getTypeDef(arg));
        let Types: Constructor<Codec>[] = [];

        try {
          Types = typeDef.map((typeDef): Constructor<Codec> => getTypeClass(registry, typeDef));
        } catch (error) {
          l.error(error);
        }

        metadataEvents[u8aToHex(eventIndex)] = class extends GenericEventData {
          constructor (registry: Registry, value: Uint8Array) {
            super(registry, value, Types, typeDef, meta, sectionName, methodName);
          }
        };
      });
    });
}

// create extrinsic mapping from metadata
function injectExtrinsics (registry: Registry, metadata: Metadata, metadataCalls: Record<string, CallFunction>): void {
  const extrinsics = decorateExtrinsics(registry, metadata.asLatest);

  // decorate the extrinsics
  Object.values(extrinsics).forEach((methods): void =>
    Object.values(methods).forEach((method): void => {
      metadataCalls[u8aToHex(method.callIndex)] = method;
    })
  );
}

export class TypeRegistry implements Registry {
  #classes = new Map<string, Constructor>();

  #definitions = new Map<string, string>();

  readonly #metadataCalls: Record<string, CallFunction> = {};

  readonly #metadataErrors: Record<string, RegistryError> = {};

  readonly #metadataEvents: Record<string, Constructor<GenericEventData>> = {};

  #unknownTypes = new Map<string, boolean>();

  #chainProperties?: ChainProperties;

  #hasher: (data: Uint8Array) => Uint8Array = blake2AsU8a;

  readonly #knownDefaults: RegistryTypes;

  readonly #knownDefinitions: Record<string, { types: RegistryTypes }>;

  #knownTypes: RegisteredTypes = {};

  #signedExtensions: string[] = defaultExtensions;

  constructor () {
    this.#knownDefaults = { Json, Metadata, Raw, ...baseTypes };
    this.#knownDefinitions = definitions as unknown as Record<string, { types: RegistryTypes }>;

    this.init();
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

  public get chainDecimals (): number {
    return this.#chainProperties?.tokenDecimals.isSome
      ? this.#chainProperties.tokenDecimals.unwrap().toNumber()
      : 12;
  }

  public get chainSS58 (): number | undefined {
    return this.#chainProperties?.ss58Format.isSome
      ? this.#chainProperties.ss58Format.unwrap().toNumber()
      : undefined;
  }

  public get chainToken (): string {
    return this.#chainProperties?.tokenSymbol.isSome
      ? this.#chainProperties.tokenSymbol.unwrap().toString()
      : formatBalance.getDefaults().unit;
  }

  public get knownTypes (): RegisteredTypes {
    return this.#knownTypes;
  }

  public get signedExtensions (): string[] {
    return this.#signedExtensions;
  }

  /**
   * @describe Creates an instance of the class
   */
  public createClass <K extends keyof InterfaceTypes> (type: K): Constructor<InterfaceTypes[K]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return createClass(this, type) as any;
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
        : new Uint8Array([errorIndex.index.toNumber(), errorIndex.error.toNumber()])
    );

    return assertReturn(this.#metadataErrors[hexIndex], `findMetaError: Unable to find Error with index ${hexIndex}/[${errorIndex.toString()}]`);
  }

  public findMetaEvent (eventIndex: Uint8Array): Constructor<GenericEventData> {
    const hexIndex = u8aToHex(eventIndex);

    return assertReturn(this.#metadataEvents[hexIndex], `findMetaEvent: Unable to find Event with index ${hexIndex}/[${eventIndex.toString()}]`);
  }

  public get <T extends Codec = Codec> (name: string, withUnknown?: boolean): Constructor<T> | undefined {
    let Type = this.#classes.get(name);

    // we have not already created the type, attempt it
    if (!Type) {
      const definition = this.#definitions.get(name);
      let BaseType: Constructor<Codec> | undefined;

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

    return Type as Constructor<T>;
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

  public getDefinition (name: string): string | undefined {
    return this.#definitions.get(name);
  }

  public getOrThrow <T extends Codec = Codec> (name: string, msg?: string): Constructor<T> {
    return assertReturn(this.get<T>(name), msg || `type ${name} not found`);
  }

  public getOrUnknown <T extends Codec = Codec> (name: string): Constructor<T> {
    return this.get<T>(name, true) as Constructor<T>;
  }

  public getSignedExtensionExtra (): Record<string, keyof InterfaceTypes> {
    return expandExtensionTypes(this.#signedExtensions, 'extra');
  }

  public getSignedExtensionTypes (): Record<string, keyof InterfaceTypes> {
    return expandExtensionTypes(this.#signedExtensions, 'types');
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

  public hash (data: Uint8Array): H256 {
    return this.createType('H256', this.#hasher(data));
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
      assert(isFunction(arg2), `Expected class definition passed to '${arg1}' registration`);

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
          : JSON.stringify(type);

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

  setHasher (hasher: (data: Uint8Array) => Uint8Array = blake2AsU8a): void {
    this.#hasher = hasher;
  }

  setKnownTypes (knownTypes: RegisteredTypes): void {
    this.#knownTypes = knownTypes;
  }

  // sets the metadata
  public setMetadata (metadata: Metadata, signedExtensions?: string[]): void {
    injectExtrinsics(this, metadata, this.#metadataCalls);
    injectErrors(this, metadata, this.#metadataErrors);
    injectEvents(this, metadata, this.#metadataEvents);

    // setup the available extensions
    this.setSignedExtensions(
      signedExtensions || (
        metadata.asLatest.extrinsic.version.gt(BN_ZERO)
          ? metadata.asLatest.extrinsic.signedExtensions.map((key) => key.toString())
          : defaultExtensions
      )
    );
  }

  // sets the available signed extensions
  setSignedExtensions (signedExtensions: string[] = defaultExtensions): void {
    this.#signedExtensions = signedExtensions;

    const unknown = findUnknownExtensions(this.#signedExtensions);

    if (unknown.length) {
      l.warn(`Unknown signed extensions ${unknown.join(', ')} found, treating them as no-effect`);
    }
  }
}
