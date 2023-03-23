// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';
import type { HexString } from '@polkadot/util/types';
import type { AnyJson, AnyNumber, CodecClass, ICompact, Inspect, INumber, IU8a, Registry } from '../types/index.js';

import { compactFromU8a, compactFromU8aLim, compactToU8a, isU8a } from '@polkadot/util';

import { typeToConstructor } from '../utils/index.js';

interface Options<T> {
  definition?: CodecClass<T>;
  setDefinition?: (d: CodecClass<T>) => CodecClass<T>;
}

function noopSetDefinition <T> (d: CodecClass<T>): CodecClass<T> {
  return d;
}

function decodeCompact<T extends INumber> (registry: Registry, Type: CodecClass<T>, value: Compact<T> | AnyNumber): [T, number] {
  if (isU8a(value)) {
    const [decodedLength, bn] = (value[0] & 0b11) < 0b11
      ? compactFromU8aLim(value)
      : compactFromU8a(value);

    return [new Type(registry, bn), decodedLength];
  } else if (value instanceof Compact) {
    const raw = value.unwrap();

    return raw instanceof Type
      ? [raw, 0]
      : [new Type(registry, raw), 0];
  } else if (value instanceof Type) {
    return [value, 0];
  }

  return [new Type(registry, value), 0];
}

/**
 * @name Compact
 * @description
 * A compact length-encoding codec wrapper. It performs the same function as Length, however
 * differs in that it uses a variable number of bytes to do the actual encoding. This is mostly
 * used by other types to add length-prefixed encoding, or in the case of wrapped types, taking
 * a number and making the compact representation thereof
 */
export class Compact<T extends INumber> implements ICompact<T> {
  readonly registry: Registry;

  public createdAtHash?: IU8a;
  public initialU8aLength?: number;
  public isStorageFallback?: boolean;

  readonly #Type: CodecClass<T>;
  readonly #raw: T;

  constructor (registry: Registry, Type: CodecClass<T> | string, value: Compact<T> | AnyNumber = 0, { definition, setDefinition = noopSetDefinition }: Options<T> = {}) {
    this.registry = registry;
    this.#Type = definition || setDefinition(typeToConstructor(registry, Type));

    const [raw, decodedLength] = decodeCompact<T>(registry, this.#Type, value);

    this.initialU8aLength = decodedLength;
    this.#raw = raw;
  }

  public static with<O extends INumber> (Type: CodecClass<O> | string): CodecClass<Compact<O>> {
    let definition: CodecClass<O> | undefined;

    // eslint-disable-next-line no-return-assign
    const setDefinition = <T> (d: CodecClass<T>) =>
      (definition = d as unknown as CodecClass<O>) as unknown as CodecClass<T>;

    return class extends Compact<O> {
      constructor (registry: Registry, value?: Compact<O> | AnyNumber) {
        super(registry, Type, value, { definition, setDefinition });
      }
    };
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return this.toU8a().length;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): IU8a {
    return this.registry.hash(this.toU8a());
  }

  /**
   * @description Checks if the value is an empty value
   */
  public get isEmpty (): boolean {
    return this.#raw.isEmpty;
  }

  /**
   * @description Returns the number of bits in the value
   */
  public bitLength (): number {
    return this.#raw.bitLength();
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    return this.#raw.eq(
      other instanceof Compact
        ? other.#raw
        : other
    );
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public inspect (): Inspect {
    return {
      outer: [this.toU8a()]
    };
  }

  /**
   * @description Returns a BigInt representation of the number
   */
  public toBigInt (): bigint {
    return this.#raw.toBigInt();
  }

  /**
   * @description Returns the BN representation of the number
   */
  public toBn (): BN {
    return this.#raw.toBn();
  }

  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */
  public toHex (isLe?: boolean): HexString {
    return this.#raw.toHex(isLe);
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (isExtended?: boolean): AnyJson {
    return this.#raw.toHuman(isExtended);
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJson {
    return this.#raw.toJSON();
  }

  /**
   * @description Returns the number representation for the value
   */
  public toNumber (): number {
    return this.#raw.toNumber();
  }

  /**
   * @description Converts the value in a best-fit primitive form
   */
  public toPrimitive (): string | number {
    return this.#raw.toPrimitive();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `Compact<${this.registry.getClassName(this.#Type) || this.#raw.toRawType()}>`;
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return this.#raw.toString();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */
  public toU8a (_isBare?: boolean): Uint8Array {
    return compactToU8a(this.#raw.toBn());
  }

  /**
   * @description Returns the embedded [[UInt]] or [[Moment]] value
   */
  public unwrap (): T {
    return this.#raw;
  }
}
