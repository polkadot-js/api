// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyJson, Codec, Inspect, IU8a, Registry } from '../types';

import { isFunction, objectProperties, stringify } from '@polkadot/util';

import { compareMap } from '../utils';

/** @internal */
function decodeJson (value?: Record<string, unknown> | null): [string, any][] {
  return Object.entries(value || {});
}

/**
 * @name Json
 * @description
 * Wraps the a JSON structure retrieve via RPC. It extends the standard JS Map with. While it
 * implements a Codec, it is limited in that it can only be used with input objects via RPC,
 * i.e. no hex decoding. Unlike a struct, this waps a JSON object with unknown keys
 * @noInheritDoc
 */
export class Json extends Map<string, any> implements Codec {
  public createdAtHash?: IU8a;

  readonly #registry: Registry;

  constructor (registry: Registry, value?: Record<string, unknown> | null) {
    const decoded = decodeJson(value);

    super(decoded);

    this.#registry = registry;

    objectProperties(this, decoded.map(([k]) => k), (k) => this.get(k));
  }

  /**
   * @description Always 0, never encodes as a Uint8Array
   */
  public get encodedLength (): number {
    return 0;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): IU8a {
    return this.#registry.hash(this.toU8a());
  }

  /**
   * @description Checks if the value is an empty value
   */
  public get isEmpty (): boolean {
    return [...this.keys()].length === 0;
  }

  /**
   * @description The registry associated with this object
   */
  public get registry (): Registry {
    return this.#registry;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    return compareMap(this, other);
  }

  /**
   * @description Returns a typed value from the internal map
   */
  public getT <T> (key: string): T {
    return this.get(key) as unknown as T;
  }

  /**
   * @description Unimplemented, will throw
   */
  public inspect (): Inspect {
    throw new Error('Unimplemented');
  }

  /**
   * @description Unimplemented, will throw
   */
  public toHex (): HexString {
    throw new Error('Unimplemented');
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (): Record<string, AnyJson> {
    return [...this.entries()].reduce<Record<string, AnyJson>>((json, [key, value]): Record<string, AnyJson> => {
      json[key] = isFunction((value as Codec).toHuman)
        ? (value as Codec).toHuman()
        : value as AnyJson;

      return json;
    }, {});
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): Record<string, AnyJson> {
    return [...this.entries()].reduce<Record<string, AnyJson>>((json, [key, value]): Record<string, AnyJson> => {
      json[key] = value as AnyJson;

      return json;
    }, {});
  }

  /**
   * @description Converts the value in a best-fit primitive form
   */
  public toPrimitive (): Record<string, AnyJson> {
    return [...this.entries()].reduce<Record<string, AnyJson>>((json, [key, value]): Record<string, AnyJson> => {
      json[key] = isFunction((value as Codec).toHuman)
        ? (value as Codec).toPrimitive()
        : value as AnyJson;

      return json;
    }, {});
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Json';
  }

  /**
   * @description Returns the string representation of the value
   */
  public override toString (): string {
    return stringify(this.toJSON());
  }

  /**
   * @description Unimplemented, will throw
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toU8a (isBare?: boolean): Uint8Array {
    throw new Error('Unimplemented');
  }
}
