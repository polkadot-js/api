// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyJson, Codec, CodecClass, Inspect, IU8a, Registry } from '../types';

import { warnGet } from '../utils';

/**
 * @name DoNotConstruct
 * @description
 * An unknown type that fails on construction with the type info
 */
export class DoNotConstruct implements Codec {
  public readonly registry: Registry;

  public $createdAtHash?: IU8a;
  public $isStorageFallback?: boolean;

  #neverError: Error;

  constructor (registry: Registry, typeName = 'DoNotConstruct') {
    this.registry = registry;
    this.#neverError = new Error(`DoNotConstruct: Cannot construct unknown type ${typeName}`);

    throw this.#neverError;
  }

  /** @deprecated Use $createdAtHash instead. This getter will be removed in a future version. */
  public get createdAtHash (): IU8a | undefined {
    return warnGet(this, 'createdAtHash');
  }

  /** @deprecated Use $initialU8aLength instead. This getter will be removed in a future version. */
  public get initialU8aLength (): number | undefined {
    return warnGet(this, 'initialU8aLength');
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

  eq (): boolean {
    throw this.#neverError;
  }

  public inspectU8a (): Inspect {
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

  toPrimitive (): AnyJson {
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
