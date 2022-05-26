// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { Codec, CodecClass, Inspect, Registry } from '../types';

import { assert, isU8a, u8aConcat } from '@polkadot/util';

import { AbstractArray } from '../abstract/AbstractArray';
import { decodeU8aVec, typeToConstructor } from '../utils';
import { decodeVec } from './Vec';

interface Options<T> {
  definition?: CodecClass<T>;
  setDefinition?: (d: CodecClass<T>) => CodecClass<T>;
}

function noopSetDefinition <T extends Codec> (d: CodecClass<T>): CodecClass<T> {
  return d;
}

/** @internal */
function decodeVecFixed<T extends Codec> (registry: Registry, result: T[], value: HexString | unknown[], Type: CodecClass<T>): [number, number] {
  const [decodedLength, decodedLengthNoOffset] = decodeVec(registry, result, Type, value, 0);

  while (result.length < length) {
    result.push(new Type(registry));
  }

  assert(result.length === length, () => `Expected a length of exactly ${length} entries`);

  return [decodedLength, decodedLengthNoOffset];
}

/**
 * @name VecFixed
 * @description
 * This manages codec arrays of a fixed length
 */
export class VecFixed<T extends Codec> extends AbstractArray<T> {
  readonly initialU8aLength?: number;

  #Type: CodecClass<T>;

  constructor (registry: Registry, Type: CodecClass<T> | string, length: number, value: Uint8Array | HexString | unknown[] = [] as unknown[], { definition, setDefinition = noopSetDefinition }: Options<T> = {}) {
    super(registry, length);

    this.#Type = definition || setDefinition(typeToConstructor<T>(registry, Type));

    const [, decodedLengthNoOffset] = isU8a(value)
      ? decodeU8aVec(registry, this, value, 0, this.#Type)
      : decodeVecFixed(registry, this, value, this.#Type);

    this.initialU8aLength = decodedLengthNoOffset;
  }

  public static with<O extends Codec> (Type: CodecClass<O> | string, length: number): CodecClass<VecFixed<O>> {
    let definition: CodecClass<O> | undefined;

    // eslint-disable-next-line no-return-assign
    const setDefinition = <T> (d: CodecClass<T>) =>
      (definition = d as unknown as CodecClass<O>) as unknown as CodecClass<T>;

    return class extends VecFixed<O> {
      constructor (registry: Registry, value?: any[]) {
        super(registry, Type, length, value, { definition, setDefinition });
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
    let total = 0;

    for (let i = 0; i < this.length; i++) {
      total += this[i].encodedLength;
    }

    return total;
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  override inspect (): Inspect {
    return {
      inner: this.inspectInner()
    };
  }

  public override toU8a (): Uint8Array {
    // we override, we don't add the length prefix for ourselves, and at the same time we
    // ignore isBare on entries, since they should be properly encoded at all times
    const encoded = this.toU8aInner();

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
