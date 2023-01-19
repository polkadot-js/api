// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyNumber, Inspect, INumber, IU8a, Registry, UIntBitLength } from '../types';

import { BN, BN_BILLION, BN_HUNDRED, BN_MILLION, BN_QUINTILL, bnToBn, bnToHex, bnToU8a, formatBalance, formatNumber, hexToBn, isBn, isFunction, isHex, isNumber, isObject, isString, isU8a, u8aToBn, u8aToNumber } from '@polkadot/util';

import { warnGet } from '../utils';

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
function decodeAbstractInt (value: Exclude<AnyNumber, Uint8Array> | Record<string, string>, isNegative: boolean): string | number {
  if (isNumber(value)) {
    if (!Number.isInteger(value) || value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER) {
      throw new Error('Number needs to be an integer <= Number.MAX_SAFE_INTEGER, i.e. 2 ^ 53 - 1');
    }

    return value;
  } else if (isString(value)) {
    if (isHex(value, -1, true)) {
      return hexToBn(value, { isLe: false, isNegative }).toString();
    }

    if (value.includes('.') || value.includes(',') || value.includes('e')) {
      throw new Error('String should not contain decimal points or scientific notation');
    }

    return value;
  } else if (isBn(value)) {
    return value.toString();
  } else if (isObject(value) && !isFunction(value.toBn)) {
    // Allow the construction from an object with a single top-level key. This means that
    // single key objects can be treated equivalently to numbers, assuming they meet the
    // specific requirements. (This is useful in Weights 1.5 where Objects are compact)
    const keys = Object.keys(value);

    if (keys.length !== 1) {
      throw new Error('Unable to construct number from multi-key object');
    }

    const inner = value[keys[0]];

    if (!isString(inner) && !isNumber(inner)) {
      throw new Error('Unable to construct from object with non-string/non-number value');
    }

    return decodeAbstractInt(inner, isNegative);
  }

  return bnToBn(value as bigint).toString();
}

/**
 * @name AbstractInt
 * @ignore
 * @noInheritDoc
 */
export abstract class AbstractInt extends BN implements INumber {
  public $createdAtHash?: IU8a;
  readonly $encodedLength: number;
  public $initialU8aLength?: number;
  public $isStorageFallback?: boolean;
  readonly $isUnsigned: boolean;
  readonly $registry: Registry;

  readonly #bitLength: UIntBitLength;

  constructor (registry: Registry, value: AnyNumber = 0, bitLength: UIntBitLength = DEFAULT_UINT_BITS, isSigned = false) {
    // Construct via a string/number, which will be passed in the BN constructor.
    // It would be ideal to actually return a BN, but there is an issue:
    // https://github.com/indutny/bn.js/issues/206
    super(
      // shortcut isU8a as used in SCALE decoding
      isU8a(value)
        ? bitLength <= 48
          ? u8aToNumber(value.subarray(0, bitLength / 8), { isNegative: isSigned })
          : u8aToBn(value.subarray(0, bitLength / 8), { isLe: true, isNegative: isSigned }).toString()
        : decodeAbstractInt(value, isSigned)
    );

    this.$registry = registry;
    this.#bitLength = bitLength;
    this.$encodedLength = this.$initialU8aLength = this.#bitLength / 8;
    this.$isUnsigned = !isSigned;

    const isNegative = this.isNeg();
    const maxBits = bitLength - (isSigned && !isNegative ? 1 : 0);

    if (isNegative && !isSigned) {
      throw new Error(`${this.toRawType()}: Negative number passed to unsigned type`);
    } else if (super.bitLength() > maxBits) {
      throw new Error(`${this.toRawType()}: Input too large. Found input with ${super.bitLength()} bits, expected ${maxBits}`);
    }
  }

  /** @deprecated Use $createdAtHash instead. This getter will be removed in a future version. */
  public get createdAtHash (): IU8a | undefined {
    return warnGet(this, 'createdAtHash');
  }

  /** @deprecated Use $encodedLength instead. This getter will be removed in a future version. */
  public get encodedLength (): number {
    return warnGet(this, 'encodedLength');
  }

  /** @deprecated Use $initialU8aLength instead. This getter will be removed in a future version. */
  public get initialU8aLength (): number | undefined {
    return warnGet(this, 'initialU8aLength');
  }

  /** @deprecated Use $isEmpty instead. This getter will be removed in a future version */
  public get isEmpty (): boolean {
    return warnGet(this, 'isEmpty');
  }

  /** @deprecated Use $isUnsigned instead. This getter will be removed in a future version */
  public get isUnsigned (): boolean {
    return warnGet(this, 'isUnsigned');
  }

  /** @deprecated Use $registry instead. This getter will be removed in a future version */
  public get registry (): boolean {
    return warnGet(this, 'registry');
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): IU8a {
    return this.$registry.hash(this.toU8a());
  }

  /**
   * @description Checks if the value is a zero value (align elsewhere)
   */
  public get $isEmpty (): boolean {
    return this.isZero();
  }

  /**
   * @description Returns the number of bits in the value
   */
  public override bitLength (): number {
    return this.#bitLength;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public override eq (other?: unknown): boolean {
    // Here we are actually overriding the built-in .eq to take care of both
    // number and BN inputs (no `.eqn` needed) - numbers will be converted
    return super.eq(
      isHex(other)
        ? hexToBn(other.toString(), { isLe: false, isNegative: !this.$isUnsigned })
        : bnToBn(other as string)
    );
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public inspectU8a (): Inspect {
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
  public toHex (isLe = false): HexString {
    // For display/JSON, this is BE, for compare, use isLe
    return bnToHex(this, {
      bitLength: this.bitLength(),
      isLe,
      isNegative: !this.$isUnsigned
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
        : formatBalance(this, { decimals: this.$registry.chainDecimals[0], withSi: true, withUnit: this.$registry.chainTokens[0] });
    }

    const [, divisor] = FORMATTERS.find(([type]) => type === rawType) || [];

    return divisor
      ? toPercentage(this, divisor)
      : formatNumber(this);
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public override toJSON (onlyHex = false): any {
    // FIXME this return type should by string | number, however BN returns string
    // Options here are
    //   - super.bitLength() - the actual used bits
    //   - this.#bitLength - the type bits (this should be used, however contracts RPC is problematic)
    return onlyHex || (super.bitLength() > MAX_NUMBER_BITS)
      ? this.toHex()
      : this.toNumber();
  }

  /**
   * @description Returns the value in a primitive form, either number when <= 52 bits, or string otherwise
   */
  public toPrimitive (): number | string {
    return super.bitLength() > MAX_NUMBER_BITS
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
    return this instanceof this.$registry.createClassUnsafe('Balance')
      ? 'Balance'
      : `${this.$isUnsigned ? 'u' : 'i'}${this.bitLength()}`;
  }

  /**
   * @description Returns the string representation of the value
   * @param base The base to use for the conversion
   */
  public override toString (base?: number): string {
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
      isNegative: !this.$isUnsigned
    });
  }
}
