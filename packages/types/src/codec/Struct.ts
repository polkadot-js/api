// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { CodecHash, Hash } from '../interfaces/runtime';
import type { AnyJson, BareOpts, Codec, Constructor, ConstructorDef, IStruct, Registry } from '../types';

import { assert, hexToU8a, isBoolean, isFunction, isHex, isObject, isU8a, isUndefined, stringCamelCase, stringify, u8aConcat, u8aToHex } from '@polkadot/util';

import { compareMap, decodeU8a, mapToTypeMap } from './utils';

type TypesDef<T = Codec> = Record<string, string | Constructor<T>>;

/** @internal */
function decodeStructFromObject (registry: Registry, Types: ConstructorDef, value: any, jsonMap: Map<string, string>): Iterable<[string, Codec]> {
  let jsonObj: Record<string, unknown> | undefined;
  const inputKeys = Object.keys(Types);
  const typeofArray = Array.isArray(value);
  const typeofMap = value instanceof Map;

  assert(typeofArray || typeofMap || isObject(value), () => `Struct: Cannot decode value ${stringify(value)} (typeof ${typeof value}), expected an input object, map or array`);
  assert(!typeofArray || value.length === inputKeys.length, () => `Struct: Unable to map ${stringify(value)} array to object with known keys ${inputKeys.join(', ')}`);

  return inputKeys.reduce<[string, Codec][]>((raw, key, index) => {
    const jsonKey = jsonMap.get(key) || key;
    const Type = Types[key];
    let assign: unknown;

    try {
      if (typeofArray) {
        assign = value[index] as unknown;
      } else if (typeofMap) {
        assign = jsonKey && value.get(jsonKey);
      } else {
        assign = jsonKey && value[jsonKey] as unknown;

        if (isUndefined(assign)) {
          if (isUndefined(jsonObj)) {
            jsonObj = Object.entries(value).reduce((all: Record<string, unknown>, [k, v]): Record<string, unknown> => {
              all[stringCamelCase(k)] = v;

              return all;
            }, {});
          }

          assign = jsonKey && jsonObj[jsonKey];
        }
      }

      raw.push([
        key,
        assign instanceof Type
          ? assign
          : new Type(registry, assign)
      ]);
    } catch (error) {
      let type = Type.name;

      try {
        type = new Type(registry).toRawType();
      } catch (error) {
        // ignore
      }

      throw new Error(`Struct: failed on ${jsonKey}: ${type}:: ${(error as Error).message}`);
    }

    return raw;
  }, []);
}

/**
 * Decode input to pass into constructor.
 *
 * @param Types - Types definition.
 * @param value - Value to decode, one of:
 * - null
 * - undefined
 * - hex
 * - Uint8Array
 * - object with `{ key1: value1, key2: value2 }`, assuming `key1` and `key2`
 * are also keys in `Types`
 * - array with `[value1, value2]` assuming the array has the same length as
 * `Object.keys(Types)`
 * @param jsonMap
 * @internal
 */
function decodeStruct (registry: Registry, Types: ConstructorDef, value: unknown, jsonMap: Map<string, string>): [Iterable<[string, Codec]>, number] {
  if (isHex(value)) {
    return decodeStruct(registry, Types, hexToU8a(value), jsonMap);
  } else if (isU8a(value)) {
    return decodeU8a<Codec, [string, Codec]>(registry, value, Types, 0, (k, v) => [k, v]);
  } else if (value instanceof Struct) {
    return [value as Iterable<[string, Codec]>, 0];
  }

  // We assume from here that value is a JS object (Array, Map, Object)
  return [decodeStructFromObject(registry, Types, value || {}, jsonMap), 0];
}

/**
 * @name Struct
 * @description
 * A Struct defines an Object with key-value pairs - where the values are Codec values. It removes
 * a lot of repetition from the actual coding, define a structure type, pass it the key/Codec
 * values in the constructor and it manages the decoding. It is important that the constructor
 * values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
 * it needs to decoded in the specific defined order.
 * @noInheritDoc
 */
export class Struct<
  // The actual Class structure, i.e. key -> Class
  S extends TypesDef = TypesDef,
  // input values, mapped by key can be anything (construction)
  V extends { [K in keyof S]: any } = { [K in keyof S]: any },
  // type names, mapped by key, name of Class in S
  E extends { [K in keyof S]: string } = { [K in keyof S]: string }> extends Map<keyof S, Codec> implements IStruct<keyof S> {
  public readonly registry: Registry;

  public createdAtHash?: Hash;

  readonly #initialU8aLength?: number;

  readonly #jsonMap: Map<keyof S, string>;

  readonly #Types: ConstructorDef;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  constructor (registry: Registry, Types: S, value?: V | Map<unknown, unknown> | unknown[] | HexString | null, jsonMap = new Map<string, string>()) {
    const [decoded, decodedLength] = decodeStruct(registry, mapToTypeMap(registry, Types), value, jsonMap);

    super(decoded);

    this.registry = registry;
    this.#initialU8aLength = decodedLength;
    this.#jsonMap = jsonMap;
    this.#Types = mapToTypeMap(registry, Types);
  }

  public static with<S extends TypesDef> (Types: S, jsonMap?: Map<string, string>): Constructor<Struct<S>> {
    return class extends Struct<S> {
      constructor (registry: Registry, value?: unknown) {
        super(registry, Types, value as HexString, jsonMap);

        Object.keys(Types).forEach((key): void => {
          isUndefined(this[key as keyof this]) &&
            Object.defineProperty(this, key, {
              enumerable: true,
              get: (): Codec | undefined => this.get(key as keyof S)
            });
        });
      }
    };
  }

  public static typesToMap (registry: Registry, Types: Record<string, Constructor>): Record<string, string> {
    return Object.entries(Types).reduce((result: Record<string, string>, [key, Type]): Record<string, string> => {
      result[key] = registry.getClassName(Type) || new Type(registry).toRawType();

      return result;
    }, {});
  }

  /**
   * @description The available keys for this struct
   */
  public get defKeys (): string[] {
    return Object.keys(this.#Types);
  }

  /**
   * @description Checks if the value is an empty value
   */
  public get isEmpty (): boolean {
    return this.toArray().every((e) => e.isEmpty);
  }

  /**
   * @description Returns the Type description to sthe structure
   */
  public get Type (): E {
    return (Object
      .entries(this.#Types))
      .reduce((result: E, [key, Type]): E => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        (result as any)[key] = new Type(this.registry).toRawType();

        return result;
      }, {} as E);
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return this.toArray().reduce((length, e) => length + e.encodedLength, 0);
  }

  /**
   * @description The length of the initial encoded value (Only available when constructed from a Uint8Array)
   */
  public get initialU8aLength (): number | undefined {
    return this.#initialU8aLength;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): CodecHash {
    return this.registry.hash(this.toU8a());
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    return compareMap(this, other);
  }

  /**
   * @description Returns a specific names entry in the structure
   * @param name The name of the entry to retrieve
   */
  public override get (name: keyof S): Codec | undefined {
    return super.get(name);
  }

  /**
   * @description Returns the values of a member at a specific index (Rather use get(name) for performance)
   */
  public getAtIndex (index: number): Codec {
    return this.toArray()[index];
  }

  /**
   * @description Converts the Object to an standard JavaScript Array
   */
  public toArray (): Codec[] {
    return [...this.values()];
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
  public toHuman (isExtended?: boolean): Record<string, AnyJson> {
    return [...this.keys()].reduce((json: Record<string, AnyJson>, key): Record<string, AnyJson> => {
      const value = this.get(key);

      json[key as string] = value && value.toHuman(isExtended);

      return json;
    }, {});
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): Record<string, AnyJson> {
    return [...this.keys()].reduce((json: Record<string, AnyJson>, key): Record<string, AnyJson> => {
      const jsonKey = this.#jsonMap.get(key) || key;
      const value = this.get(key);

      json[jsonKey as string] = value && value.toJSON();

      return json;
    }, {});
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return stringify(Struct.typesToMap(this.registry, this.#Types));
  }

  /**
   * @description Returns the string representation of the value
   */
  public override toString (): string {
    return stringify(this.toJSON());
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: BareOpts): Uint8Array {
    // we have keyof S here, cast to string to make it compatible with isBare
    const entries = [...this.entries()] as [string, Codec][];

    return u8aConcat(
      ...entries
        // eslint-disable-next-line @typescript-eslint/unbound-method
        .filter(([, value]) => isFunction(value?.toU8a))
        .map(([key, value]): Uint8Array =>
          value.toU8a(
            !isBare || isBoolean(isBare)
              ? isBare
              : isBare[key]
          )
        )
    );
  }
}
