// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyNumber, AnyString, AnyU8a, Codec, Constructor, ITuple, Registry } from '../types';

import { isHex, isU8a, stringify, u8aConcat, u8aToU8a } from '@polkadot/util';

import { AbstractArray } from './AbstractArray';
import { decodeU8a, mapToTypeMap, typeToConstructor } from './utils';

type AnyTuple = AnyU8a | string | (Codec | AnyU8a | AnyNumber | AnyString | undefined | null)[];

type TupleConstructors = Constructor[] | {
  [index: string]: Constructor;
};

type TupleTypes = (Constructor | string)[] | {
  [index: string]: Constructor | string;
};

/** @internal */
function decodeTuple (registry: Registry, _Types: TupleConstructors, value?: AnyTuple): Codec[] {
  if (isU8a(value) || isHex(value)) {
    return decodeU8a(registry, u8aToU8a(value), _Types);
  }

  const Types: Constructor[] = Array.isArray(_Types)
    ? _Types
    : Object.values(_Types);

  return Types.map((Type, index): Codec => {
    try {
      const entry = value?.[index];

      if (entry instanceof Type) {
        return entry;
      }

      return new Type(registry, entry);
    } catch (error) {
      throw new Error(`Tuple: failed on ${index}:: ${(error as Error).message}`);
    }
  });
}

/**
 * @name Tuple
 * @description
 * A Tuple defines an anonymous fixed-length array, where each element has its
 * own type. It extends the base JS `Array` object.
 */
export class Tuple extends AbstractArray<Codec> implements ITuple<Codec[]> {
  private _Types: TupleConstructors;

  constructor (registry: Registry, Types: TupleTypes, value?: AnyTuple) {
    const Clazzes = Array.isArray(Types)
      ? Types.map((t) => typeToConstructor(registry, t))
      : mapToTypeMap(registry, Types);

    super(registry, ...decodeTuple(registry, Clazzes, value));

    this._Types = Clazzes;
  }

  public static with (Types: TupleTypes): Constructor<Tuple> {
    return class extends Tuple {
      constructor (registry: Registry, value?: AnyTuple) {
        super(registry, Types, value);
      }
    };
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override get encodedLength (): number {
    return this.reduce((total, entry) => total + entry.encodedLength, 0);
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
    ).map((Type) =>
      this.registry.getClassName(Type) || new Type(this.registry).toRawType()
    );

    return `(${types.join(',')})`;
  }

  /**
   * @description Returns the string representation of the value
   */
  public override toString (): string {
    // Overwrite the default toString representation of Array.
    return stringify(this.toJSON());
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public override toU8a (isBare?: boolean): Uint8Array {
    return u8aConcat(
      ...this.map((entry): Uint8Array =>
        entry.toU8a(isBare)
      )
    );
  }
}
