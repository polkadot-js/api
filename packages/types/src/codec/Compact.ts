// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, Codec, Constructor, ICompact, InterfaceTypes, Registry } from '../types';

import BN from 'bn.js';
import { compactAddLength, compactFromU8a, compactStripLength, compactToU8a, isBigInt, isBn, isNumber, isString } from '@polkadot/util';
import { DEFAULT_BITLENGTH } from '@polkadot/util/compact/defaults';

import typeToConstructor from './utils/typeToConstructor';
import { UIntBitLength } from './AbstractInt';
import Base from './Base';

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
export default class Compact<T extends CompactEncodable> extends Base<T> implements ICompact<T> {
  constructor (registry: Registry, Type: Constructor<T> | keyof InterfaceTypes, value: Compact<T> | AnyNumber = 0) {
    super(registry, Compact.decodeCompact<T>(registry, typeToConstructor(registry, Type), value));
  }

  public static with<T extends CompactEncodable> (Type: Constructor<T> | keyof InterfaceTypes): Constructor<Compact<T>> {
    return class extends Compact<T> {
      constructor (registry: Registry, value?: any) {
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
      return new Type(registry, value._raw);
    } else if (isString(value) || isNumber(value) || isBn(value) || isBigInt(value)) {
      return new Type(registry, value);
    }

    const [, _value] = Compact.decodeU8a(value, new Type(registry, 0).bitLength() as UIntBitLength);

    return new Type(registry, _value);
  }

  /**
   * @description Returns the number of bits in the value
   */
  public bitLength (): number {
    return this._raw.bitLength();
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: any): boolean {
    return this._raw.eq(
      other instanceof Compact
        ? other._raw
        : other
    );
  }

  /**
   * @description Returns the BN representation of the number
   */
  public toBn (): BN {
    return this._raw.toBn();
  }

  /**
   * @description Returns the number representation for the value
   */
  public toNumber (): number {
    return this._raw.toNumber();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `Compact<${this._raw.toRawType()}>`;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toU8a (isBare?: boolean): Uint8Array {
    return Compact.encodeU8a(this._raw.toBn());
  }

  /**
   * @description Returns the embedded [[UInt]] or [[Moment]] value
   */
  public unwrap (): T {
    return this._raw;
  }
}
