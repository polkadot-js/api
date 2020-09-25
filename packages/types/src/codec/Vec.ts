// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Codec, Constructor, InterfaceTypes, Registry } from '../types';

import { u8aToU8a, assert } from '@polkadot/util';

import Compact from './Compact';
import { decodeU8a, typeToConstructor } from './utils';
import AbstractArray from './AbstractArray';

const MAX_LENGTH = 32768;

/**
 * @name Vec
 * @description
 * This manages codec arrays. Internally it keeps track of the length (as decoded) and allows
 * construction with the passed `Type` in the constructor. It is an extension to Array, providing
 * specific encoding/decoding on top of the base type.
 */
export default class Vec<T extends Codec> extends AbstractArray<T> {
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
          console.error(`Unable to decode Vec on index ${index}`, (error as Error).message);

          throw error;
        }
      });
    }

    const u8a = u8aToU8a(value);
    const [offset, length] = Compact.decodeU8a(u8a);

    assert(length.lten(MAX_LENGTH), `Vec length ${length.toString()} exceeds ${MAX_LENGTH}`);

    return decodeU8a(registry, u8a.subarray(offset), new Array(length.toNumber()).fill(Type)) as T[];
  }

  public static with<O extends Codec> (Type: Constructor<O> | keyof InterfaceTypes): Constructor<Vec<O>> {
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
    return this._Type.name;
  }

  /**
   * @description Finds the index of the value in the array
   */
  public indexOf (_other?: unknown): number {
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
