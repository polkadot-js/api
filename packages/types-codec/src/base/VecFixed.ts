// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { Codec, CodecClass, DefinitionSetter, Inspect, Registry } from '../types/index.js';

import { identity, isU8a, u8aConcatStrict } from '@polkadot/util';

import { AbstractArray } from '../abstract/Array.js';
import { decodeU8aVec, typeToConstructor } from '../utils/index.js';
import { decodeVec } from './Vec.js';

/**
 * @name VecFixed
 * @description
 * This manages codec arrays of a fixed length
 */
export class VecFixed<T extends Codec> extends AbstractArray<T> {
  #Type: CodecClass<T>;

  constructor (registry: Registry, Type: CodecClass<T> | string, length: number, value: Uint8Array | HexString | unknown[] = [] as unknown[], { definition, setDefinition = identity }: DefinitionSetter<CodecClass<T>> = {}) {
    super(registry, length);

    this.#Type = definition || setDefinition(typeToConstructor<T>(registry, Type));

    this.initialU8aLength = (
      isU8a(value)
        ? decodeU8aVec(registry, this, value, 0, this.#Type)
        : decodeVec(registry, this, value, 0, this.#Type)
    )[1];
  }

  public static with<O extends Codec> (Type: CodecClass<O> | string, length: number): CodecClass<VecFixed<O>> {
    let definition: CodecClass<O> | undefined;

    // eslint-disable-next-line no-return-assign
    const setDefinition = <T> (d: CodecClass<T>) =>
      (definition = d as unknown as CodecClass<O>) as unknown as CodecClass<T>;

    return class extends VecFixed<O> {
      constructor (registry: Registry, value?: any[]) {
        super(registry, Type, length, value, { definition, setDefinition });
      }
    };
  }

  /**
   * @description The type for the items
   */
  public get Type (): string {
    return new this.#Type(this.registry).toRawType();
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override get encodedLength (): number {
    let total = 0;

    for (let i = 0, count = this.length; i < count; i++) {
      total += this[i].encodedLength;
    }

    return total;
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public override inspect (): Inspect {
    return {
      inner: this.inspectInner()
    };
  }

  public override toU8a (): Uint8Array {
    // we override, we don't add the length prefix for ourselves, and at the same time we
    // ignore isBare on entries, since they should be properly encoded at all times
    const encoded = this.toU8aInner();

    return encoded.length
      ? u8aConcatStrict(encoded)
      : new Uint8Array([]);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `[${this.Type};${this.length}]`;
  }
}
