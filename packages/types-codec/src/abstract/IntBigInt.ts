// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';
import type { HexString } from '@polkadot/util/types';
import type { AnyNumber, Inspect, INumber, Registry, ToBigInt, UIntBitLength } from '../types/index.js';

import { _0n, _1Bn, _1Mn, _1Qn, _100n, bnToBn, formatBalance, formatNumber, hexToBigInt, isBigInt, isBn, isFunction, isHex, isNumber, isObject, isString, isU8a, nToBigInt, nToHex, nToU8a, u8aToBigInt } from '@polkadot/util';
import { BigInt } from '@polkadot/x-bigint';

import { AbstractObject } from './Object.js';

export const DEFAULT_UINT_BITS = 64;

// Maximum allowed integer for JS is 2^53 - 1, set limit at 52
// In this case however, we always print any >32 as hex
const MAX_NUMBER_BITS = 52;
const MUL_P = BigInt(1_00_00);

const FORMATTERS: Record<string, bigint> = {
  Perbill: _1Bn,
  Percent: _100n,
  Permill: _1Mn,
  Perquintill: _1Qn
};

function isToBigInt (value: unknown): value is ToBigInt {
  return isFunction((value as ToBigInt).toBigInt);
}

function toPercentage (value: bigint, divisor: bigint): string {
  return `${(Number((value * MUL_P) / divisor) / 100).toFixed(2)}%`;
}

/** @internal */
function decodeBigInt (value: Exclude<AnyNumber, Uint8Array> | Record<string, string>, isNegative: boolean): bigint {
  if (isBigInt(value)) {
    return value;
  } else if (isNumber(value)) {
    if (!Number.isInteger(value) || value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER) {
      throw new Error('Number needs to be an integer <= Number.MAX_SAFE_INTEGER, i.e. 2 ^ 53 - 1');
    }

    return BigInt(value);
  } else if (isString(value)) {
    if (isHex(value, -1, true)) {
      return hexToBigInt(value, { isLe: false, isNegative });
    }

    if (value.includes('.') || value.includes(',') || value.includes('e')) {
      throw new Error('String should not contain decimal points or scientific notation');
    }

    return BigInt(value);
  } else if (isBn(value)) {
    return BigInt(value.toString());
  } else if (isObject(value)) {
    if (isToBigInt(value)) {
      return value.toBigInt();
    }

    // Allow the construction from an object with a single top-level key. This means that
    // single key objects can be treated equivalently to numbers, assuming they meet the
    // specific requirements. (This is useful in Weights 1.5 where Objects are compact)
    const keys = Object.keys(value);

    if (keys.length !== 1) {
      throw new Error('Unable to construct number from multi-key object');
    }

    return decodeBigInt(value[keys[0]], isNegative);
  }

  throw new Error(`Unable to create BigInt from unknown type ${typeof value}`);
}

/**
 * @name AbstractBigInt
 * @ignore
 * @noInheritDoc
 */
export abstract class AbstractBigInt extends AbstractObject<bigint> implements INumber {
  readonly isUnsigned: boolean;

  readonly #bitLength: UIntBitLength;
  readonly #bitLengthInitial: number;
  readonly #encodedLength: number;

  constructor (registry: Registry, value: AnyNumber = 0, bitLength: UIntBitLength = DEFAULT_UINT_BITS, isSigned = false) {
    super(
      registry,
      // shortcut isU8a as used in SCALE decoding
      isU8a(value)
        ? u8aToBigInt(value.subarray(0, bitLength / 8), { isLe: true, isNegative: isSigned })
        : decodeBigInt(value, isSigned),
      bitLength / 8
    );

    this.#bitLength = bitLength;
    this.#bitLengthInitial = this.$.toString(2).length;
    this.#encodedLength = this.#bitLength / 8;
    this.isUnsigned = !isSigned;

    const isNegative = this.$ < _0n;
    const maxBits = bitLength - (isSigned && !isNegative ? 1 : 0);

    if (isNegative && !isSigned) {
      throw new Error(`${this.toRawType()}: Negative number passed to unsigned type`);
    } else if (this.#bitLengthInitial > maxBits) {
      throw new Error(`${this.toRawType()}: Input too large. Found input with ${this.#bitLengthInitial} bits, expected ${maxBits}`);
    }
  }

  public override get encodedLength (): number {
    return this.#encodedLength;
  }

  /**
   * @description Checks if the value is a zero value (align elsewhere)
   */
  public get isEmpty (): boolean {
    return this.$ === _0n;
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
  public override eq (other?: unknown): boolean {
    return this.$ === (
      isHex(other)
        ? hexToBigInt(other.toString(), { isLe: false, isNegative: !this.isUnsigned })
        : nToBigInt(other as string)
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
    return this.$;
  }

  /**
   * @description Returns the BN representation of the number. (Compatibility)
   */
  public toBn (): BN {
    return bnToBn(this.$);
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (isLe = false): HexString {
    // For display/JSON, this is BE, for compare, use isLe
    return nToHex(this.$, {
      bitLength: this.bitLength(),
      isLe,
      isNegative: !this.isUnsigned
    });
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (_isExpanded?: boolean): string {
    const rawType = this.toRawType();

    if (rawType === 'Balance') {
      return this.isMax()
        ? 'everything'
        // FIXME In the case of multiples we need some way of detecting which instance this belongs
        // to. as it stands we will always format (incorrectly) against the first token defined
        : formatBalance(this, {
          decimals: this.registry.chainDecimals[0],
          withSi: true,
          withUnit: this.registry.chainTokens[0]
        });
    }

    const divisor = FORMATTERS[rawType];

    return divisor
      ? toPercentage(this.$, divisor)
      : formatNumber(this.$);
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public override toJSON (onlyHex = false): string | number {
    // Options here are
    //   - this.#bitLengthInitial - the actual used bits
    //   - this.#bitLength - the type bits (this should be used, however contracts RPC is problematic)
    return onlyHex || (this.#bitLength > 128) || (this.#bitLengthInitial > MAX_NUMBER_BITS)
      ? this.toHex()
      : this.toNumber();
  }

  /**
   * @description Returns the number representation of this value (only for < MAX_SAFE_INTEGER)
   */
  public toNumber (): number {
    return Number(this.$);
  }

  /**
   * @description Returns the value in a primitive form, either number when <= 52 bits, or string otherwise
   */
  public toPrimitive (): number | string {
    return this.#bitLengthInitial > MAX_NUMBER_BITS
      ? this.toString()
      : this.toNumber();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    // NOTE In the case of balances, which have a special meaning on the UI
    // and can be interpreted differently, return a specific value for it so
    // underlying it always matches (no matter which length it actually is)
    return this instanceof this.registry.createClassUnsafe('Balance')
      ? 'Balance'
      : `${this.isUnsigned ? 'u' : 'i'}${this.bitLength()}`;
  }

  /**
   * @description Returns the string representation of the value
   * @param base The base to use for the conversion
   */
  public override toString (base?: number): string {
    // only included here since we do not inherit docs
    return this.$.toString(base);
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (_isBare?: boolean): Uint8Array {
    return nToU8a(this.$, {
      bitLength: this.bitLength(),
      isLe: true,
      isNegative: !this.isUnsigned
    });
  }
}
