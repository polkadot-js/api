// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, AnyU8a, ArgsDef, Codec, IExtrinsic, IKeyringPair, SignatureOptions } from '../types';

import { assert, isHex, isU8a, u8aToU8a } from '@polkadot/util';

import Base from '../codec/Base';
import Compact from '../codec/Compact';
import { FunctionMetadata } from '../Metadata/v6/Calls';
import Method from '../primitive/Method';
import Address from '../primitive/Address';
import Hash from '../primitive/Hash';
import ExtrinsicSignature from './ExtrinsicSignature';
import ExtrinsicV1, { ExtrinsicValueV1 } from './ExtrinsicV1';

type ExtrinsicValue = ExtrinsicValueV1;

const UNMASK_VERSION = 0b01111111;

/**
 * @name Extrinsic
 * @description
 * Representation of an Extrinsic in the system. It contains the actual call,
 * (optional) signature and encodes with an actual length prefix
 *
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 *
 * Can be:
 * - signed, to create a transaction
 * - left as is, to create an inherent
 */
export default class Extrinsic extends Base<ExtrinsicV1> implements IExtrinsic, Codec {
  constructor (value?: ExtrinsicValue | AnyU8a | Method) {
    super(Extrinsic.decodeExtrinsic(value));
  }

  static decodeExtrinsic (value?: ExtrinsicValue | AnyU8a | Method): ExtrinsicV1 {
    if (Array.isArray(value) || isHex(value)) {
      // Instead of the block below, it should simply be:
      // return Extrinsic.decodeExtrinsic(hexToU8a(value as string));
      const u8a = u8aToU8a(value);

      // HACK 11 Jan 2019 - before https://github.com/paritytech/substrate/pull/1388
      // extrinsics didn't have the length, cater for both approaches
      const [offset, length] = Compact.decodeU8a(u8a);
      const withPrefix = u8a.length === (offset + length.toNumber());

      return Extrinsic.decodeExtrinsic(
        withPrefix
          ? u8a
          : Compact.addLengthPrefix(u8a)
      );
    } else if (isU8a(value)) {
      if (!value.length) {
        return new ExtrinsicV1(new Uint8Array());
      }

      const [offset, length] = Compact.decodeU8a(value);
      const total = offset + length.toNumber();

      assert(total <= value.length, `Extrinsic: required length less than remainder, expected at least ${total}, found ${value.length}`);

      return Extrinsic.decodeU8a(value.subarray(offset, total));
    } else if (value instanceof Method) {
      return new ExtrinsicV1({
        method: value
      });
    }

    return new ExtrinsicV1(value);
  }

  static decodeU8a (value: Uint8Array): ExtrinsicV1 {
    // decode the actual version string
    const version = value[0] & UNMASK_VERSION;

    switch (version) {
      case 1:
        return new ExtrinsicV1(value);

      default:
        throw new Error(`Unsupported extrinsic version ${version}`);
    }
  }

  /**
   * @description The arguments passed to for the call, exposes args so it is compatible with [[Method]]
   */
  get args (): Array<Codec> {
    return this.method.args;
  }

  /**
   * @description Thge argument defintions, compatible with [[Method]]
   */
  get argsDef (): ArgsDef {
    return this.method.argsDef;
  }

  /**
   * @description The actual `[sectionIndex, methodIndex]` as used in the Method
   */
  get callIndex (): Uint8Array {
    return this.method.callIndex;
  }

  /**
   * @description The actual data for the Method
   */
  get data (): Uint8Array {
    return this.method.data;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    return this.raw.encodedLength;
  }

  /**
   * @description Convernience function, encodes the extrinsic and returns the actual hash
   */
  get hash (): Hash {
    return this.raw.hash;
  }

  /**
   * @description `true` is method has `Origin` argument (compatibility with [[Method]])
   */
  get hasOrigin (): boolean {
    return this.raw.hasOrigin;
  }

  /**
   * @description Checks if the value is an empty value
   */
  get isEmpty (): boolean {
    return this.raw.isEmpty;
  }

  /**
   * @description `true` id the extrinsic is signed
   */
  get isSigned (): boolean {
    return this.raw.isSigned;
  }

  /**
   * @description The length of the encoded value
   */
  get length (): number {
    return this.raw.length;
  }

  /**
   * @description The [[FunctionMetadata]] that describes the extrinsic
   */
  get meta (): FunctionMetadata {
    return this.raw.meta;
  }

  /**
   * @description The [[Method]] this extrinsic wraps
   */
  get method (): Method {
    return this.raw.method;
  }

  /**
   * @description The [[ExtrinsicSignature]]
   */
  get signature (): ExtrinsicSignature {
    return this.raw.signature;
  }

  /**
   * @description Add an [[ExtrinsicSignature]] to the extrinsic (already generated)
   */
  addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, nonce: AnyNumber, era?: Uint8Array): Extrinsic {
    this.raw.addSignature(signer, signature, nonce, era);

    return this;
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  sign (account: IKeyringPair, options: SignatureOptions): Extrinsic {
    this.raw.sign(account, options);

    return this;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq (other?: any): boolean {
    return this.raw.eq(other);
  }

  /**
   * @description Returns a hex string representation of the value
   */
  toHex (): string {
    return this.raw.toHex();
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): string {
    return this.raw.toJSON();
  }

  /**
   * @description Returns the string representation of the value
   */
  toString (): string {
    return this.raw.toString();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string {
    return 'Extrinsic';
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return this.raw.toU8a(isBare);
  }
}
