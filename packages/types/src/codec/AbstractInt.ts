// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, Codec, IHash, Registry } from '../types';

import BN from 'bn.js';
import { bnToBn, hexToBn, isHex, isString, isU8a, u8aToBn } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import Raw from './Raw';

export type UIntBitLength = 8 | 16 | 32 | 64 | 128 | 256;

export const DEFAULT_UINT_BITS = 64;

/**
 * @name AbstractInt
 * @ignore
 * @noInheritDoc
 */
// TODO:
//   - Apart from encoding/decoding we don't actually keep check on the sizes, is this good enough?
export default abstract class AbstractInt extends BN implements Codec {
  public readonly registry: Registry;

  protected _bitLength: UIntBitLength;

  private _isHexJson: boolean;

  private _isNegative: boolean;

  protected constructor (registry: Registry, isNegative: boolean, value: AnyNumber = 0, bitLength: UIntBitLength = DEFAULT_UINT_BITS, isHexJson = true) {
    super(AbstractInt.decodeAbstracInt(value, bitLength, isNegative));

    this.registry = registry;
    this._bitLength = bitLength;
    this._isHexJson = isHexJson;
    this._isNegative = isNegative;
  }

  /** @internal */
  public static decodeAbstracInt (value: AnyNumber, bitLength: UIntBitLength, isNegative: boolean): string {
    // This function returns a string, which will be passed in the BN
    // constructor. It would be ideal to actually return a BN, but there's a
    // bug: https://github.com/indutny/bn.js/issues/206.
    if (isHex(value, -1, true)) {
      return hexToBn(value, { isLe: false, isNegative }).toString();
    } else if (isU8a(value)) {
      return AbstractInt.decodeAbstracIntU8a(value, bitLength, isNegative);
    } else if (isString(value)) {
      return new BN(value, 10).toString();
    }

    return bnToBn(value).toString();
  }

  /** @internal */
  private static decodeAbstracIntU8a (value: Uint8Array, bitLength: UIntBitLength, isNegative: boolean): string {
    if (!value.length) {
      return '0';
    }

    try {
      // NOTE When passing u8a in (typically from decoded data), it is always Little Endian
      return u8aToBn(value.subarray(0, bitLength / 8), { isLe: true, isNegative }).toString();
    } catch (error) {
      throw new Error(`AbstractInt: failed on ${JSON.stringify(value)}:: ${error.message}`);
    }
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return this._bitLength / 8;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): IHash {
    return new Raw(this.registry, blake2AsU8a(this.toU8a(), 256));
  }

  /**
   * @description Checks if the value is a zero value (align elsewhere)
   */
  public get isEmpty (): boolean {
    return this.isZero();
  }

  /**
   * @description Returns the number of bits in the value
   */
  public bitLength (): UIntBitLength {
    return this._bitLength;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public eq (other?: any): boolean {
    // Here we are actually overriding the built-in .eq to take care of both
    // number and BN inputs (no `.eqn` needed) - numbers will be converted
    return super.eq(
      isHex(other)
        ? hexToBn(other.toString(), { isLe: false, isNegative: this._isNegative })
        : bnToBn(other)
    );
  }

  /**
   * @description True if this value is the max of the type
   */
  public isMax (): boolean {
    const u8a = this.toU8a().filter((byte): boolean => byte === 0xff);

    return u8a.length === (this._bitLength / 8);
  }

  /**
   * @description Returns the BN representation of the number. (Compatibility)
   */
  public toBn (): BN {
    return this;
  }

  /**
   * @description Returns a hex string representation of the value
   */
  abstract toHex (): string;

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): any {
    // FIXME this return type should by string | number, but BN's return type
    // is string.
    // Maximum allowed integer for JS is 2^53 - 1, set limit at 52
    return this._isHexJson || (super.bitLength() > 52)
      ? this.toHex()
      : this.toNumber();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  abstract toRawType (): string;

  /**
   * @description Returns the string representation of the value
   * @param base The base to use for the conversion
   */
  public toString (base?: number): string {
    // only included here since we do not inherit docs
    return super.toString(base);
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  abstract toU8a (isBare?: boolean): Uint8Array;
}
