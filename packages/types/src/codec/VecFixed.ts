// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, InterfaceTypes, Registry } from '../types';

import { assert, isU8a, u8aConcat, compactToU8a } from '@polkadot/util';
import AbstractArray from './AbstractArray';
import { typeToConstructor } from './utils';
import Vec from './Vec';

/**
 * @name VecFixed
 * @description
 * This manages codec arrays of a fixed length
 */
export default class VecFixed<T extends Codec> extends AbstractArray<T> {
  private _Type: Constructor<T>;

  constructor (registry: Registry, Type: Constructor<T> | InterfaceTypes, length: number, value: VecFixed<any> | Uint8Array | string | any[] = [] as any[]) {
    const Clazz = typeToConstructor<T>(registry, Type);

    super(registry, ...VecFixed.decodeVecFixed(registry, Clazz, length, value));

    this._Type = Clazz;
  }

  public static decodeVecFixed<T extends Codec> (registry: Registry, Type: Constructor<T>, allocLength: number, value: VecFixed<any> | Uint8Array | string | any[]): T[] {
    const values = Vec.decodeVec(
      registry,
      Type,
      isU8a(value)
        ? u8aConcat(compactToU8a(allocLength), value)
        : value
    );

    while (values.length < allocLength) {
      values.push(new Type(registry));
    }

    assert(values.length === allocLength, `Expected a length of exactly ${allocLength} entries`);

    return values;
  }

  public static with<O extends Codec> (Type: Constructor<O> | InterfaceTypes, length: number): Constructor<VecFixed<O>> {
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
    return new this._Type(this.registry).toRawType();
  }

  public toU8a (): Uint8Array {
    // we override, we don't add the length prefix for outselves, and at the same time we
    // ignore isBare on entries, since they should be properly encoded at all times
    const encoded = this.map((entry): Uint8Array => entry.toU8a());

    return u8aConcat(...encoded);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `[${this.Type};${this.length}]`;
  }
}
