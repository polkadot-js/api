// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, IU8a } from '@polkadot/types-codec/types';
import type { ExtDef } from '../extrinsic/signedExtensions/types';
import type { ChainProperties, DispatchErrorModule, Hash, MetadataLatest, SiField, SiLookupTypeId, SiVariant } from '../interfaces/types';
import type { CallFunction, CodecHasher, Definitions, DetectCodec, RegisteredTypes, Registry, RegistryError, RegistryTypes } from '../types';
import type { CreateOptions, TypeDef } from './types';

import { DoNotConstruct, Json, Raw } from '@polkadot/types-codec';
import { assert, assertReturn, BN_ZERO, formatBalance, isFunction, isString, isU8a, lazyMethod, logger, objectSpread, stringCamelCase, stringify } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import { expandExtensionTypes, fallbackExtensions, findUnknownExtensions } from '../extrinsic/signedExtensions';
import { GenericEventData } from '../generic/Event';
import * as baseTypes from '../index.types';
import * as definitions from '../interfaces/definitions';
import { decorateConstants, filterCallsSome, filterEventsSome } from '../metadata/decorate';
import { createCallFunction } from '../metadata/decorate/extrinsics';
import { Metadata } from '../metadata/Metadata';
import { PortableRegistry } from '../metadata/PortableRegistry';
import { constructTypeClass, createClass } from './createClass';
import { createTypeUnsafe } from './createType';
import { lazyVariants } from './lazy';

const l = logger('registry');

function valueToString (v: { toString: () => string }): string {
  return v.toString();
}

function getFieldArgs (lookup: PortableRegistry, fields: SiField[]): string[] {
  const args = new Array<string>(fields.length);

  for (let i = 0; i < fields.length; i++) {
    args[i] = lookup.getTypeDef(fields[i].type).type;
  }

  return args;
}

function clearRecord (record: Record<string, unknown>): void {
  const keys = Object.keys(record);

  for (let i = 0; i < keys.length; i++) {
    delete record[keys[i]];
  }
}

function getVariantStringIdx ({ index }: SiVariant): string {
  return index.toString();
}

// create error mapping from metadata
function injectErrors (_: Registry, { lookup, pallets }: MetadataLatest, version: number, result: Record<string, Record<string, RegistryError>>): void {
  clearRecord(result);

  for (let i = 0; i < pallets.length; i++) {
    const { errors, index, name } = pallets[i];

    if (errors.isSome) {
      const sectionName = stringCamelCase(name);

      lazyMethod(result, version >= 12 ? index.toNumber() : i, () =>
        lazyVariants(lookup, errors.unwrap(), getVariantStringIdx, ({ docs, fields, index, name }: SiVariant): RegistryError => ({
          args: getFieldArgs(lookup, fields),
          docs: docs.map(valueToString),
          fields,
          index: index.toNumber(),
          method: name.toString(),
          name: name.toString(),
          section: sectionName
        }))
      );
    }
  }
}

// create event classes from metadata
function injectEvents (registry: CodecRegistry, { lookup, pallets }: MetadataLatest, version: number, result: Record<string, Record<string, CodecClass<GenericEventData>>>): void {
  const filtered = pallets.filter(filterEventsSome);

  clearRecord(result);

  for (let i = 0; i < filtered.length; i++) {
    const { events, index, name } = filtered[i];

    lazyMethod(result, version >= 12 ? index.toNumber() : i, () =>
      lazyVariants(lookup, events.unwrap(), getVariantStringIdx, (variant: SiVariant): CodecClass<GenericEventData> => {
        const meta = registry.createType('EventMetadataLatest', objectSpread({}, variant, { args: getFieldArgs(lookup, variant.fields) }));

        return class extends GenericEventData {
          constructor (registry: CodecRegistry, value: Uint8Array) {
            super(registry, value, meta, stringCamelCase(name), variant.name.toString());
          }
        };
      })
    );
  }
}

// create extrinsic mapping from metadata
function injectExtrinsics (registry: CodecRegistry, { lookup, pallets }: MetadataLatest, version: number, result: Record<string, Record<string, CallFunction>>): void {
  const filtered = pallets.filter(filterCallsSome);

  clearRecord(result);

  for (let i = 0; i < filtered.length; i++) {
    const { calls, index, name } = filtered[i];
    const sectionIndex = version >= 12 ? index.toNumber() : i;

    lazyMethod(result, sectionIndex, () =>
      lazyVariants(lookup, calls.unwrap(), getVariantStringIdx, (variant: SiVariant) =>
        createCallFunction(registry, lookup, variant, stringCamelCase(name), sectionIndex)
      )
    );
  }
}

// extract additional properties from the metadata
function extractProperties (registry: CodecRegistry, metadata: Metadata): ChainProperties | undefined {
  const original = registry.getChainProperties();
  const constants = decorateConstants(registry, metadata.asLatest, metadata.version);
  const ss58Format = constants.system && (constants.system.sS58Prefix || constants.system.ss58Prefix);

  if (!ss58Format) {
    return original;
  }

  const { tokenDecimals, tokenSymbol } = original || {};

  return registry.createType('ChainProperties', { ss58Format, tokenDecimals, tokenSymbol });
}

export class TypeRegistry implements Registry {
  #classes = new Map<string, CodecClass>();

  #definitions = new Map<string, string>();

  #lookup?: PortableRegistry;

  #metadata?: MetadataLatest;

  #metadataVersion = 0;

  readonly #metadataCalls: Record<string, Record<string, CallFunction>> = {};

  readonly #metadataErrors: Record<string, Record<string, RegistryError>> = {};

  readonly #metadataEvents: Record<string, Record<string, CodecClass<GenericEventData>>> = {};

  #unknownTypes = new Map<string, boolean>();

  #chainProperties?: ChainProperties;

  #hasher: (data: Uint8Array) => Uint8Array = blake2AsU8a;

  readonly #knownDefaults: RegistryTypes;

  readonly #knownDefinitions: Record<string, Definitions>;

  #knownTypes: RegisteredTypes = {};

  #signedExtensions: string[] = fallbackExtensions;

  #userExtensions?: ExtDef;

  public createdAtHash?: Hash;

  constructor (createdAtHash?: Hash | Uint8Array | string) {
    this.#knownDefaults = objectSpread({ Json, Metadata, PortableRegistry, Raw }, baseTypes);
    this.#knownDefinitions = definitions;

    this.init();

    if (createdAtHash) {
      this.createdAtHash = this.createType('Hash', createdAtHash);
    }
  }

  public init (): this {
    // start clean
    this.#classes = new Map<string, CodecClass>();
    this.#definitions = new Map<string, string>();
    this.#unknownTypes = new Map<string, boolean>();
    this.#knownTypes = {};

    // register know, first classes then on-demand-created definitions
    this.register(this.#knownDefaults);

    const allKnown = Object.values(this.#knownDefinitions);

    for (let i = 0; i < allKnown.length; i++) {
      this.register(allKnown[i].types as unknown as RegistryTypes);
    }

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
        return allTokens.map(valueToString);
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
    return this.#lookup || this.metadata.lookup;
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
  public createClass <T extends Codec = Codec, K extends string = string, R = DetectCodec<T, K>> (type: K): CodecClass<R> {
    return createClass(this, type) as unknown as CodecClass<R>;
  }

  /**
   * @description Creates an instance of a type as registered
   */
  public createType <T extends Codec = Codec, K extends string = string, R = DetectCodec<T, K>> (type: K, ...params: unknown[]): R {
    return this.createTypeUnsafe(type, params) as unknown as R;
  }

  /**
   * @description Creates an instance of a type as registered
   */
  public createTypeUnsafe <T extends Codec = Codec, K extends string = string> (type: K, params: unknown[], options?: CreateOptions): DetectCodec<T, K> {
    return createTypeUnsafe(this, type, params, options);
  }

  // find a specific call
  public findMetaCall (callIndex: Uint8Array): CallFunction {
    const [section, method] = [callIndex[0], callIndex[1]];

    return assertReturn(
      this.#metadataCalls[`${section}`] && this.#metadataCalls[`${section}`][`${method}`],
      () => `findMetaCall: Unable to find Call with index [${section}, ${method}]/[${callIndex.toString()}]`
    );
  }

  // finds an error
  public findMetaError (errorIndex: Uint8Array | DispatchErrorModule): RegistryError {
    const [section, method] = isU8a(errorIndex)
      ? [errorIndex[0], errorIndex[1]]
      : [errorIndex.index.toNumber(), errorIndex.error.toNumber()];

    return assertReturn(
      this.#metadataErrors[`${section}`] && this.#metadataErrors[`${section}`][`${method}`],
      () => `findMetaError: Unable to find Error with index [${section}, ${method}]/[${errorIndex.toString()}]`
    );
  }

  public findMetaEvent (eventIndex: Uint8Array): CodecClass<GenericEventData> {
    const [section, method] = [eventIndex[0], eventIndex[1]];

    return assertReturn(
      this.#metadataEvents[`${section}`] && this.#metadataEvents[`${section}`][`${method}`],
      () => `findMetaEvent: Unable to find Event with index [${section}, ${method}]/[${eventIndex.toString()}]`
    );
  }

  public get <T extends Codec = Codec, K extends string = string, R = DetectCodec<T, K>> (name: K, withUnknown?: boolean, knownTypeDef?: TypeDef): CodecClass<R> | undefined {
    let Type = this.#classes.get(name);

    // we have not already created the type, attempt it
    if (!Type) {
      const definition = this.#definitions.get(name);
      let BaseType: CodecClass | undefined;

      // we have a definition, so create the class now (lazily)
      if (definition) {
        BaseType = createClass(this, definition);
      } else if (knownTypeDef) {
        BaseType = constructTypeClass(this, knownTypeDef);
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

    return Type as unknown as CodecClass<R>;
  }

  public getChainProperties (): ChainProperties | undefined {
    return this.#chainProperties;
  }

  public getClassName (Type: CodecClass): string | undefined {
    // we cannot rely on export order (anymore, since babel/core 7.15.8), so in the case of
    // items such as u32 & U32, we get the lowercase versions here... not quite as optimal
    // (previously this used to be a simple find & return)
    const names: string[] = [];

    for (const [name, Clazz] of this.#classes.entries()) {
      if (Type === Clazz) {
        names.push(name);
      }
    }

    // both sort and reverse are done in-place
    names.sort().reverse();

    return names.length
      ? names[0]
      : undefined;
  }

  public getDefinition (typeName: string): string | undefined {
    return this.#definitions.get(typeName);
  }

  public getModuleInstances (specName: string, moduleName: string): string[] | undefined {
    return this.#knownTypes?.typesBundle?.spec?.[specName]?.instances?.[moduleName];
  }

  public getOrThrow <T extends Codec = Codec, K extends string = string, R = DetectCodec<T, K>> (name: K, msg?: string): CodecClass<R> {
    const Clazz = this.get<T, K>(name);

    assert(Clazz, msg || `type ${name} not found`);

    return Clazz as unknown as CodecClass<R>;
  }

  public getOrUnknown <T extends Codec = Codec, K extends string = string, R = DetectCodec<T, K>> (name: K): CodecClass<R> {
    return this.get<T, K>(name, true) as unknown as CodecClass<R>;
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

  public hash (data: Uint8Array): IU8a {
    return this.createType('CodecHash', this.#hasher(data));
  }

  public register (type: CodecClass | RegistryTypes): void;

  // eslint-disable-next-line no-dupe-class-members
  public register (name: string, type: CodecClass): void;

  // eslint-disable-next-line no-dupe-class-members
  public register (arg1: string | CodecClass | RegistryTypes, arg2?: CodecClass): void {
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
    const entries = Object.entries(obj);

    for (let e = 0; e < entries.length; e++) {
      const [name, type] = entries[e];

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
    }
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

  setLookup (lookup: PortableRegistry): void {
    this.#lookup = lookup;
  }

  // sets the metadata
  public setMetadata (metadata: Metadata, signedExtensions?: string[], userExtensions?: ExtDef): void {
    this.#metadata = metadata.asLatest;
    this.#metadataVersion = metadata.version;

    injectExtrinsics(this, this.#metadata, this.#metadataVersion, this.#metadataCalls);
    injectErrors(this, this.#metadata, this.#metadataVersion, this.#metadataErrors);
    injectEvents(this, this.#metadata, this.#metadataVersion, this.#metadataEvents);

    // setup the available extensions
    this.setSignedExtensions(
      signedExtensions || (
        this.#metadata.extrinsic.version.gt(BN_ZERO)
          // FIXME Use the extension and their injected types
          ? this.#metadata.extrinsic.signedExtensions.map(({ identifier }) => identifier.toString())
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
