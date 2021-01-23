// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { H256 } from '../interfaces/runtime';
import type { AnyJson, Codec, Registry } from '../types';

import { isFunction, isUndefined } from '@polkadot/util';

import { compareMap } from './utils';

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
  public readonly registry: Registry;

  constructor (registry: Registry, value?: Record<string, unknown> | null) {
    const decoded = decodeJson(value);

    super(decoded);

    this.registry = registry;

    decoded.forEach(([key]): void => {
      isUndefined(this[key as keyof this]) &&
        Object.defineProperty(this, key, {
          enumerable: true,
          get: (): Codec | undefined => this.get(key) as Codec
        });
    });
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
  public get hash (): H256 {
    return this.registry.hash(this.toU8a());
  }

  /**
   * @description Checks if the value is an empty value
   */
  public get isEmpty (): boolean {
    return [...this.keys()].length === 0;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    return compareMap(this, other);
  }

  /**
   * @description Unimplemented, will throw
   */
  public toHex (): string {
    throw new Error('Unimplemented');
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (): Record<string, AnyJson> {
    return [...this.entries()].reduce((json: Record<string, AnyJson>, [key, value]): Record<string, AnyJson> => {
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
    return [...this.entries()].reduce((json: Record<string, AnyJson>, [key, value]): Record<string, AnyJson> => {
      json[key] = value as AnyJson;

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
  public toString (): string {
    return JSON.stringify(this.toJSON());
  }

  /**
   * @description Unimplemented, will throw
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toU8a (isBare?: boolean): Uint8Array {
    throw new Error('Unimplemented');
  }
}
