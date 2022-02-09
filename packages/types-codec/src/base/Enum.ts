// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyJson, Codec, CodecClass, IEnum, Inspect, IU8a, Registry } from '../types';

import { assert, isHex, isNumber, isObject, isString, isU8a, isUndefined, objectProperties, stringCamelCase, stringify, stringPascalCase, u8aConcat, u8aToHex, u8aToU8a } from '@polkadot/util';

import { mapToTypeMap, typesToMap } from '../utils';
import { Null } from './Null';

// export interface, this is used in Enum.with, so required as public by TS
export interface EnumCodecClass<T = Codec> {
  new(registry: Registry, value?: any, index?: number): T;
}

interface EntryDef {
  Type: CodecClass;
  index: number;
}

type TypesDef = Record<string, EntryDef>;

interface Decoded {
  index: number;
  value: Codec;
}

function isRustEnum (def: Record<string, string | CodecClass> | Record<string, number>): def is Record<string, string | CodecClass> {
  const defValues = Object.values(def);

  if (defValues.some((v) => isNumber(v))) {
    assert(defValues.every((v) => isNumber(v) && v >= 0 && v <= 255), 'Invalid number-indexed enum definition');

    return false;
  }

  return true;
}

function extractDef (registry: Registry, _def: Record<string, string | CodecClass> | Record<string, number> | string[]): { def: TypesDef; isBasic: boolean; isIndexed: boolean } {
  const def: TypesDef = {};
  let isBasic: boolean;
  let isIndexed: boolean;

  if (Array.isArray(_def)) {
    for (let i = 0; i < _def.length; i++) {
      def[_def[i]] = { Type: Null, index: i };
    }

    isBasic = true;
    isIndexed = false;
  } else if (isRustEnum(_def)) {
    const entries = Object.entries(mapToTypeMap(registry, _def));

    for (let i = 0; i < entries.length; i++) {
      const [key, Type] = entries[i];

      def[key] = { Type, index: i };
    }

    isBasic = !Object.values(def).some(({ Type }) => Type !== Null);
    isIndexed = false;
  } else {
    const entries = Object.entries(_def);

    for (let i = 0; i < entries.length; i++) {
      const [key, index] = entries[i];

      def[key] = { Type: Null, index };
    }

    isBasic = true;
    isIndexed = true;
  }

  return {
    def,
    isBasic,
    isIndexed
  };
}

function createFromValue (registry: Registry, def: TypesDef, index = 0, value?: unknown): Decoded {
  const entry = Object.values(def).find((e) => e.index === index);

  assert(!isUndefined(entry), () => `Unable to create Enum via index ${index}, in ${Object.keys(def).join(', ')}`);

  return {
    index,
    value: value instanceof entry.Type
      ? value
      : new entry.Type(registry, value)
  };
}

function decodeFromJSON (registry: Registry, def: TypesDef, key: string, value?: unknown): Decoded {
  // JSON comes in the form of { "<type (camelCase)>": "<value for type>" }, here we
  // additionally force to lower to ensure forward compat
  const keys = Object.keys(def).map((k) => k.toLowerCase());
  const keyLower = key.toLowerCase();
  const index = keys.indexOf(keyLower);

  assert(index !== -1, () => `Cannot map Enum JSON, unable to find '${key}' in ${keys.join(', ')}`);

  try {
    return createFromValue(registry, def, Object.values(def)[index].index, value);
  } catch (error) {
    throw new Error(`Enum(${key}):: ${(error as Error).message}`);
  }
}

function decodeEnum (registry: Registry, def: TypesDef, value?: unknown, index?: number): Decoded {
  // NOTE We check the index path first, before looking at values - this allows treating
  // the optional indexes before anything else, more-specific > less-specific
  if (isNumber(index)) {
    return createFromValue(registry, def, index, value);
  } else if (isU8a(value) || isHex(value)) {
    const u8a = u8aToU8a(value);

    // nested, we don't want to match isObject below
    if (u8a.length) {
      return createFromValue(registry, def, u8a[0], u8a.subarray(1));
    }
  } else if (value instanceof Enum) {
    return createFromValue(registry, def, value.index, value.value);
  } else if (isNumber(value)) {
    return createFromValue(registry, def, value);
  } else if (isString(value)) {
    return decodeFromJSON(registry, def, value.toString());
  } else if (isObject(value)) {
    const key = Object.keys(value)[0];

    return decodeFromJSON(registry, def, key, value[key]);
  }

  // Worst-case scenario, return the first with default
  return createFromValue(registry, def, Object.values(def)[0].index);
}

/**
 * @name Enum
 * @description
 * This implements an enum, that based on the value wraps a different type. It is effectively
 * an extension to enum where the value type is determined by the actual index.
 */
export class Enum implements IEnum {
  public readonly registry: Registry;

  public createdAtHash?: IU8a;

  readonly #def: TypesDef;

  readonly #entryIndex: number;

  readonly initialU8aLength?: number;

  readonly #indexes: number[];

  readonly #isBasic: boolean;

  readonly #isIndexed: boolean;

  readonly #raw: Codec;

  constructor (registry: Registry, Types: Record<string, string | CodecClass> | Record<string, number> | string[], value?: unknown, index?: number) {
    const { def, isBasic, isIndexed } = extractDef(registry, Types);

    // shortcut isU8a as used in SCALE decoding
    const decoded = isU8a(value) && value.length && !isNumber(index)
      ? createFromValue(registry, def, value[0], value.subarray(1))
      : decodeEnum(registry, def, value, index);

    this.registry = registry;
    this.#def = def;
    this.#isBasic = isBasic;
    this.#isIndexed = isIndexed;
    this.#indexes = Object.values(def).map(({ index }) => index);
    this.#entryIndex = this.#indexes.indexOf(decoded.index) || 0;
    this.#raw = decoded.value;

    if (this.#raw.initialU8aLength) {
      this.initialU8aLength = 1 + this.#raw.initialU8aLength;
    }
  }

  public static with (Types: Record<string, string | CodecClass> | Record<string, number> | string[]): EnumCodecClass<Enum> {
    const keys = Array.isArray(Types)
      ? Types
      : Object.keys(Types);
    const asKeys = new Array<string>(keys.length);
    const isKeys = new Array<string>(keys.length);

    for (let i = 0; i < keys.length; i++) {
      const name = stringPascalCase(keys[i].replace(' ', '_'));

      asKeys[i] = `as${name}`;
      isKeys[i] = `is${name}`;
    }

    return class extends Enum {
      constructor (registry: Registry, value?: unknown, index?: number) {
        super(registry, Types, value, index);

        objectProperties(this, isKeys, (_, i) => this.type === keys[i]);
        objectProperties(this, asKeys, (k, i): Codec => {
          assert(this[isKeys[i] as keyof this], () => `Cannot convert '${this.type}' via ${k}`);

          return this.value;
        });
      }
    };
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return 1 + this.#raw.encodedLength;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): IU8a {
    return this.registry.hash(this.toU8a());
  }

  /**
   * @description The index of the enum value
   */
  public get index (): number {
    return this.#indexes[this.#entryIndex];
  }

  /**
   * @description The value of the enum
   */
  public get inner (): Codec {
    return this.#raw;
  }

  /**
   * @description true if this is a basic enum (no values)
   */
  public get isBasic (): boolean {
    return this.#isBasic;
  }

  /**
   * @description Checks if the value is an empty value
   */
  public get isEmpty (): boolean {
    return this.#raw.isEmpty;
  }

  /**
   * @description Checks if the Enum points to a [[Null]] type
   */
  public get isNone (): boolean {
    return this.#raw instanceof Null;
  }

  /**
   * @description Checks if the Enum points to a [[Null]] type
   * @deprecated use isNone
   */
  public get isNull (): boolean {
    return this.#raw instanceof Null;
  }

  /**
   * @description The available keys for this enum
   */
  public get defIndexes (): number[] {
    return this.#indexes;
  }

  /**
   * @description The available keys for this enum
   */
  public get defKeys (): string[] {
    return Object.keys(this.#def);
  }

  /**
   * @description The name of the type this enum value represents
   */
  public get type (): string {
    return this.defKeys[this.#entryIndex];
  }

  /**
   * @description The value of the enum
   */
  public get value (): Codec {
    return this.#raw;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    // cater for the case where we only pass the enum index
    if (isU8a(other)) {
      return !this.toU8a().some((entry, index) => entry !== other[index]);
    } else if (isNumber(other)) {
      return this.toNumber() === other;
    } else if (this.#isBasic && isString(other)) {
      return this.type === other;
    } else if (isHex(other)) {
      return this.toHex() === other;
    } else if (other instanceof Enum) {
      return this.index === other.index && this.value.eq(other.value);
    } else if (isObject(other)) {
      return this.value.eq(other[this.type]);
    }

    // compare the actual wrapper value
    return this.value.eq(other);
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect (): Inspect {
    if (this.isBasic) {
      return { outer: [new Uint8Array([this.index])] };
    }

    const { inner, outer = [] } = this.#raw.inspect();

    return {
      inner,
      outer: [new Uint8Array([this.index]), ...outer]
    };
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): HexString {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (isExtended?: boolean): AnyJson {
    return this.#isBasic || this.isNone
      ? this.type
      : { [this.type]: this.#raw.toHuman(isExtended) };
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJson {
    return this.#isBasic
      ? this.type
      : { [stringCamelCase(this.type)]: this.#raw.toJSON() };
  }

  /**
   * @description Returns the number representation for the value
   */
  public toNumber (): number {
    return this.index;
  }

  /**
   * @description Returns a raw struct representation of the enum types
   */
  protected _toRawStruct (): string[] | Record<string, string | number> {
    if (this.#isBasic) {
      return this.#isIndexed
        ? this.defKeys.reduce((out: Record<string, number>, key, index): Record<string, number> => {
          out[key] = this.#indexes[index];

          return out;
        }, {})
        : this.defKeys;
    }

    const typeMap = Object
      .entries(this.#def)
      .reduce((out: Record<string, CodecClass>, [key, { Type }]) => {
        out[key] = Type;

        return out;
      }, {});

    return typesToMap(this.registry, typeMap);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return stringify({ _enum: this._toRawStruct() });
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return this.isNull
      ? this.type
      : stringify(this.toJSON());
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    return u8aConcat(
      new Uint8Array(isBare ? [] : [this.index]),
      this.#raw.toU8a(isBare)
    );
  }
}
