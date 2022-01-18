// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { Codec, CodecClass, Registry } from '../types';

import { assert, compactFromU8a, logger, u8aToU8a } from '@polkadot/util';

import { AbstractArray } from '../abstract/AbstractArray';
import { decodeU8aVec, typeToConstructor } from '../utils';

const MAX_LENGTH = 64 * 1024;

const l = logger('Vec');

export function decodeVec<T extends Codec> (registry: Registry, Type: CodecClass<T>, value: Uint8Array | HexString | unknown[], length = -1): [T[], number, number] {
  if (Array.isArray(value)) {
    const result = new Array<T>(value.length);

    for (let i = 0; i < value.length; i++) {
      const entry = value[i];

      try {
        result[i] = entry instanceof Type
          ? entry
          : new Type(registry, entry);
      } catch (error) {
        l.error(`Unable to decode on index ${i}`, (error as Error).message);

        throw error;
      }
    }

    return [result, 0, 0];
  }

  const u8a = u8aToU8a(value);
  let offset = 0;

  if (length === -1) {
    const [_offset, _length] = compactFromU8a(u8a);

    assert(_length.lten(MAX_LENGTH), () => `Vec length ${_length.toString()} exceeds ${MAX_LENGTH}`);

    length = _length.toNumber();
    offset = _offset;
  }

  return decodeU8aVec(registry, u8a, offset, Type, length);
}

/**
 * @name Vec
 * @description
 * This manages codec arrays. Internally it keeps track of the length (as decoded) and allows
 * construction with the passed `Type` in the constructor. It is an extension to Array, providing
 * specific encoding/decoding on top of the base type.
 */
export class Vec<T extends Codec> extends AbstractArray<T> {
  #Type: CodecClass<T>;

  constructor (registry: Registry, Type: CodecClass<T> | string, value: Uint8Array | HexString | unknown[] = []) {
    const Clazz = typeToConstructor<T>(registry, Type);
    const [values, decodedLength] = decodeVec(registry, Clazz, value);

    super(registry, values, decodedLength);

    this.#Type = Clazz;
  }

  public static with<O extends Codec> (Type: CodecClass<O> | string): CodecClass<Vec<O>> {
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
