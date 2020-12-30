// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { H256 } from '../interfaces/runtime';
import type { AnyJson, BareOpts, Codec, Constructor, ConstructorDef, InterfaceTypes, Registry } from '../types';

import { hexToU8a, isBoolean, isFunction, isHex, isObject, isU8a, isUndefined, stringCamelCase, u8aConcat, u8aToHex } from '@polkadot/util';

import { compareMap, decodeU8a, mapToTypeMap } from './utils';

type TypesDef<T = Codec> = Record<string, keyof InterfaceTypes | Constructor<T>>;

/** @internal */
function decodeStructFromObject <T> (registry: Registry, Types: ConstructorDef, value: any, jsonMap: Map<any, string>): T {
  let jsonObj: Record<string, any> | undefined;

  return Object.keys(Types).reduce((raw, key, index): T => {
    // The key in the JSON can be snake_case (or other cases), but in our
    // Types, result or any other maps, it's camelCase
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const jsonKey = (jsonMap.get(key as any) && !value[key])
      ? jsonMap.get(key as any)
      : key;

    try {
      if (Array.isArray(value)) {
        // TS2322: Type 'Codec' is not assignable to type 'T[keyof S]'.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        (raw as any)[key] = value[index] instanceof Types[key]
          ? value[index]
          : new Types[key](registry, value[index]);
      } else if (value instanceof Map) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const mapped = value.get(jsonKey);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        (raw as any)[key] = mapped instanceof Types[key]
          ? mapped
          : new Types[key](registry, mapped);
      } else if (isObject(value)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        let assign = value[jsonKey as string];

        if (isUndefined(assign)) {
          if (isUndefined(jsonObj)) {
            jsonObj = Object.entries(value).reduce((all: Record<string, any>, [key, value]): Record<string, any> => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              all[stringCamelCase(key)] = value;

              return all;
            }, {});
          }

          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          assign = jsonObj[jsonKey as string];
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        (raw as any)[key] = assign instanceof Types[key]
          ? assign
          : new Types[key](registry, assign);
      } else {
        throw new Error(`Cannot decode value ${JSON.stringify(value)}`);
      }
    } catch (error) {
      let type = Types[key].name;

      try {
        type = new Types[key](registry).toRawType();
      } catch (error) {
        // ignore
      }

      throw new Error(`Struct: failed on ${jsonKey as string}: ${type}:: ${(error as Error).message}`);
    }

    return raw;
  }, {} as T);
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
function decodeStruct <T> (registry: Registry, Types: ConstructorDef, value: unknown, jsonMap: Map<any, string>): T {
  if (isHex(value)) {
    return decodeStruct(registry, Types, hexToU8a(value as string), jsonMap);
  } else if (isU8a(value)) {
    const values = decodeU8a(registry, value, Object.values(Types));

    // Transform array of values to {key: value} mapping
    return Object.keys(Types).reduce((raw, key, index): T => {
      // TS2322: Type 'Codec' is not assignable to type 'T[keyof S]'.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (raw as any)[key] = values[index];

      return raw;
    }, {} as T);
  } else if (!value) {
    return {} as T;
  }

  // We assume from here that value is a JS object (Array, Map, Object)
  return decodeStructFromObject(registry, Types, value, jsonMap);
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
  E extends { [K in keyof S]: string } = { [K in keyof S]: string }> extends Map<keyof S, Codec> implements Codec {
  public readonly registry: Registry;

  readonly #jsonMap: Map<keyof S, string>;

  readonly #Types: ConstructorDef;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  constructor (registry: Registry, Types: S, value: V | Map<unknown, unknown> | unknown[] | string = {} as V, jsonMap: Map<keyof S, string> = new Map()) {
    super(Object.entries(
      decodeStruct(registry, mapToTypeMap(registry, Types), value, jsonMap)
    ) as [keyof S, Codec][]);

    this.registry = registry;
    this.#jsonMap = jsonMap;
    this.#Types = mapToTypeMap(registry, Types);
  }

  public static with<S extends TypesDef> (Types: S, jsonMap?: Map<keyof S, string>): Constructor<Struct<S>> {
    return class extends Struct<S> {
      constructor (registry: Registry, value?: unknown) {
        super(registry, Types, value as string, jsonMap);

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
   * @description The available keys for this enum
   */
  public get defKeys (): string[] {
    return Object.keys(this.#Types);
  }

  /**
   * @description Checks if the value is an empty value
   */
  public get isEmpty (): boolean {
    const items = this.toArray();

    for (let i = 0; i < items.length; i++) {
      if (!items[i].isEmpty) {
        return false;
      }
    }

    return true;
  }

  /**
   * @description Returns the Type description to sthe structure
   */
  public get Type (): E {
    return (Object
      .entries(this.#Types) as [keyof S, Constructor][])
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
    return this.toArray().reduce((length, entry): number => {
      length += entry.encodedLength;

      return length;
    }, 0);
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): H256 {
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
  public get (name: keyof S): Codec | undefined {
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
  public toHex (): string {
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
    return JSON.stringify(
      Struct.typesToMap(this.registry, this.#Types)
    );
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return JSON.stringify(this.toJSON());
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
