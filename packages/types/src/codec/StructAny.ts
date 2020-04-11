// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { H256 } from '../interfaces/runtime';
import { AnyJson, Codec, Registry } from '../types';

import { isUndefined } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import Raw from './Raw';

import { compareMap } from './utils';

/** @internal */
function decodeJson (value?: { [index: string]: any } | null): [string, any][] {
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
export default class StructAny extends Map<string, any> implements Codec {
  public readonly registry: Registry;

  constructor (registry: Registry, value?: { [index: string]: any } | null) {
    const decoded = decodeJson(value);

    super(decoded);

    this.registry = registry;

    // like we are doing with structs, add the keys as getters
    decoded.forEach(([key]): void => {
      // do not clobber existing properties on the object
      if (!isUndefined((this as any)[key])) {
        return;
      }

      Object.defineProperty(this, key, {
        enumerable: true,
        get: (): Codec | undefined => this.get(key)
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
    return new Raw(this.registry, blake2AsU8a(this.toU8a(), 256));
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
  public eq (other?: any): boolean {
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
  public toHuman (): AnyJson {
    return this.toJSON();
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJson {
    return [...this.entries()].reduce((json: { [index: string]: AnyJson }, [key, value]): { [index: string]: AnyJson } => {
      json[key] = value;

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
