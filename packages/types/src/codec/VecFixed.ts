// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { Codec, Constructor, Registry } from '../types';

import { assert, u8aConcat } from '@polkadot/util';

import { AbstractArray } from './AbstractArray';
import { typeToConstructor } from './utils';
import { Vec } from './Vec';

/** @internal */
function decodeVecFixed<T extends Codec> (registry: Registry, Type: Constructor<T>, length: number, value: Uint8Array | HexString | unknown[]): [T[], number] {
  const [values,, decodedLengthNoOffset] = Vec.decodeVec(registry, Type, value, length);

  while (values.length < length) {
    values.push(new Type(registry));
  }

  assert(values.length === length, () => `Expected a length of exactly ${length} entries`);

  return [values, decodedLengthNoOffset];
}

/**
 * @name VecFixed
 * @description
 * This manages codec arrays of a fixed length
 */
export class VecFixed<T extends Codec> extends AbstractArray<T> {
  #Type: Constructor<T>;

  constructor (registry: Registry, Type: Constructor<T> | string, length: number, value: Uint8Array | HexString | unknown[] = [] as unknown[]) {
    const Clazz = typeToConstructor<T>(registry, Type);
    const [values, decodedLength] = decodeVecFixed(registry, Clazz, length, value);

    super(registry, values, decodedLength);

    this.#Type = Clazz;
  }

  public static with<O extends Codec> (Type: Constructor<O> | string, length: number): Constructor<VecFixed<O>> {
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
    return this.reduce((total, e) => total + e.encodedLength, 0);
  }

  public override toU8a (): Uint8Array {
    // we override, we don't add the length prefix for ourselves, and at the same time we
    // ignore isBare on entries, since they should be properly encoded at all times
    const encoded = new Array<Uint8Array>(this.length);

    for (let i = 0; i < this.length; i++) {
      encoded[i] = this[i].toU8a();
    }

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
