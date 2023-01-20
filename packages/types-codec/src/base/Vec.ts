// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { Codec, CodecClass, Registry } from '../types';

import { compactFromU8aLim, isHex, isU8a, logger, u8aToU8a } from '@polkadot/util';

import { AbstractArray } from '../abstract/Array';
import { decodeU8aVec, typeToConstructor } from '../utils';

const MAX_LENGTH = 64 * 1024;

const l = logger('Vec');

interface Options<T> {
  definition?: CodecClass<T>;
  setDefinition?: (d: CodecClass<T>) => CodecClass<T>;
}

function noopSetDefinition <T extends Codec> (d: CodecClass<T>): CodecClass<T> {
  return d;
}

function decodeVecLength (value: Uint8Array | HexString | unknown[]): [Uint8Array | unknown[] | null, number, number] {
  if (Array.isArray(value)) {
    return [value, value.length, 0];
  } else if (isU8a(value) || isHex(value)) {
    const u8a = u8aToU8a(value);
    const [startAt, length] = compactFromU8aLim(u8a);

    if (length > MAX_LENGTH) {
      throw new Error(`Vec length ${length.toString()} exceeds ${MAX_LENGTH}`);
    }

    return [u8a, length, startAt];
  } else if (!value) {
    return [null, 0, 0];
  }

  throw new Error(`Expected array/hex input to Vec<*> decoding, found ${typeof value}: ${value as unknown as string}`);
}

export function decodeVec<T extends Codec> (registry: Registry, result: T[], value: Uint8Array | HexString | unknown[] | null, startAt: number, Type: CodecClass<T>): [number, number] {
  if (Array.isArray(value)) {
    const count = result.length;

    for (let i = 0; i < count; i++) {
      // 26/08/2022 this is actually a false positive - after recent eslint upgdates
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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

    return [0, 0];
  } else if (!value) {
    return [0, 0];
  }

  // we don't need more checks, we already limited it via the length decoding
  return decodeU8aVec(registry, result, u8aToU8a(value), startAt, Type);
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

  constructor (registry: Registry, Type: CodecClass<T> | string, value: Uint8Array | HexString | unknown[] = [], { definition, setDefinition = noopSetDefinition }: Options<T> = {}) {
    const [decodeFrom, length, startAt] = decodeVecLength(value);

    super(registry, length);

    this.#Type = definition || setDefinition(typeToConstructor<T>(registry, Type));

    try {
      this.initialU8aLength = (
        isU8a(decodeFrom)
          ? decodeU8aVec(registry, this, decodeFrom, startAt, this.#Type)
          : decodeVec(registry, this, decodeFrom, startAt, this.#Type)
      )[0];
    } catch (e) {
      console.error(decodeFrom, length, startAt);

      throw e;
    }
  }

  public static with<O extends Codec> (Type: CodecClass<O> | string): CodecClass<Vec<O>> {
    let definition: CodecClass<O> | undefined;

    // eslint-disable-next-line no-return-assign
    const setDefinition = <T> (d: CodecClass<T>) =>
      (definition = d as unknown as CodecClass<O>) as unknown as CodecClass<T>;

    return class extends Vec<O> {
      constructor (registry: Registry, value?: any[]) {
        super(registry, Type, value, { definition, setDefinition });
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
