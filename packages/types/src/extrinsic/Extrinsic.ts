// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { FunctionMetadataLatest } from '../interfaces/metadata/types';
import { EcdsaSignature, Ed25519Signature, ExtrinsicUnknown, ExtrinsicV4, Sr25519Signature } from '../interfaces/extrinsics';
import { Address, Balance, Call, Index } from '../interfaces/runtime';
import { AnyJson, AnyU8a, ArgsDef, Codec, ExtrinsicPayloadValue, IExtrinsic, IKeyringPair, InterfaceTypes, Registry, SignatureOptions } from '../types';

import { assert, isHex, isU8a, u8aConcat, u8aToHex, u8aToU8a } from '@polkadot/util';

import Base from '../codec/Base';
import Compact from '../codec/Compact';
import { ExtrinsicValueV4 } from './v4/Extrinsic';
import ExtrinsicEra from './ExtrinsicEra';
import { BIT_SIGNED, BIT_UNSIGNED, DEFAULT_VERSION, UNMASK_VERSION } from './constants';

interface CreateOptions {
  version?: number;
}

// NOTE The following 2 types, as well as the VERSION structure and the latest export
// is to be changed with the addition of a new extrinsic version

type ExtrinsicVx = ExtrinsicV4;
type ExtrinsicValue = ExtrinsicValueV4;

const VERSIONS: (keyof InterfaceTypes)[] = [
  'ExtrinsicUnknown', // v0 is unknown
  'ExtrinsicUnknown',
  'ExtrinsicUnknown',
  'ExtrinsicUnknown',
  'ExtrinsicV4'
];

export { TRANSACTION_VERSION as LATEST_EXTRINSIC_VERSION } from './v4/Extrinsic';

abstract class ExtrinsicBase extends Base<ExtrinsicVx | ExtrinsicUnknown> {
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
   * @description The era for this extrinsic
   */
  public get era (): ExtrinsicEra {
    return (this._raw as ExtrinsicVx).signature.era;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return this.toU8a().length;
  }

  /**
   * @description `true` is method has `Origin` argument (compatibility with [Call])
   */
  public get hasOrigin (): boolean {
    return this.method.hasOrigin;
  }

  /**
   * @description `true` id the extrinsic is signed
   */
  public get isSigned (): boolean {
    return (this._raw as ExtrinsicVx).signature.isSigned;
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
    return (this._raw as ExtrinsicVx).method;
  }

  /**
   * @description The nonce for this extrinsic
   */
  public get nonce (): Compact<Index> {
    return (this._raw as ExtrinsicVx).signature.nonce;
  }

  /**
   * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
   */
  public get signature (): EcdsaSignature | Ed25519Signature | Sr25519Signature {
    return (this._raw as ExtrinsicVx).signature.signature;
  }

  /**
   * @description The [[Address]] that signed
   */
  public get signer (): Address {
    return (this._raw as ExtrinsicVx).signature.signer;
  }

  /**
   * @description Forwards compat
   */
  public get tip (): Compact<Balance> {
    return (this._raw as ExtrinsicVx).signature.tip;
  }

  /**
   * @description Returns the raw transaction version (not flagged with signing information)
  */
  public get type (): number {
    return (this._raw as ExtrinsicVx).version;
  }

  /**
   * @description Returns the encoded version flag
  */
  public get version (): number {
    return this.type | (this.isSigned ? BIT_SIGNED : BIT_UNSIGNED);
  }
}

/**
 * @name GenericExtrinsic
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
  constructor (registry: Registry, value: Extrinsic | ExtrinsicValue | AnyU8a | Call | undefined, { version }: CreateOptions = {}) {
    super(registry, Extrinsic._decodeExtrinsic(registry, value, version));
  }

  /** @internal */
  private static _newFromValue (registry: Registry, value: any, version: number): ExtrinsicVx | ExtrinsicUnknown {
    if (value instanceof Extrinsic) {
      return value._raw;
    }

    const isSigned = (version & BIT_SIGNED) === BIT_SIGNED;
    const type = VERSIONS[version & UNMASK_VERSION] || VERSIONS[0];

    // we cast here since the VERSION definition is incredibly broad - we don't have a
    // slice for "only add extrinsic types", and more string definitions become unwieldy
    return registry.createType(type, value, { isSigned, version }) as ExtrinsicVx;
  }

  /** @internal */
  private static _decodeExtrinsic (registry: Registry, value: Extrinsic | ExtrinsicValue | AnyU8a | Call | undefined, version: number = DEFAULT_VERSION): ExtrinsicVx | ExtrinsicUnknown {
    if (isU8a(value) || Array.isArray(value) || isHex(value)) {
      return Extrinsic._decodeU8a(registry, u8aToU8a(value), version);
    } else if (value instanceof registry.createClass('Call')) {
      return Extrinsic._newFromValue(registry, { method: value }, version);
    }

    return Extrinsic._newFromValue(registry, value, version);
  }

  /** @internal */
  private static _decodeU8a (registry: Registry, value: Uint8Array, version: number): ExtrinsicVx | ExtrinsicUnknown {
    if (!value.length) {
      return Extrinsic._newFromValue(registry, new Uint8Array(), version);
    }

    const [offset, length] = Compact.decodeU8a(value);
    const total = offset + length.toNumber();

    assert(total <= value.length, `Extrinsic: length less than remainder, expected at least ${total}, found ${value.length}`);

    const data = value.subarray(offset, total);

    return Extrinsic._newFromValue(registry, data.subarray(1), data[0]);
  }

  /**
   * @description Injects an already-generated signature into the extrinsic
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: ExtrinsicPayloadValue | Uint8Array | string): Extrinsic {
    (this._raw as ExtrinsicVx).addSignature(signer, signature, payload);

    return this;
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  public sign (account: IKeyringPair, options: SignatureOptions): Extrinsic {
    (this._raw as ExtrinsicVx).sign(account, options);

    return this;
  }

  /**
   * @describe Adds a fake signature to the extrinsic
   */
  public signFake (signer: Address | Uint8Array | string, options: SignatureOptions): Extrinsic {
    (this._raw as ExtrinsicVx).signFake(signer, options);

    return this;
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (isBare?: boolean): string {
    return u8aToHex(this.toU8a(isBare));
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (isExpanded?: boolean): AnyJson {
    return {
      isSigned: this.isSigned,
      method: this.method.toHuman(isExpanded),
      ...(this.isSigned
        ? {
          era: this.era.toHuman(isExpanded),
          nonce: this.nonce.toHuman(isExpanded),
          signature: this.signature.toHex(),
          signer: this.signer.toHuman(isExpanded),
          tip: this.tip.toHuman(isExpanded)
        }
        : {}
      )
    };
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
   * @param isBare true when the value is not length-prefixed
   */
  public toU8a (isBare?: boolean): Uint8Array {
    // we do not apply bare to the internal values, rather this only determines out length addition,
    // where we strip all lengths this creates an extrinsic that cannot be decoded
    const encoded = u8aConcat(new Uint8Array([this.version]), this._raw.toU8a());

    return isBare
      ? encoded
      : Compact.addLengthPrefix(encoded);
  }
}
