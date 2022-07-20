// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { Codec, Inspect, IU8a, Registry } from '../types';

import { isNull } from '@polkadot/util';

/**
 * @name Null
 * @description
 * Implements a type that does not contain anything (apart from `null`)
 */
export class Null implements Codec {
  readonly #registry: Registry;

  public createdAtHash?: IU8a;

  constructor (registry: Registry) {
    this.#registry = registry;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return 0;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): IU8a {
    throw new Error('.hash is not implemented on Null');
  }

  /**
   * @description Checks if the value is an empty value
   */
  public get isEmpty (): boolean {
    return true;
  }

  /**
   * @description The length of the initial encoded value (Only available when constructed from a Uint8Array)
   */
  public get initialU8aLength (): number | undefined {
    return 0;
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
    return other instanceof Null || isNull(other);
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public inspect (): Inspect {
    return {};
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): HexString {
    return '0x';
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (): null {
    return this.toJSON();
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): null {
    return null;
  }

  /**
   * @description Converts the value in a best-fit primitive form
   */
  public toPrimitive (): null {
    return null;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Null';
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return '';
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array();
  }
}
