// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyString, Codec, CodecClass, IU8a, LookupString } from '@polkadot/types-codec/types';
import type { CreateOptions, TypeDef } from '@polkadot/types-create/types';
import type { ExtDef } from '../extrinsic/signedExtensions/types.js';
import type { ChainProperties, DispatchErrorModule, DispatchErrorModuleU8, DispatchErrorModuleU8a, EventMetadataLatest, Hash, MetadataLatest, SiField, SiLookupTypeId, SiVariant, WeightV1, WeightV2 } from '../interfaces/types.js';
import type { CallFunction, CodecHasher, Definitions, DetectCodec, RegisteredTypes, Registry, RegistryError, RegistryTypes } from '../types/index.js';

import { DoNotConstruct, Json, Raw } from '@polkadot/types-codec';
import { constructTypeClass, createClassUnsafe, createTypeUnsafe } from '@polkadot/types-create';
import { assertReturn, BN_ZERO, formatBalance, isBn, isFunction, isNumber, isString, isU8a, lazyMethod, logger, objectSpread, stringCamelCase, stringify } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import { expandExtensionTypes, fallbackExtensions, findUnknownExtensions } from '../extrinsic/signedExtensions/index.js';
import { GenericEventData } from '../generic/Event.js';
import * as baseTypes from '../index.types.js';
import * as definitions from '../interfaces/definitions.js';
import { createCallFunction } from '../metadata/decorate/extrinsics/index.js';
import { decorateConstants, filterCallsSome, filterEventsSome } from '../metadata/decorate/index.js';
import { Metadata } from '../metadata/Metadata.js';
import { PortableRegistry } from '../metadata/PortableRegistry/index.js';
import { lazyVariants } from './lazy.js';

const DEFAULT_FIRST_CALL_IDX = new Uint8Array(2);

const l = logger('registry');

function sortDecimalStrings (a: string, b: string): number {
  return parseInt(a, 10) - parseInt(b, 10);
}

function valueToString (v: { toString: () => string }): string {
  return v.toString();
}

function getFieldArgs (lookup: PortableRegistry, fields: SiField[]): string[] {
  const count = fields.length;
  const args = new Array<string>(count);

  for (let i = 0; i < count; i++) {
    args[i] = lookup.getTypeDef(fields[i].type).type;
  }

  return args;
}

function clearRecord (record: Record<string, unknown>): void {
  const keys = Object.keys(record);

  for (let i = 0, count = keys.length; i < count; i++) {
    delete record[keys[i]];
  }
}

function getVariantStringIdx ({ index }: SiVariant): string {
  return index.toString();
}

// create error mapping from metadata
function injectErrors (_: TypeRegistry, { lookup, pallets }: MetadataLatest, version: number, result: Record<string, Record<string, RegistryError>>): void {
  clearRecord(result);

  for (let i = 0, count = pallets.length; i < count; i++) {
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
function injectEvents (registry: TypeRegistry, { lookup, pallets }: MetadataLatest, version: number, result: Record<string, Record<string, CodecClass<GenericEventData>>>): void {
  const filtered = pallets.filter(filterEventsSome);

  clearRecord(result);

  for (let i = 0, count = filtered.length; i < count; i++) {
    const { events, index, name } = filtered[i];

    lazyMethod(result, version >= 12 ? index.toNumber() : i, () =>
      lazyVariants(lookup, events.unwrap(), getVariantStringIdx, (variant: SiVariant): CodecClass<GenericEventData> => {
        const meta = registry.createType<EventMetadataLatest>('EventMetadataLatest', objectSpread({}, variant, { args: getFieldArgs(lookup, variant.fields) }));

        return class extends GenericEventData {
          constructor (registry: Registry, value: Uint8Array) {
            super(registry, value, meta, stringCamelCase(name), variant.name.toString());
          }
        };
      })
    );
  }
}

// create extrinsic mapping from metadata
function injectExtrinsics (registry: TypeRegistry, { lookup, pallets }: MetadataLatest, version: number, result: Record<string, Record<string, CallFunction>>, mapping: Record<string, string[]>): void {
  const filtered = pallets.filter(filterCallsSome);

  clearRecord(result);
  clearRecord(mapping);

  for (let i = 0, count = filtered.length; i < count; i++) {
    const { calls, index, name } = filtered[i];
    const sectionIndex = version >= 12 ? index.toNumber() : i;
    const sectionName = stringCamelCase(name);
    const allCalls = calls.unwrap();

    lazyMethod(result, sectionIndex, () =>
      lazyVariants(lookup, allCalls, getVariantStringIdx, (variant: SiVariant) =>
        createCallFunction(registry, lookup, variant, sectionName, sectionIndex)
      )
    );

    const { path } = registry.lookup.getSiType(allCalls.type);

    // frame_system::pallet::Call / pallet_balances::pallet::Call / polkadot_runtime_parachains::configuration::pallet::Call /
    const palletIdx = path.findIndex((v) => v.eq('pallet'));

    if (palletIdx !== -1) {
      const name = stringCamelCase(
        path
          .slice(0, palletIdx)
          .map((p, i) =>
            i === 0
              // frame_system || pallet_balances
              ? p.replace(/^(frame|pallet)_/, '')
              : p
          )
          .join(' ')
      );

      if (!mapping[name]) {
        mapping[name] = [sectionName];
      } else {
        mapping[name].push(sectionName);
      }
    }
  }
}

// extract additional properties from the metadata
function extractProperties (registry: TypeRegistry, metadata: Metadata): ChainProperties | undefined {
  const original = registry.getChainProperties();
  const constants = decorateConstants(registry, metadata.asLatest, metadata.version);
  const ss58Format = constants['system'] && (constants['system']['sS58Prefix'] || constants['system']['ss58Prefix']);

  if (!ss58Format) {
    return original;
  }

  const { tokenDecimals, tokenSymbol } = original || {};

  return registry.createTypeUnsafe<ChainProperties>('ChainProperties', [{ ss58Format, tokenDecimals, tokenSymbol }]);
}

export class TypeRegistry implements Registry {
  #chainProperties?: ChainProperties;
  #classes = new Map<string, CodecClass>();
  #definitions = new Map<string, string>();
  #firstCallIndex: Uint8Array | null = null;
  #hasher: (data: Uint8Array) => Uint8Array = blake2AsU8a;
  #knownTypes: RegisteredTypes = {};
  #lookup?: PortableRegistry;
  #metadata?: MetadataLatest;
  #metadataVersion = 0;
  #signedExtensions: string[] = fallbackExtensions;
  #unknownTypes = new Map<string, boolean>();
  #userExtensions?: ExtDef | undefined;

  readonly #knownDefaults: Record<string, CodecClass>;
  readonly #knownDefaultsEntries: [string, CodecClass][];
  readonly #knownDefinitions: Record<string, Definitions>;
  readonly #metadataCalls: Record<string, Record<string, CallFunction>> = {};
  readonly #metadataErrors: Record<string, Record<string, RegistryError>> = {};
  readonly #metadataEvents: Record<string, Record<string, CodecClass<GenericEventData>>> = {};
  readonly #moduleMap: Record<string, string[]> = {};

  public createdAtHash?: Hash;

  constructor (createdAtHash?: Hash | Uint8Array | string) {
    this.#knownDefaults = objectSpread({ Json, Metadata, PortableRegistry, Raw }, baseTypes);
    this.#knownDefaultsEntries = Object.entries(this.#knownDefaults);
    this.#knownDefinitions = definitions;

    const allKnown = Object.values(this.#knownDefinitions);

    for (let i = 0, count = allKnown.length; i < count; i++) {
      this.register(allKnown[i].types as unknown as RegistryTypes);
    }

    if (createdAtHash) {
      this.createdAtHash = this.createType('BlockHash', createdAtHash);
    }
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

  public get firstCallIndex (): Uint8Array {
    return this.#firstCallIndex || DEFAULT_FIRST_CALL_IDX;
  }

  /**
   * @description Returns true if the type is in a Compat format
   */
  public isLookupType (value: string): value is LookupString {
    return /Lookup\d+$/.test(value);
  }

  /**
   * @description Creates a lookup string from the supplied id
   */
  public createLookupType (lookupId: SiLookupTypeId | number): LookupString {
    return `Lookup${typeof lookupId === 'number' ? lookupId : lookupId.toNumber()}`;
  }

  public get knownTypes (): RegisteredTypes {
    return this.#knownTypes;
  }

  public get lookup (): PortableRegistry {
    return assertReturn(this.#lookup, 'PortableRegistry has not been set on this registry');
  }

  public get metadata (): MetadataLatest {
    return assertReturn(this.#metadata, 'Metadata has not been set on this registry');
  }

  public get unknownTypes (): string[] {
    return [...this.#unknownTypes.keys()];
  }

  public get signedExtensions (): string[] {
    return this.#signedExtensions;
  }

  public clearCache (): void {
    this.#classes = new Map();
  }

  /**
   * @describe Creates an instance of the class
   */
  public createClass <T extends Codec = Codec, K extends string = string> (type: K): CodecClass<DetectCodec<T, K>> {
    return createClassUnsafe<DetectCodec<T, K>>(this, type);
  }

  /**
   * @describe Creates an instance of the class
   */
  public createClassUnsafe <T extends Codec = Codec, K extends string = string> (type: K): CodecClass<T> {
    return createClassUnsafe(this, type);
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
  public createTypeUnsafe <T extends Codec = Codec, K extends string = string> (type: K, params: unknown[], options?: CreateOptions): T {
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
  public findMetaError (errorIndex: Uint8Array | DispatchErrorModule | DispatchErrorModuleU8 | DispatchErrorModuleU8a): RegistryError {
    const [section, method] = isU8a(errorIndex)
      ? [errorIndex[0], errorIndex[1]]
      : [
        errorIndex.index.toNumber(),
        isU8a(errorIndex.error)
          ? errorIndex.error[0]
          : errorIndex.error.toNumber()
      ];

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

  public get <T extends Codec = Codec, K extends string = string> (name: K, withUnknown?: boolean, knownTypeDef?: TypeDef): CodecClass<T> | undefined {
    return this.getUnsafe(name, withUnknown, knownTypeDef);
  }

  public getUnsafe <T extends Codec = Codec, K extends string = string> (name: K, withUnknown?: boolean, knownTypeDef?: TypeDef): CodecClass<T> | undefined {
    let Type = this.#classes.get(name) || this.#knownDefaults[name];

    // we have not already created the type, attempt it
    if (!Type) {
      const definition = this.#definitions.get(name);
      let BaseType: CodecClass | undefined;

      // we have a definition, so create the class now (lazily)
      if (definition) {
        BaseType = createClassUnsafe(this, definition);
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

        // In the case of lookups, we also want to store the actual class against
        // the lookup name, instad of having to traverse again
        if (knownTypeDef && isNumber(knownTypeDef.lookupIndex)) {
          this.#classes.set(this.createLookupType(knownTypeDef.lookupIndex), Type);
        }
      }
    }

    return Type as unknown as CodecClass<T>;
  }

  public getChainProperties (): ChainProperties | undefined {
    return this.#chainProperties;
  }

  public getClassName (Type: CodecClass): string | undefined {
    // we cannot rely on export order (anymore, since babel/core 7.15.8), so in the case of
    // items such as u32 & U32, we get the lowercase versions here... not quite as optimal
    // (previously this used to be a simple find & return)
    const names: string[] = [];

    for (const [name, Clazz] of this.#knownDefaultsEntries) {
      if (Type === Clazz) {
        names.push(name);
      }
    }

    for (const [name, Clazz] of this.#classes.entries()) {
      if (Type === Clazz) {
        names.push(name);
      }
    }

    return names.length
      // both sort and reverse are done in-place
      // ['U32', 'u32'] -> ['u32', 'U32']
      ? names.sort().reverse()[0]
      : undefined;
  }

  public getDefinition (typeName: string): string | undefined {
    return this.#definitions.get(typeName);
  }

  public getModuleInstances (specName: AnyString, moduleName: string): string[] | undefined {
    return this.#knownTypes?.typesBundle?.spec?.[specName.toString()]?.instances?.[moduleName] || this.#moduleMap[moduleName];
  }

  public getOrThrow <T extends Codec = Codec, K extends string = string, R = DetectCodec<T, K>> (name: K): CodecClass<R> {
    const Clazz = this.get<T, K>(name);

    if (!Clazz) {
      throw new Error(`type ${name} not found`);
    }

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
    return this.#classes.has(name) || !!this.#knownDefaults[name];
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
      if (!isFunction(arg2)) {
        throw new Error(`Expected class definition passed to '${arg1}' registration`);
      } else if (arg1 === arg2.toString()) {
        throw new Error(`Unable to register circular ${arg1} === ${arg1}`);
      }

      this.#classes.set(arg1, arg2);
    } else {
      this.#registerObject(arg1);
    }
  }

  #registerObject = (obj: RegistryTypes): void => {
    const entries = Object.entries(obj);

    for (let e = 0, count = entries.length; e < count; e++) {
      const [name, type] = entries[e];

      if (isFunction(type)) {
        // This _looks_ a bit funny, but `typeof Clazz === 'function'
        this.#classes.set(name, type);
      } else {
        const def = isString(type)
          ? type
          : stringify(type);

        if (name === def) {
          throw new Error(`Unable to register circular ${name} === ${def}`);
        }

        // we already have this type, remove the classes registered for it
        if (this.#classes.has(name)) {
          this.#classes.delete(name);
        }

        this.#definitions.set(name, def);
      }
    }
  };

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

    // register all applicable types found
    lookup.register();
  }

  // register alias types alongside the portable/lookup setup
  // (we don't combine this into setLookup since that would/could
  // affect stand-along lookups, such as ABIs which don't have
  // actual on-chain metadata)
  #registerLookup = (lookup: PortableRegistry): void => {
    // attach the lookup before we register any types
    this.setLookup(lookup);

    // we detect based on runtime configuration
    let Weight: string | null = null;

    if (this.hasType('SpWeightsWeightV2Weight')) {
      // detection for WeightV2 type based on latest naming
      const weightv2 = this.createType<WeightV2>('SpWeightsWeightV2Weight');

      Weight = weightv2.refTime && weightv2.proofSize
        // with both refTime & proofSize we use as-is (WeightV2)
        ? 'SpWeightsWeightV2Weight'
        // fallback to WeightV1 (WeightV1.5 is a struct, single field)
        : 'WeightV1';
    } else if (!isBn(this.createType<WeightV1>('Weight'))) {
      // where we have an already-supplied BN override, we don't clobber
      // it with our detected value (This protects against pre-defines
      // where Weight may be aliassed to WeightV0, e.g. in early Kusama chains)
      Weight = 'WeightV1';
    }

    if (Weight) {
      // we have detected a version, adjust the definition
      this.register({ Weight });
    }
  };

  // sets the metadata
  public setMetadata (metadata: Metadata, signedExtensions?: string[], userExtensions?: ExtDef, noInitWarn?: boolean): void {
    this.#metadata = metadata.asLatest;
    this.#metadataVersion = metadata.version;
    this.#firstCallIndex = null;

    // attach the lookup at this point and register relevant types (before injecting)
    this.#registerLookup(this.#metadata.lookup);

    injectExtrinsics(this, this.#metadata, this.#metadataVersion, this.#metadataCalls, this.#moduleMap);
    injectErrors(this, this.#metadata, this.#metadataVersion, this.#metadataErrors);
    injectEvents(this, this.#metadata, this.#metadataVersion, this.#metadataEvents);

    // set the default call index (the lowest section, the lowest method)
    // in most chains this should be 0,0
    const [defSection] = Object
      .keys(this.#metadataCalls)
      .sort(sortDecimalStrings);

    if (defSection) {
      const [defMethod] = Object
        .keys(this.#metadataCalls[defSection])
        .sort(sortDecimalStrings);

      if (defMethod) {
        this.#firstCallIndex = new Uint8Array([parseInt(defSection, 10), parseInt(defMethod, 10)]);
      }
    }

    // setup the available extensions
    this.setSignedExtensions(
      signedExtensions || (
        this.#metadata.extrinsic.version.gt(BN_ZERO)
          // FIXME Use the extension and their injected types
          ? this.#metadata.extrinsic.signedExtensions.map(({ identifier }) => identifier.toString())
          : fallbackExtensions
      ),
      userExtensions,
      noInitWarn
    );

    // setup the chain properties with format overrides
    this.setChainProperties(
      extractProperties(this, metadata)
    );
  }

  // sets the available signed extensions
  setSignedExtensions (signedExtensions: string[] = fallbackExtensions, userExtensions?: ExtDef, noInitWarn?: boolean): void {
    this.#signedExtensions = signedExtensions;
    this.#userExtensions = userExtensions;

    if (!noInitWarn) {
      const unknown = findUnknownExtensions(this.#signedExtensions, this.#userExtensions);

      if (unknown.length) {
        l.warn(`Unknown signed extensions ${unknown.join(', ')} found, treating them as no-effect`);
      }
    }
  }
}
