// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyJson, Codec, CodecClass, CodecRegistry, IU8a } from '../types';

/**
 * @name DoNotConstruct
 * @description
 * An unknown type that fails on construction with the type info
 */
export class DoNotConstruct implements Codec {
  public readonly registry: CodecRegistry;

  public createdAtHash?: IU8a;

  #neverError: Error;

  constructor (registry: CodecRegistry, typeName = 'DoNotConstruct') {
    this.registry = registry;
    this.#neverError = new Error(`DoNotConstruct: Cannot construct unknown type ${typeName}`);

    throw this.#neverError;
  }

  public static with (typeName?: string): CodecClass {
    return class extends DoNotConstruct {
      constructor (registry: CodecRegistry) {
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

  eq (): boolean {
    throw this.#neverError;
  }

  toHex (): HexString {
    throw this.#neverError;
  }

  toHuman (): AnyJson {
    throw this.#neverError;
  }

  toJSON (): AnyJson {
    throw this.#neverError;
  }

  toRawType (): string {
    throw this.#neverError;
  }

  toString (): string {
    throw this.#neverError;
  }

  toU8a (): Uint8Array {
    throw this.#neverError;
  }
}
