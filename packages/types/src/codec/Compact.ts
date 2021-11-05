// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';
import type { HexString } from '@polkadot/util/types';
import type { CodecHash, Hash } from '../interfaces';
import type { AnyJson, AnyNumber, Constructor, ICompact, INumber, Registry } from '../types';

import { bnToBn, compactFromU8a, compactToU8a, isBigInt, isBn, isNumber, isString } from '@polkadot/util';

import { typeToConstructor } from './utils';

/**
 * @name Compact
 * @description
 * A compact length-encoding codec wrapper. It performs the same function as Length, however
 * differs in that it uses a variable number of bytes to do the actual encoding. This is mostly
 * used by other types to add length-prefixed encoding, or in the case of wrapped types, taking
 * a number and making the compact representation thereof
 */
export class Compact<T extends INumber> implements ICompact<T> {
  public readonly registry: Registry;

  public createdAtHash?: Hash;

  readonly initialU8aLength?: number;

  readonly #Type: Constructor<T>;

  readonly #rawBn: BN;

  #rawInstance: T | undefined;

  constructor (registry: Registry, Type: Constructor<T> | string, value: Compact<T> | AnyNumber = 0) {
    this.registry = registry;
    this.#Type = typeToConstructor(registry, Type);

    const [bn, decodedLength] = Compact.decodeCompact<T>(value);

    this.initialU8aLength = decodedLength;
    this.#rawBn = bn;
  }

  public static with<T extends INumber> (Type: Constructor<T> | string): Constructor<Compact<T>> {
    return class extends Compact<T> {
      constructor (registry: Registry, value?: Compact<T> | AnyNumber) {
        super(registry, Type, value);
      }
    };
  }

  /** @internal */
  public static decodeCompact<T extends INumber> (value: Compact<T> | AnyNumber): [BN, number] {
    if (value instanceof Compact) {
      return [value.#rawBn, 0];
    } else if (isBn(value) || isString(value) || isNumber(value) || isBigInt(value)) {
      return [bnToBn(value), 0];
    }

    const [decodedLength, bn] = compactFromU8a(value);

    return [bn, decodedLength];
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
  public get hash (): CodecHash {
    return this.registry.hash(this.toU8a());
  }

  /**
   * @description Checks if the value is an empty value
   */
  public get isEmpty (): boolean {
    return this.#raw.isEmpty;
  }

  /**
   * @description The raw representation of the value, lazily created if it doesn't exist
   */
  get #raw (): T {
    if (!this.#rawInstance) {
      this.#rawInstance = new this.#Type(this.registry, this.#rawBn);
    }

    return this.#rawInstance;
  }

  /**
   * @description Returns the number of bits in the value
   */
  public bitLength (): number {
    return this.#rawBn.bitLength();
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
  public toBigInt (): bigint {
    return this.#raw.toBigInt();
  }

  /**
   * @description Returns the BN representation of the number
   */
  public toBn (): BN {
    return this.#rawBn;
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
    return this.#rawBn.toNumber();
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
    return compactToU8a(this.#rawBn);
  }

  /**
   * @description Returns the embedded [[UInt]] or [[Moment]] value
   */
  public unwrap (): T {
    return this.#raw;
  }
}
