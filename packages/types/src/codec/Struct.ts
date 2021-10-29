// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecHash, Hash } from '../interfaces/runtime';
import type { AnyJson, BareOpts, Codec, Constructor, ConstructorDef, IStruct, Registry } from '../types';

import { assert, hexToU8a, isBoolean, isFunction, isHex, isObject, isU8a, isUndefined, stringCamelCase, stringify, u8aConcat, u8aToHex } from '@polkadot/util';

import { compareMap, decodeU8a, mapToTypeMap } from './utils';

type TypesDef<T = Codec> = Record<string, string | Constructor<T>>;

/** @internal */
function decodeStructFromObject (registry: Registry, Types: ConstructorDef, value: any, jsonMap: Map<any, string>): Iterable<[string, Codec]> {
  let jsonObj: Record<string, unknown> | undefined;
  const inputKeys = Object.keys(Types);

  assert(!Array.isArray(value) || value.length === inputKeys.length, () => `Struct: Unable to map ${stringify(value)} array to object with known keys ${inputKeys.join(', ')}`);

  return Object.entries(
    inputKeys.reduce<Record<string, Codec>>((raw, key, index) => {
      // The key in the JSON can be snake_case (or other cases), but in our
      // Types, result or any other maps, it's camelCase
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const jsonKey = (jsonMap.get(key as any) && !value[key])
        ? jsonMap.get(key as any)
        : key;
      const Type = Types[key];

      try {
        if (Array.isArray(value)) {
          // TS2322: Type 'Codec' is not assignable to type 'T[keyof S]'.
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
          (raw as any)[key] = value[index] instanceof Type
            ? value[index]
            : new Type(registry, value[index]);
        } else if (value instanceof Map) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const mapped = value.get(jsonKey);

          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          (raw as any)[key] = mapped instanceof Type
            ? mapped
            : new Type(registry, mapped);
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
          (raw as any)[key] = assign instanceof Type
            ? assign
            : new Type(registry, assign);
        } else {
          throw new Error(`Cannot decode value ${stringify(value)} (typeof ${typeof value}), expected an input object with known keys`);
        }
      } catch (error) {
        let type = Type.name;

        try {
          type = new Type(registry).toRawType();
        } catch (error) {
          // ignore
        }

        throw new Error(`Struct: failed on ${jsonKey as string}: ${type}:: ${(error as Error).message}`);
      }

      return raw;
    }, {})
  );
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
function decodeStruct (registry: Registry, Types: ConstructorDef, value: unknown, jsonMap: Map<any, string>): [Iterable<[string, Codec]>, number] {
  if (isHex(value)) {
    return decodeStruct(registry, Types, hexToU8a(value), jsonMap);
  } else if (isU8a(value)) {
    const keys = Object.keys(Types);
    const [values, decodedLength] = decodeU8a(registry, value, Object.values(Types), keys);

    // Transform array of values to {key: value} mapping
    return [
      Object.entries(
        keys.reduce<Record<string, Codec>>((raw, key, index) => {
          raw[key] = values[index];

          return raw;
        }, {})
      ),
      decodedLength
    ];
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
  constructor (registry: Registry, Types: S, value?: V | Map<unknown, unknown> | unknown[] | string | null, jsonMap: Map<keyof S, string> = new Map()) {
    const [decoded, decodedLength] = decodeStruct(registry, mapToTypeMap(registry, Types), value, jsonMap);

    super(decoded);

    this.registry = registry;
    this.#initialU8aLength = decodedLength;
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
   * @description The available keys for this struct
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
