// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { H256 } from '@polkadot/types/interfaces';
import { AnyJson, AnyNumber, Codec, Constructor, ICompact, InterfaceTypes, Registry } from '../types';

import BN from 'bn.js';
import { compactAddLength, compactFromU8a, compactStripLength, compactToU8a, isBigInt, isBn, isNumber, isString } from '@polkadot/util';
import { DEFAULT_BITLENGTH } from '@polkadot/util/compact/defaults';

import typeToConstructor from './utils/typeToConstructor';
import { UIntBitLength } from './AbstractInt';
import Raw from './Raw';

export interface CompactEncodable extends Codec {
  bitLength (): number;
  toBn (): BN;
  toNumber (): number;
}

/**
 * @name Compact
 * @description
 * A compact length-encoding codec wrapper. It performs the same function as Length, however
 * differs in that it uses a variable number of bytes to do the actual encoding. This is mostly
 * used by other types to add length-prefixed encoding, or in the case of wrapped types, taking
 * a number and making the compact representation thereof
 */
export default class Compact<T extends CompactEncodable> implements ICompact<T> {
  public readonly registry: Registry;

  readonly #Type: Constructor<T>;

  readonly #raw: T;

  constructor (registry: Registry, Type: Constructor<T> | keyof InterfaceTypes, value: Compact<T> | AnyNumber = 0) {
    this.registry = registry;
    this.#Type = typeToConstructor(registry, Type);
    this.#raw = Compact.decodeCompact<T>(registry, this.#Type, value) as T;
  }

  public static with<T extends CompactEncodable> (Type: Constructor<T> | keyof InterfaceTypes): Constructor<Compact<T>> {
    return class extends Compact<T> {
      constructor (registry: Registry, value?: Compact<T> | AnyNumber) {
        super(registry, Type, value);
      }
    };
  }

  /**
   * Prepend a Uint8Array with its compact length.
   *
   * @param u8a - The Uint8Array to be prefixed
   */
  public static addLengthPrefix = compactAddLength;

  public static decodeU8a = compactFromU8a;

  public static encodeU8a = compactToU8a;

  public static stripLengthPrefix (u8a: Uint8Array, bitLength: UIntBitLength = DEFAULT_BITLENGTH): Uint8Array {
    const [, value] = compactStripLength(u8a, bitLength);

    return value;
  }

  /** @internal */
  public static decodeCompact<T extends CompactEncodable> (registry: Registry, Type: Constructor<T>, value: Compact<T> | AnyNumber): CompactEncodable {
    if (value instanceof Compact) {
      return new Type(registry, value.#raw);
    } else if (isString(value) || isNumber(value) || isBn(value) || isBigInt(value)) {
      return new Type(registry, value);
    }

    const [, _value] = Compact.decodeU8a(value, new Type(registry, 0).bitLength() as UIntBitLength);

    return new Type(registry, _value);
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
  public get hash (): H256 {
    return new Raw(this.registry, this.registry.hash(this.toU8a()));
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
   * @description Returns a BigInt representation of the number
   */
  public toBigInt (): BigInt {
    return BigInt(this.toString());
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
  public toHex (isLe?: boolean): string {
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
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toU8a (isBare?: boolean): Uint8Array {
    return Compact.encodeU8a(this.#raw.toBn());
  }

  /**
   * @description Returns the embedded [[UInt]] or [[Moment]] value
   */
  public unwrap (): T {
    return this.#raw;
  }
}
