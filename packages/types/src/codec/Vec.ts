// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Constructor, InterfaceTypes, Registry, WrappedConstructor } from '../types';

import { assert, compactFromU8a, logger, u8aToU8a } from '@polkadot/util';

import { AbstractArray } from './AbstractArray';
import { decodeU8a, isWrappedClass, typeToConstructor } from './utils';

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
  private _Type: Constructor<T>;

  constructor (registry: Registry, Type: Constructor<T> | keyof InterfaceTypes, value: Vec<Codec> | Uint8Array | string | unknown[] = []) {
    const Clazz = typeToConstructor<T>(registry, Type);

    super(registry, ...Vec.decodeVec(registry, Clazz, value));

    this._Type = Clazz;
  }

  /** @internal */
  public static decodeVec<T extends Codec> (registry: Registry, Type: Constructor<T>, value: Vec<Codec> | Uint8Array | string | unknown[]): T[] {
    if (Array.isArray(value)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return (value as unknown[]).map((entry: unknown, index: number): T => {
        try {
          return entry instanceof Type
            ? entry
            : new Type(registry, entry);
        } catch (error) {
          l.error(`Unable to decode on index ${index}`, (error as Error).message);

          throw error;
        }
      });
    }

    const u8a = u8aToU8a(value);
    const [offset, length] = compactFromU8a(u8a);

    assert(length.lten(MAX_LENGTH), () => `Vec length ${length.toString()} exceeds ${MAX_LENGTH}`);

    const types = new Array(length.toNumber()).fill(Type);
    const values: Codec[] = [];

    try {
      return decodeU8a(registry, u8a.subarray(offset), values, types) as T[];
    } catch (error) {
      if (values.length) {
        // values.map((v) => v.toJSON())
        throw new Error(`Failed on index ${values.length}. Previous: ${JSON.stringify(values[values.length - 1].toJSON())}: ${(error as Error).message}`);
      }

      throw error;
    }
  }

  public static with<O extends Codec> (Type: WrappedConstructor<O> | Constructor<O> | keyof InterfaceTypes): Constructor<Vec<O>> {
    return class extends Vec<O> {
      constructor (registry: Registry, value?: any[]) {
        super(registry, isWrappedClass(Type) ? Type.Clazz : Type, value);
      }
    };
  }

  /**
   * @description The type for the items
   */
  public get Type (): string {
    return this._Type.name;
  }

  /**
   * @description Finds the index of the value in the array
   */
  public override indexOf (_other?: unknown): number {
    // convert type first, this removes overhead from the eq
    const other = _other instanceof this._Type
      ? _other
      : new this._Type(this.registry, _other);

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
    return `Vec<${this.registry.getClassName(this._Type) || new this._Type(this.registry).toRawType()}>`;
  }
}
