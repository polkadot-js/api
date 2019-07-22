// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a, ArgsDef, Codec, ExtrinsicPayloadValue, IExtrinsic, IHash, IKeyringPair, SignatureOptions } from '../../types';

import { assert, isHex, isU8a, u8aConcat, u8aToHex, u8aToU8a } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import Base from '../../codec/Base';
import Compact from '../../codec/Compact';
import { FunctionMetadata } from '../../Metadata/v6/Calls';
import NonceCompact from '../../type/NonceCompact';
import Address from '../Address';
import BalanceCompact from '../BalanceCompact';
import Method from '../Method';
import Hash from '../Hash';
import ExtrinsicV1, { ExtrinsicValueV1 } from './v1/Extrinsic';
import ExtrinsicV2, { ExtrinsicValueV2 } from './v2/Extrinsic';
import ExtrinsicEra from './ExtrinsicEra';
import { BIT_SIGNED, BIT_UNSIGNED, DEFAULT_VERSION, UNMASK_VERSION } from './constants';

type ExtrinsicValue = ExtrinsicValueV1 | ExtrinsicValueV2;

interface ExtrinsicOptions {
  version?: number;
}

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
export default class Extrinsic extends Base<ExtrinsicV1 | ExtrinsicV2> implements IExtrinsic {
  public constructor (value: Extrinsic | ExtrinsicValue | AnyU8a | Method | undefined, { version }: ExtrinsicOptions = {}) {
    super(Extrinsic.decodeExtrinsic(value, version));
  }

  private static newFromValue (value: any, version: number): ExtrinsicV1 | ExtrinsicV2 {
    if (value instanceof Extrinsic) {
      return value.raw;
    }

    const isSigned = (version & BIT_SIGNED) === BIT_SIGNED;
    const type = version & UNMASK_VERSION;

    switch (type) {
      case 1: return new ExtrinsicV1(value, { isSigned });
      case 2: return new ExtrinsicV2(value, { isSigned });
      default: throw new Error(`Unsupported extrinsic version ${type}`);
    }
  }

  public static decodeExtrinsic (value: Extrinsic | ExtrinsicValue | AnyU8a | Method | undefined, version: number = DEFAULT_VERSION): ExtrinsicV1 | ExtrinsicV2 {
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
          : Compact.addLengthPrefix(u8a),
        version
      );
    } else if (isU8a(value)) {
      if (!value.length) {
        return Extrinsic.newFromValue(new Uint8Array(), version);
      }

      const [offset, length] = Compact.decodeU8a(value);
      const total = offset + length.toNumber();

      assert(total <= value.length, `Extrinsic: required length less than remainder, expected at least ${total}, found ${value.length}`);

      return Extrinsic.decodeU8a(value.subarray(offset, total));
    } else if (value instanceof Method) {
      return Extrinsic.newFromValue({ method: value }, version);
    }

    return Extrinsic.newFromValue(value, version);
  }

  private static decodeU8a (value: Uint8Array): ExtrinsicV1 | ExtrinsicV2 {
    return Extrinsic.newFromValue(value.subarray(1), value[0]);
  }

  /**
   * @description The arguments passed to for the call, exposes args so it is compatible with [[Method]]
   */
  public get args (): Codec[] {
    return this.method.args;
  }

  /**
   * @description Thge argument defintions, compatible with [[Method]]
   */
  public get argsDef (): ArgsDef {
    return this.method.argsDef;
  }

  /**
   * @description The actual `[sectionIndex, methodIndex]` as used in the Method
   */
  public get callIndex (): Uint8Array {
    return this.method.callIndex;
  }

  /**
   * @description The actual data for the Method
   */
  public get data (): Uint8Array {
    return this.method.data;
  }

  /**
   * @description The era for thios extrinsic
   */
  public get era (): ExtrinsicEra {
    return this.raw.signature.era;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return this.toU8a().length;
  }

  /**
   * @description Convernience function, encodes the extrinsic and returns the actual hash
   */
  public get hash (): Hash {
    return new Hash(
      blake2AsU8a(this.toU8a(), 256)
    );
  }

  /**
   * @description `true` is method has `Origin` argument (compatibility with [[Method]])
   */
  public get hasOrigin (): boolean {
    return this.method.hasOrigin;
  }

  /**
   * @description `true` id the extrinsic is signed
   */
  public get isSigned (): boolean {
    return this.raw.signature.isSigned;
  }

  /**
   * @description The length of the actual data, excluding prefix
   */
  public get length (): number {
    return this.toU8a(true).length;
  }

  /**
   * @description The [[FunctionMetadata]] that describes the extrinsic
   */
  public get meta (): FunctionMetadata {
    return this.method.meta;
  }

  /**
   * @description The [[Method]] this extrinsic wraps
   */
  public get method (): Method {
    return this.raw.method;
  }

  /**
   * @description The nonce for this extrinsic
   */
  public get nonce (): NonceCompact {
    return this.raw.signature.nonce;
  }

  /**
   * @description The [[ExtrinsicSignature]]
   */
  public get signature (): IHash {
    return this.raw.signature.signature;
  }

  /**
   * @description The [[Address]] that signed
   */
  public get signer (): Address {
    return this.raw.signature.signer;
  }

  /**
   * @description Forwards compat
   */
  public get tip (): BalanceCompact {
    return this.raw.signature.tip;
  }

  /**
   * @description Returns the raw transaction version (not flagged with signing information)
  */
  public get type (): number {
    return this.raw.version;
  }

  /**
   * @description Returns the encoded version flag
  */
  public get version (): number {
    return this.type | (this.isSigned ? BIT_SIGNED : BIT_UNSIGNED);
  }

  /**
   * @description Add an [[ExtrinsicSignature]] to the extrinsic (already generated)
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, ...args: [ExtrinsicPayloadValue | Uint8Array | string]): Extrinsic {
    // FIXME Support for current extensions where 2 values are being passed in here, i.e.
    //   addSignature(signer, signature, nonce, era);
    // The above signature should be changed to the correct format in the next cycle, i.e.
    //   payload: ExtrinsicPayloadValue | Uint8Array | string
    let payload = args[0];

    // @ts-ignore
    if (args.length === 2) {
      payload = {
        // @ts-ignore
        era: args[1] as string,
        method: this.method.toHex(),
        nonce: args[0] as string,
        tip: 0
      };
    }

    this.raw.addSignature(signer, signature, payload);

    return this;
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  public sign (account: IKeyringPair, options: SignatureOptions): Extrinsic {
    this.raw.sign(account, options);

    return this;
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): string {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): string {
    return this.toHex();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Extrinsic';
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    const encoded = u8aConcat(new Uint8Array([this.version]), this.raw.toU8a(isBare));

    return isBare
      ? encoded
      : Compact.addLengthPrefix(encoded);
  }
}
