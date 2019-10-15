// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { FunctionMetadataLatest } from '../../interfaces/metadata/types';
import { Address, Balance, Call, ExtrinsicUnknown, ExtrinsicV1, ExtrinsicV2, ExtrinsicV3, Index } from '../../interfaces/runtime';
import { AnyU8a, ArgsDef, Codec, ExtrinsicPayloadValue, IExtrinsic, IHash, IKeyringPair, InterfaceTypes, SignatureOptions } from '../../types';

import { assert, isHex, isU8a, u8aConcat, u8aToHex, u8aToU8a } from '@polkadot/util';

import { createType, ClassOf } from '../../codec/create';
import Base from '../../codec/Base';
import Compact from '../../codec/Compact';
import { ExtrinsicValueV1 } from './v1/Extrinsic';
import { ExtrinsicValueV2 } from './v2/Extrinsic';
import { ExtrinsicValueV3 } from './v3/Extrinsic';
import ExtrinsicEra from './ExtrinsicEra';
import { BIT_SIGNED, BIT_UNSIGNED, DEFAULT_VERSION, UNMASK_VERSION } from './constants';

// We use this type internally to cast the raw value since ExtrinsicUnknown does not actually properly
// implement an Extrinsic - by design, it just throws on construction, allowing for overrides
type ExtrinsicVx = ExtrinsicV1 | ExtrinsicV2 | ExtrinsicV3;

type ExtrinsicValue = ExtrinsicValueV1 | ExtrinsicValueV2 | ExtrinsicValueV3;

interface CreateOptions {
  version?: number;
}

const VERSIONS: InterfaceTypes[] = [
  'ExtrinsicUnknown', // v0 is unknown
  'ExtrinsicV1',
  'ExtrinsicV2',
  'ExtrinsicV3'
];

function decodeU8a (value: Uint8Array, version: number): ExtrinsicVx | ExtrinsicUnknown {
  if (!value.length) {
    return ExtrinsicBase.newFromValue(new Uint8Array(), version);
  }

  const [offset, length] = Compact.decodeU8a(value);
  const total = offset + length.toNumber();

  assert(total <= value.length, `Extrinsic: required length less than remainder, expected at least ${total}, found ${value.length}`);

  const data = value.subarray(offset, total);

  return ExtrinsicBase.newFromValue(data.subarray(1), data[0]);
}

function decodeU8aLike (value: string | number[], version: number): ExtrinsicVx | ExtrinsicUnknown {
  // Instead of the block below, it should simply be:
  // return Extrinsic.decodeExtrinsic(hexToU8a(value as string));
  const u8a = u8aToU8a(value);

  // HACK 11 Jan 2019 - before https://github.com/paritytech/substrate/pull/1388
  // extrinsics didn't have the length, cater for both approaches. This is very
  // inconsistent with any other `Vec<u8>` implementation
  const [offset, length] = Compact.decodeU8a(u8a);
  const withPrefix = u8a.length === (offset + length.toNumber());

  return decodeU8a(
    withPrefix
      ? u8a
      : Compact.addLengthPrefix(u8a),
    version
  );
}

function decodeExtrinsic (value: ExtrinsicBase | ExtrinsicValue | AnyU8a | Call | undefined, version: number = DEFAULT_VERSION): ExtrinsicVx | ExtrinsicUnknown {
  if (Array.isArray(value) || isHex(value)) {
    return decodeU8aLike(value, version);
  } else if (isU8a(value)) {
    return decodeU8a(value, version);
  } else if (value instanceof ClassOf('Call')) {
    return ExtrinsicBase.newFromValue({ method: value }, version);
  }

  return ExtrinsicBase.newFromValue(value, version);
}

// The base for the extrinsic, it has no required IExtrinsic interfaces (and does not implement
// Call-like functionality), but rather just contains the actual data that we operate on. It only
// serves as a base for Extrinsic, allowing it to fully implement the required interfaces
class ExtrinsicBase extends Base<ExtrinsicVx | ExtrinsicUnknown> {
  public constructor (value: ExtrinsicBase | ExtrinsicValue | AnyU8a | Call | undefined, { version }: CreateOptions = {}) {
    super(decodeExtrinsic(value, version));
  }

  public static newFromValue (value: any, version: number): ExtrinsicVx | ExtrinsicUnknown {
    if (value instanceof ExtrinsicBase) {
      return value.raw;
    }

    const isSigned = (version & BIT_SIGNED) === BIT_SIGNED;
    const type = VERSIONS[version & UNMASK_VERSION] || VERSIONS[0];

    // we cast here since the VERSION definition is incredibly broad - we don't have a slice for
    // "only add extrinsic types", and more string definitions become unwieldy
    return createType(type, value, { isSigned, version }) as ExtrinsicVx;
  }

  /**
   * @description The era for this extrinsic
   */
  public get era (): ExtrinsicEra {
    return (this.raw as ExtrinsicVx).signature.era;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return this.toU8a().length;
  }

  /**
   * @description `true` id the extrinsic is signed
   */
  public get isSigned (): boolean {
    return (this.raw as ExtrinsicVx).signature.isSigned;
  }

  /**
   * @description The length of the actual data, excluding prefix
   */
  public get length (): number {
    return this.toU8a(true).length;
  }

  /**
   * @description The [[FunctionMetadataLatest]] that describes the extrinsic
   */
  public get meta (): FunctionMetadataLatest {
    return this.method.meta;
  }

  /**
   * @description The [[Call]] this extrinsic wraps
   */
  public get method (): Call {
    return (this.raw as ExtrinsicVx).method;
  }

  /**
   * @description The nonce for this extrinsic
   */
  public get nonce (): Compact<Index> {
    return (this.raw as ExtrinsicVx).signature.nonce;
  }

  /**
   * @description The [[ExtrinsicSignature]]
   */
  public get signature (): IHash {
    return (this.raw as ExtrinsicVx).signature.signature;
  }

  /**
   * @description The [[Address]] that signed
   */
  public get signer (): Address {
    return (this.raw as ExtrinsicVx).signature.signer;
  }

  /**
   * @description Forwards compat
   */
  public get tip (): Compact<Balance> {
    return (this.raw as ExtrinsicVx).signature.tip;
  }

  /**
   * @description Returns the raw transaction version (not flagged with signing information)
  */
  public get type (): number {
    return (this.raw as ExtrinsicVx).version;
  }

  /**
   * @description Returns the encoded version flag
  */
  public get version (): number {
    return this.type | (this.isSigned ? BIT_SIGNED : BIT_UNSIGNED);
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
export default class Extrinsic extends ExtrinsicBase implements IExtrinsic {
  /**
   * @description The arguments passed to for the call, exposes args so it is compatible with [[Call]]
   */
  public get args (): Codec[] {
    return this.method.args;
  }

  /**
   * @description The argument definitions, compatible with [[Call]]
   */
  public get argsDef (): ArgsDef {
    return this.method.argsDef;
  }

  /**
   * @description The actual `[sectionIndex, methodIndex]` as used in the Call
   */
  public get callIndex (): Uint8Array {
    return this.method.callIndex;
  }

  /**
   * @description The actual data for the Call
   */
  public get data (): Uint8Array {
    return this.method.data;
  }

  /**
   * @description `true` is method has `Origin` argument (compatibility with [Call])
   */
  public get hasOrigin (): boolean {
    return this.method.hasOrigin;
  }

  /**
   * @description Injects an already-generated signature into the extrinsic
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: ExtrinsicPayloadValue | Uint8Array | string): Extrinsic {
    (this.raw as ExtrinsicVx).addSignature(signer, signature, payload);

    return this;
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  public sign (account: IKeyringPair, options: SignatureOptions): Extrinsic {
    (this.raw as ExtrinsicVx).sign(account, options);

    return this;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Extrinsic';
  }
}
