// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { Codec, CodecClass, Inspect, Registry } from '../types';

import { assert, isU8a, u8aConcat } from '@polkadot/util';

import { AbstractArray } from '../abstract/AbstractArray';
import { decodeU8aVec, typeToConstructor } from '../utils';
import { decodeVec } from './Vec';

/** @internal */
function decodeVecFixed<T extends Codec> (registry: Registry, value: HexString | unknown[], Type: CodecClass<T>, length: number): [T[], number, number] {
  const [values, decodedLength, decodedLengthNoOffset] = decodeVec(registry, Type, value, length);

  while (values.length < length) {
    values.push(new Type(registry));
  }

  assert(values.length === length, () => `Expected a length of exactly ${length} entries`);

  return [values, decodedLength, decodedLengthNoOffset];
}

/**
 * @name VecFixed
 * @description
 * This manages codec arrays of a fixed length
 */
export class VecFixed<T extends Codec> extends AbstractArray<T> {
  #Type: CodecClass<T>;

  constructor (registry: Registry, Type: CodecClass<T> | string, length: number, value: Uint8Array | HexString | unknown[] = [] as unknown[]) {
    const Clazz = typeToConstructor<T>(registry, Type);
    const [values,, decodedLengthNoOffset] = isU8a(value)
      ? decodeU8aVec(registry, value, 0, Clazz, length)
      : decodeVecFixed(registry, value, Clazz, length);

    super(registry, values, decodedLengthNoOffset);

    this.#Type = Clazz;
  }

  public static with<O extends Codec> (Type: CodecClass<O> | string, length: number): CodecClass<VecFixed<O>> {
    return class extends VecFixed<O> {
      constructor (registry: Registry, value?: any[]) {
        super(registry, Type, length, value);
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

    for (let i = 0; i < this.length; i++) {
      total += this[i].encodedLength;
    }

    return total;
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  override inspect (): Inspect {
    return {
      inner: this.inspectInner()
    };
  }

  public override toU8a (): Uint8Array {
    // we override, we don't add the length prefix for ourselves, and at the same time we
    // ignore isBare on entries, since they should be properly encoded at all times
    const encoded = this.toU8aInner();

    return encoded.length
      ? u8aConcat(...encoded)
      : new Uint8Array([]);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `[${this.Type};${this.length}]`;
  }
}
