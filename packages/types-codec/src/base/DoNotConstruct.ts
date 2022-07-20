// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyJson, Codec, CodecClass, Inspect, IU8a, Registry } from '../types';

/**
 * @name DoNotConstruct
 * @description
 * An unknown type that fails on construction with the type info
 */
export class DoNotConstruct implements Codec {
  #neverError: Error;

  constructor (_: Registry, typeName = 'DoNotConstruct') {
    this.#neverError = new Error(`DoNotConstruct: Cannot construct unknown type ${typeName}`);

    throw this.#neverError;
  }

  public static with (typeName?: string): CodecClass {
    return class extends DoNotConstruct {
      constructor (registry: Registry) {
        super(registry, typeName);
      }
    };
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    throw this.#neverError;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): IU8a {
    throw this.#neverError;
  }

  /**
   * @description Checks if the value is an empty value (always true)
   */
  public get isEmpty (): boolean {
    throw this.#neverError;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get registry (): Registry {
    throw this.#neverError;
  }

  public eq (): boolean {
    throw this.#neverError;
  }

  public inspect (): Inspect {
    throw this.#neverError;
  }

  public toHex (): HexString {
    throw this.#neverError;
  }

  public toHuman (): AnyJson {
    throw this.#neverError;
  }

  public toJSON (): AnyJson {
    throw this.#neverError;
  }

  public toPrimitive (): AnyJson {
    throw this.#neverError;
  }

  public toRawType (): string {
    throw this.#neverError;
  }

  public toString (): string {
    throw this.#neverError;
  }

  public toU8a (): Uint8Array {
    throw this.#neverError;
  }
}
