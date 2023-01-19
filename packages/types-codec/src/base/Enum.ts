// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyJson, Codec, CodecClass, IEnum, Inspect, IU8a, Registry } from '../types';

import { isHex, isNumber, isObject, isString, isU8a, objectProperties, stringCamelCase, stringify, stringPascalCase, u8aConcatStrict, u8aToHex, u8aToU8a } from '@polkadot/util';

import { mapToTypeMap, typesToMap, warnGet } from '../utils';
import { Null } from './Null';

// export interface, this is used in Enum.with, so required as public by TS
export interface EnumCodecClass<T = Codec> {
  new(registry: Registry, value?: any, index?: number): T;
}

interface Definition {
  def: TypesDef;
  isBasic: boolean;
  isIndexed: boolean;
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

interface Options {
  definition?: Definition;
  setDefinition?: (d: Definition) => Definition;
}

function noopSetDefinition (d: Definition): Definition {
  return d;
}

function isRustEnum (def: Record<string, string | CodecClass> | Record<string, number>): def is Record<string, string | CodecClass> {
  const defValues = Object.values(def);

  if (defValues.some((v) => isNumber(v))) {
    if (!defValues.every((v) => isNumber(v) && v >= 0 && v <= 255)) {
      throw new Error('Invalid number-indexed enum definition');
    }

    return false;
  }

  return true;
}

function extractDef (registry: Registry, _def: Record<string, string | CodecClass> | Record<string, number> | string[]): Definition {
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
    const [Types, keys] = mapToTypeMap(registry, _def);

    for (let i = 0; i < keys.length; i++) {
      def[keys[i]] = { Type: Types[i], index: i };
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

function getEntryType (def: TypesDef, checkIdx: number): CodecClass {
  const values = Object.values(def);

  for (let i = 0; i < values.length; i++) {
    const { Type, index } = values[i];

    if (index === checkIdx) {
      return Type;
    }
  }

  throw new Error(`Unable to create Enum via index ${checkIdx}, in ${Object.keys(def).join(', ')}`);
}

function createFromU8a (registry: Registry, def: TypesDef, index: number, value: Uint8Array): Decoded {
  const Type = getEntryType(def, index);

  return {
    index,
    value: new Type(registry, value)
  };
}

function createFromValue (registry: Registry, def: TypesDef, index = 0, value?: unknown): Decoded {
  const Type = getEntryType(def, index);

  return {
    index,
    value: value instanceof Type
      ? value
      : new Type(registry, value)
  };
}

function decodeFromJSON (registry: Registry, def: TypesDef, key: string, value?: unknown): Decoded {
  // JSON comes in the form of { "<type (camelCase)>": "<value for type>" }, here we
  // additionally force to lower to ensure forward compat
  const keys = Object.keys(def).map((k) => k.toLowerCase());
  const keyLower = key.toLowerCase();
  const index = keys.indexOf(keyLower);

  if (index === -1) {
    throw new Error(`Cannot map Enum JSON, unable to find '${key}' in ${keys.join(', ')}`);
  }

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
      return createFromU8a(registry, def, u8a[0], u8a.subarray(1));
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
  readonly registry: Registry;

  public $createdAtHash?: IU8a;
  public $initialU8aLength?: number;
  readonly $isBasic: boolean;
  public $isStorageFallback?: boolean;

  readonly #def: TypesDef;
  readonly #entryIndex: number;
  readonly #indexes: number[];
  readonly #isIndexed: boolean;
  readonly #raw: Codec;

  constructor (registry: Registry, Types: Record<string, string | CodecClass> | Record<string, number> | string[], value?: unknown, index?: number, { definition, setDefinition = noopSetDefinition }: Options = {}) {
    const { def, isBasic, isIndexed } = definition || setDefinition(extractDef(registry, Types));

    // shortcut isU8a as used in SCALE decoding
    const decoded = isU8a(value) && value.length && !isNumber(index)
      ? createFromU8a(registry, def, value[0], value.subarray(1))
      : decodeEnum(registry, def, value, index);

    this.$isBasic = isBasic;

    this.registry = registry;
    this.#def = def;
    this.#isIndexed = isIndexed;
    this.#indexes = Object.values(def).map(({ index }) => index);
    this.#entryIndex = this.#indexes.indexOf(decoded.index);
    this.#raw = decoded.value;

    if (this.#raw.$initialU8aLength) {
      this.$initialU8aLength = 1 + this.#raw.$initialU8aLength;
    }
  }

  /** @deprecated Use $createdAtHash instead. This getter will be removed in a future version. */
  public get createdAtHash (): IU8a | undefined {
    return warnGet(this, 'createdAtHash');
  }

  /** @deprecated Use $initialU8aLength instead. This getter will be removed in a future version. */
  public get initialU8aLength (): number | undefined {
    return warnGet(this, 'initialU8aLength');
  }

  /** @deprecated Use $isBasic instead. This getter will be removed in a future version */
  public get isBasic (): boolean {
    return warnGet(this, 'isBasic');
  }

  /** @deprecated Use $isEmpty instead. This getter will be removed in a future version */
  public get isEmpty (): boolean {
    return warnGet(this, 'isEmpty');
  }

  /** @deprecated Use $isNone instead. This getter will be removed in a future version */
  public get isNone (): boolean {
    return warnGet(this, 'isNone');
  }

  public static with (Types: Record<string, string | CodecClass> | Record<string, number> | string[]): EnumCodecClass<Enum> {
    let definition: Definition | undefined;

    // eslint-disable-next-line no-return-assign
    const setDefinition = (d: Definition) =>
      definition = d;

    return class extends Enum {
      static {
        const keys = Array.isArray(Types)
          ? Types
          : Object.keys(Types);
        const asKeys = new Array<string>(keys.length);
        const isKeys = new Array<string>(keys.length);

        for (let i = 0; i < keys.length; i++) {
          const name = stringPascalCase(keys[i]);

          asKeys[i] = `as${name}`;
          isKeys[i] = `is${name}`;
        }

        objectProperties(this.prototype, isKeys, (_: string, i: number, self: Enum) =>
          self.type === keys[i]
        );

        objectProperties(this.prototype, asKeys, (k: string, i: number, self: Enum): Codec => {
          if (self.type !== keys[i]) {
            throw new Error(`Cannot convert '${self.type}' via ${k}`);
          }

          return self.value;
        });
      }

      constructor (registry: Registry, value?: unknown, index?: number) {
        super(registry, Types, value, index, { definition, setDefinition });
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
   * @description Checks if the value is an empty value
   */
  public get $isEmpty (): boolean {
    return this.#raw.$isEmpty;
  }

  /**
   * @description Checks if the Enum points to a [[Null]] type
   */
  public get $isNone (): boolean {
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
    } else if (this.$isBasic && isString(other)) {
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
  public inspectU8a (): Inspect {
    if (this.$isBasic) {
      return { outer: [new Uint8Array([this.index])] };
    }

    const { inner, outer = [] } = this.#raw.inspectU8a();

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
    return this.$isBasic || this.$isNone
      ? this.type
      : { [this.type]: this.#raw.toHuman(isExtended) };
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJson {
    return this.$isBasic
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
   * @description Converts the value in a best-fit primitive form
   */
  public toPrimitive (): AnyJson {
    return this.$isBasic
      ? this.type
      : { [stringCamelCase(this.type)]: this.#raw.toPrimitive() };
  }

  /**
   * @description Returns a raw struct representation of the enum types
   */
  protected _toRawStruct (): string[] | Record<string, string | number> {
    if (this.$isBasic) {
      return this.#isIndexed
        ? this.defKeys.reduce((out: Record<string, number>, key, index): Record<string, number> => {
          out[key] = this.#indexes[index];

          return out;
        }, {})
        : this.defKeys;
    }

    const entries = Object.entries(this.#def);

    return typesToMap(this.registry, entries.reduce<[CodecClass[], string[]]>((out, [key, { Type }], i) => {
      out[0][i] = Type;
      out[1][i] = key;

      return out;
    }, [new Array<CodecClass>(entries.length), new Array<string>(entries.length)]));
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
    return this.$isNone
      ? this.type
      : stringify(this.toJSON());
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    return isBare
      ? this.#raw.toU8a(isBare)
      : u8aConcatStrict([
        new Uint8Array([this.index]),
        this.#raw.toU8a(isBare)
      ]);
  }
}
