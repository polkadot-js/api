// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, AnyU8a, AnyString, Codec, Constructor, InterfaceTypes, Registry } from '../types';

import { isU8a, u8aConcat, isHex, hexToU8a } from '@polkadot/util';

import { decodeU8a, mapToTypeMap, typeToConstructor } from './utils';
import AbstractArray from './AbstractArray';

type TupleConstructors = Constructor[] | {
  [index: string]: Constructor;
};

type TupleTypes = (Constructor | keyof InterfaceTypes)[] | {
  [index: string]: Constructor | keyof InterfaceTypes;
};

/** @internal */
function decodeTuple (registry: Registry, _Types: TupleConstructors, value: AnyU8a | string | (AnyU8a | AnyNumber | AnyString | undefined | null)[]): Codec[] {
  if (isU8a(value)) {
    return decodeU8a(registry, value, _Types);
  } else if (isHex(value)) {
    return decodeTuple(registry, _Types, hexToU8a(value));
  }

  const Types: Constructor[] = Array.isArray(_Types)
    ? _Types
    : Object.values(_Types);

  return Types.map((Type, index): Codec => {
    try {
      if (value?.[index] instanceof Type) return value[index] as any;

      return new Type(registry, value?.[index]);
    } catch (error) {
      throw new Error(`Tuple: failed on ${index}:: ${error.message}`);
    }
  });
}

/**
 * @name Tuple
 * @description
 * A Tuple defines an anonymous fixed-length array, where each element has its
 * own type. It extends the base JS `Array` object.
 */
export default class Tuple extends AbstractArray<Codec> {
  private _Types: TupleConstructors;

  constructor (registry: Registry, Types: TupleTypes, value?: any) {
    const Clazzes = Array.isArray(Types)
      ? Types.map((type): Constructor => typeToConstructor(registry, type))
      : mapToTypeMap(registry, Types);

    super(registry, ...decodeTuple(registry, Clazzes, value));

    this._Types = Clazzes;
  }

  public static with (Types: TupleTypes): Constructor<Tuple> {
    return class extends Tuple {
      constructor (registry: Registry, value?: any) {
        super(registry, Types, value);
      }
    };
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return this.reduce((length: number, entry: Codec): number => {
      length += entry.encodedLength;

      return length;
    }, 0);
  }

  /**
   * @description The types definition of the tuple
   */
  public get Types (): string[] {
    return Array.isArray(this._Types)
      ? this._Types.map((Type): string => new Type(this.registry).toRawType())
      : Object.keys(this._Types);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    const types = (
      Array.isArray(this._Types)
        ? this._Types
        : Object.values(this._Types)
    ).map((Type): string => new Type(this.registry).toRawType());

    return `(${types.join(',')})`;
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    // Overwrite the default toString representation of Array.
    return JSON.stringify(this.toJSON());
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    return u8aConcat(
      ...this.map((entry): Uint8Array =>
        entry.toU8a(isBare)
      )
    );
  }
}
