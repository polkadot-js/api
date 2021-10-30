// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { Codec, Constructor, Registry } from '../types';

import { assert, compactFromU8a, logger, u8aToU8a } from '@polkadot/util';

import { AbstractArray } from './AbstractArray';
import { decodeU8a, typeToConstructor } from './utils';

const MAX_LENGTH = 64 * 1024;

const l = logger('Vec');

/**
 * @name Vec
 * @description
 * This manages codec arrays. Internally it keeps track of the length (as decoded) and allows
 * construction with the passed `Type` in the constructor. It is an extension to Array, providing
 * specific encoding/decoding on top of the base type.
 */
export class Vec<T extends Codec> extends AbstractArray<T> {
  #Type: Constructor<T>;

  constructor (registry: Registry, Type: Constructor<T> | string, value: Uint8Array | HexString | unknown[] = []) {
    const Clazz = typeToConstructor<T>(registry, Type);
    const [values, decodedLength] = Vec.decodeVec(registry, Clazz, value);

    super(registry, values, decodedLength);

    this.#Type = Clazz;
  }

  /** @internal */
  public static decodeVec<T extends Codec> (registry: Registry, Type: Constructor<T>, value: Uint8Array | HexString | unknown[], length = -1): [T[], number, number] {
    if (Array.isArray(value)) {
      return [
        value.map((entry: unknown, index: number): T => {
          try {
            return entry instanceof Type
              ? entry
              : new Type(registry, entry);
          } catch (error) {
            l.error(`Unable to decode on index ${index}`, (error as Error).message);

            throw error;
          }
        }),
        0, 0
      ];
    }

    const u8a = u8aToU8a(value);
    let offset = 0;

    if (length === -1) {
      const [_offset, _length] = compactFromU8a(u8a);

      assert(_length.lten(MAX_LENGTH), () => `Vec length ${_length.toString()} exceeds ${MAX_LENGTH}`);

      length = _length.toNumber();
      offset = _offset;
    }

    const [decoded, decodedLength] = decodeU8a(registry, u8a.subarray(offset), Type, length);

    return [decoded as T[], decodedLength + offset, decodedLength];
  }

  public static with<O extends Codec> (Type: Constructor<O> | string): Constructor<Vec<O>> {
    return class extends Vec<O> {
      constructor (registry: Registry, value?: any[]) {
        super(registry, Type, value);
      }
    };
  }

  /**
   * @description The type for the items
   */
  public get Type (): string {
    return this.#Type.name;
  }

  /**
   * @description Finds the index of the value in the array
   */
  public override indexOf (_other?: unknown): number {
    // convert type first, this removes overhead from the eq
    const other = _other instanceof this.#Type
      ? _other
      : new this.#Type(this.registry, _other);

    for (let i = 0; i < this.length; i++) {
      if (other.eq(this[i])) {
        return i;
      }
    }

    return -1;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `Vec<${this.registry.getClassName(this.#Type) || new this.#Type(this.registry).toRawType()}>`;
  }
}
