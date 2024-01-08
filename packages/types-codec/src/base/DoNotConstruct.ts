// Copyright 2017-2024 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyJson, Codec, CodecClass, Inspect, IU8a, Registry } from '../types/index.js';

/**
 * @name DoNotConstruct
 * @description
 * An unknown type that fails on construction with the type info
 */
export class DoNotConstruct implements Codec {
  readonly registry: Registry;

  public createdAtHash?: IU8a;
  public isStorageFallback?: boolean;

  #neverError: Error;

  constructor (registry: Registry, typeName = 'DoNotConstruct') {
    this.registry = registry;
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
   * @description Unimplemented
   */
  eq (): boolean {
    throw this.#neverError;
  }

  /**
   * @description Unimplemented
   */
  public inspect (): Inspect {
    throw this.#neverError;
  }

  /**
   * @description Unimplemented
   */
  toHex (): HexString {
    throw this.#neverError;
  }

  /**
   * @description Unimplemented
   */
  toHuman (): AnyJson {
    throw this.#neverError;
  }

  /**
   * @description Unimplemented
   */
  toJSON (): AnyJson {
    throw this.#neverError;
  }

  /**
   * @description Unimplemented
   */
  toPrimitive (): AnyJson {
    throw this.#neverError;
  }

  /**
   * @description Unimplemented
   */
  toRawType (): string {
    throw this.#neverError;
  }

  /**
   * @description Unimplemented
   */
  toString (): string {
    throw this.#neverError;
  }

  /**
   * @description Unimplemented
   */
  toU8a (): Uint8Array {
    throw this.#neverError;
  }
}
