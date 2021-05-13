// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecHash, Hash } from '../interfaces/runtime';
import type { AnyNumber, Codec, Registry } from '../types';
import type { UIntBitLength } from './types';

import BN from 'bn.js';

import { assert, BN_BILLION, BN_HUNDRED, BN_MILLION, BN_QUINTILL, BN_ZERO, bnToBn, bnToHex, bnToU8a, formatBalance, formatNumber, hexToBn, isHex, isString, isU8a, stringify, u8aToBn } from '@polkadot/util';

export const DEFAULT_UINT_BITS = 64;

// Maximum allowed integer for JS is 2^53 - 1, set limit at 52
// In this case however, we always print any >32 as hex
const MAX_NUMBER_BITS = 52;
const MUL_P = new BN(1_00_00);

const FORMATTERS: [string, BN][] = [
  ['Perquintill', BN_QUINTILL],
  ['Perbill', BN_BILLION],
  ['Permill', BN_MILLION],
  ['Percent', BN_HUNDRED]
];

function toPercentage (value: BN, divisor: BN): string {
  return `${(value.mul(MUL_P).div(divisor).toNumber() / 100).toFixed(2)}%`;
}

/** @internal */
function decodeAbstracIntU8a (value: Uint8Array, bitLength: UIntBitLength, isNegative: boolean): string {
  if (!value.length) {
    return '0';
  }

  try {
    // NOTE When passing u8a in (typically from decoded data), it is always Little Endian
    return u8aToBn(value.subarray(0, bitLength / 8), { isLe: true, isNegative }).toString();
  } catch (error) {
    throw new Error(`AbstractInt: failed on ${stringify(value)}:: ${(error as Error).message}`);
  }
}

/** @internal */
function decodeAbstractInt (value: AnyNumber, bitLength: UIntBitLength, isNegative: boolean): string {
  // This function returns a string, which will be passed in the BN
  // constructor. It would be ideal to actually return a BN, but there's a
  // bug: https://github.com/indutny/bn.js/issues/206.
  if (isHex(value, -1, true)) {
    return hexToBn(value, { isLe: false, isNegative }).toString();
  } else if (isU8a(value)) {
    return decodeAbstracIntU8a(value, bitLength, isNegative);
  } else if (isString(value)) {
    return new BN(value.toString(), 10).toString();
  }

  return bnToBn(value).toString();
}

/**
 * @name AbstractInt
 * @ignore
 * @noInheritDoc
 */
export abstract class AbstractInt extends BN implements Codec {
  public readonly registry: Registry;

  public createdAtHash?: Hash;

  readonly #bitLength: UIntBitLength;

  readonly #isSigned: boolean;

  constructor (registry: Registry, value: AnyNumber = 0, bitLength: UIntBitLength = DEFAULT_UINT_BITS, isSigned = false) {
    super(decodeAbstractInt(value, bitLength, isSigned));

    this.registry = registry;
    this.#bitLength = bitLength;
    this.#isSigned = isSigned;

    const isPositive = this.gte(BN_ZERO);
    const maxBits = bitLength - (isSigned && isPositive ? 1 : 0);

    assert(isSigned || isPositive, () => `${this.toRawType()}: Negative number passed to unsigned type`);
    assert(super.bitLength() <= maxBits, () => `${this.toRawType()}: Input too large. Found input with ${super.bitLength()} bits, expected ${maxBits}`);
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return this.#bitLength / 8;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): CodecHash {
    return this.registry.hash(this.toU8a());
  }

  /**
   * @description Checks if the value is a zero value (align elsewhere)
   */
  public get isEmpty (): boolean {
    return this.isZero();
  }

  /**
   * @description Checks if the value is an unsigned type
   */
  public get isUnsigned (): boolean {
    return !this.#isSigned;
  }

  /**
   * @description Returns the number of bits in the value
   */
  public bitLength (): number {
    return this.#bitLength;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public eq (other?: unknown): boolean {
    // Here we are actually overriding the built-in .eq to take care of both
    // number and BN inputs (no `.eqn` needed) - numbers will be converted
    return super.eq(
      isHex(other)
        ? hexToBn(other.toString(), { isLe: false, isNegative: this.#isSigned })
        : bnToBn(other as string)
    );
  }

  /**
   * @description True if this value is the max of the type
   */
  public isMax (): boolean {
    const u8a = this.toU8a().filter((b) => b === 0xff);

    return u8a.length === (this.#bitLength / 8);
  }

  /**
   * @description Returns a BigInt representation of the number
   */
  public toBigInt (): bigint {
    return BigInt(this.toString());
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
  public toHex (isLe = false): string {
    // For display/JSON, this is BE, for compare, use isLe
    return bnToHex(this, {
      bitLength: this.bitLength(),
      isLe,
      isNegative: !this.isUnsigned
    });
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toHuman (isExpanded?: boolean): string {
    const rawType = this.toRawType();

    if (rawType === 'Balance') {
      return this.isMax()
        ? 'everything'
        // FIXME In the case of multiples we need some way of detecting which instance this belongs
        // to. as it stands we will always format (incorrectly) against the first token defined
        : formatBalance(this, { decimals: this.registry.chainDecimals[0], withSi: true, withUnit: this.registry.chainTokens[0] });
    }

    const [, divisor] = FORMATTERS.find(([type]) => type === rawType) || [];

    return divisor
      ? toPercentage(this, divisor)
      : formatNumber(this);
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (onlyHex = false): any {
    // FIXME this return type should by string | number, however BN returns string
    // Options here are
    //   - super.bitLength() - the actual used bits
    //   - this.#bitLength - the type bits (this should be used, however contracts RPC is problematic)
    return onlyHex || (super.bitLength() > MAX_NUMBER_BITS)
      ? this.toHex()
      : this.toNumber();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    // NOTE In the case of balances, which have a special meaning on the UI
    // and can be interpreted differently, return a specific value for it so
    // underlying it always matches (no matter which length it actually is)
    return this instanceof this.registry.createClass('Balance')
      ? 'Balance'
      : `${this.isUnsigned ? 'u' : 'i'}${this.bitLength()}`;
  }

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toU8a (isBare?: boolean): Uint8Array {
    return bnToU8a(this, {
      bitLength: this.bitLength(),
      isLe: true,
      isNegative: !this.isUnsigned
    });
  }
}
