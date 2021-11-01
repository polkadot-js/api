// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyNumber, AnyString, AnyU8a, Codec, Constructor, ITuple, Registry } from '../types';

import { isFunction, isHex, isString, isU8a, stringify, u8aConcat, u8aToU8a } from '@polkadot/util';

import { AbstractArray } from './AbstractArray';
import { decodeU8a, mapToTypeMap, typeToConstructor } from './utils';

export type AnyTupleValue = AnyU8a | (Codec | AnyU8a | AnyNumber | AnyString | undefined | null)[];

type TupleConstructors = Constructor[] | {
  [index: string]: Constructor;
};

type TupleType = (Constructor | string);

type TupleTypes = TupleType[] | {
  [index: string]: Constructor | string;
};

/** @internal */
function decodeTuple (registry: Registry, _Types: TupleConstructors, value?: AnyTupleValue): [Codec[], number] {
  if (isU8a(value) || isHex(value)) {
    return decodeU8a(registry, u8aToU8a(value), _Types);
  }

  const Types: Constructor[] = Array.isArray(_Types)
    ? _Types
    : Object.values(_Types);

  return [
    Types.map((Type, index): Codec => {
      try {
        const entry = value?.[index];

        if (entry instanceof Type) {
          return entry;
        }

        return new Type(registry, entry);
      } catch (error) {
        throw new Error(`Tuple: failed on ${index}:: ${(error as Error).message}`);
      }
    }),
    0
  ];
}

/**
 * @name Tuple
 * @description
 * A Tuple defines an anonymous fixed-length array, where each element has its
 * own type. It extends the base JS `Array` object.
 */
export class Tuple extends AbstractArray<Codec> implements ITuple<Codec[]> {
  #Types: TupleConstructors;

  constructor (registry: Registry, Types: TupleTypes | TupleType, value?: AnyTupleValue) {
    const Clazzes = Array.isArray(Types)
      ? Types.map((t) => typeToConstructor(registry, t))
      : isFunction(Types) || isString(Types)
        ? [typeToConstructor(registry, Types)]
        : mapToTypeMap(registry, Types);
    const [values, decodedLength] = decodeTuple(registry, Clazzes, value);

    super(registry, values, decodedLength);

    this.#Types = Clazzes;
  }

  public static with (Types: TupleTypes | TupleType): Constructor<Tuple> {
    return class extends Tuple {
      constructor (registry: Registry, value?: AnyTupleValue) {
        super(registry, Types, value);
      }
    };
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
   * @description The types definition of the tuple
   */
  public get Types (): string[] {
    return Array.isArray(this.#Types)
      ? this.#Types.map((T) => new T(this.registry).toRawType())
      : Object.keys(this.#Types);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    const types = (
      Array.isArray(this.#Types)
        ? this.#Types
        : Object.values(this.#Types)
    ).map((T) =>
      this.registry.getClassName(T) || new T(this.registry).toRawType()
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
    const encoded = new Array<Uint8Array>(this.length);

    for (let i = 0; i < this.length; i++) {
      encoded[i] = this[i].toU8a(isBare);
    }

    return u8aConcat(...encoded);
  }
}
