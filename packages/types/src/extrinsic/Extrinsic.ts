// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyJson, AnyTuple, AnyU8a, ArgsDef, IMethod, Inspect, IOption } from '@polkadot/types-codec/types';
import type { HexString } from '@polkadot/util/types';
import type { EcdsaSignature, Ed25519Signature, ExtrinsicUnknown, ExtrinsicV4, Sr25519Signature } from '../interfaces/extrinsics/index.js';
import type { FunctionMetadataLatest } from '../interfaces/metadata/index.js';
import type { Address, Call, CodecHash, Hash } from '../interfaces/runtime/index.js';
import type { MultiLocation } from '../interfaces/types.js';
import type { CallBase, ExtrinsicPayloadValue, ICompact, IExtrinsic, IKeyringPair, INumber, Registry, SignatureOptions } from '../types/index.js';
import type { GenericExtrinsicEra } from './ExtrinsicEra.js';
import type { ExtrinsicValueV4 } from './v4/Extrinsic.js';

import { AbstractBase } from '@polkadot/types-codec';
import { compactAddLength, compactFromU8a, compactToU8a, isHex, isU8a, objectProperty, objectSpread, u8aConcat, u8aToHex, u8aToU8a } from '@polkadot/util';

import { EXTRINSIC_VERSION as LATEST_EXTRINSIC_VERSION } from './v4/Extrinsic.js';
import { BIT_SIGNED, BIT_UNSIGNED, DEFAULT_VERSION, UNMASK_VERSION } from './constants.js';

interface CreateOptions {
  version?: number;
}

// NOTE The following 2 types, as well as the VERSION structure and the latest export
// is to be changed with the addition of a new extrinsic version

type ExtrinsicVx = ExtrinsicV4;
type ExtrinsicValue = ExtrinsicValueV4;

const VERSIONS = [
  'ExtrinsicUnknown', // v0 is unknown
  'ExtrinsicUnknown',
  'ExtrinsicUnknown',
  'ExtrinsicUnknown',
  'ExtrinsicV4'
];

export { LATEST_EXTRINSIC_VERSION };

/** @internal */
function newFromValue (registry: Registry, value: any, version: number): ExtrinsicVx | ExtrinsicUnknown {
  if (value instanceof GenericExtrinsic) {
    return value.unwrap();
  }

  const isSigned = (version & BIT_SIGNED) === BIT_SIGNED;
  const type = VERSIONS[version & UNMASK_VERSION] || VERSIONS[0];

  // we cast here since the VERSION definition is incredibly broad - we don't have a
  // slice for "only add extrinsic types", and more string definitions become unwieldy
  return registry.createTypeUnsafe(type, [value, { isSigned, version }]);
}

/** @internal */
function decodeExtrinsic (registry: Registry, value?: GenericExtrinsic | ExtrinsicValue | AnyU8a | Call, version: number = DEFAULT_VERSION): ExtrinsicVx | ExtrinsicUnknown {
  if (isU8a(value) || Array.isArray(value) || isHex(value)) {
    return decodeU8a(registry, u8aToU8a(value), version);
  } else if (value instanceof registry.createClassUnsafe('Call')) {
    return newFromValue(registry, { method: value }, version);
  }

  return newFromValue(registry, value, version);
}

/** @internal */
function decodeU8a (registry: Registry, value: Uint8Array, version: number): ExtrinsicVx | ExtrinsicUnknown {
  if (!value.length) {
    return newFromValue(registry, new Uint8Array(), version);
  }

  const [offset, length] = compactFromU8a(value);
  const total = offset + length.toNumber();

  if (total > value.length) {
    throw new Error(`Extrinsic: length less than remainder, expected at least ${total}, found ${value.length}`);
  }

  const data = value.subarray(offset, total);

  return newFromValue(registry, data.subarray(1), data[0]);
}

abstract class ExtrinsicBase<A extends AnyTuple> extends AbstractBase<ExtrinsicVx | ExtrinsicUnknown> {
  constructor (registry: Registry, value: ExtrinsicV4 | ExtrinsicUnknown, initialU8aLength?: number) {
    super(registry, value, initialU8aLength);

    const signKeys = Object.keys(registry.getSignedExtensionTypes());
    const getter = (key: string) => this.inner.signature[key as 'signer'];

    // This is on the abstract class, ensuring that hasOwnProperty operates
    // correctly, i.e. it needs to be on the base class exposing it
    for (let i = 0, count = signKeys.length; i < count; i++) {
      objectProperty(this, signKeys[i], getter);
    }
  }

  /**
   * @description The arguments passed to for the call, exposes args so it is compatible with [[Call]]
   */
  public get args (): A {
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
  public get era (): GenericExtrinsicEra {
    return this.inner.signature.era;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override get encodedLength (): number {
    return this.toU8a().length;
  }

  /**
   * @description `true` id the extrinsic is signed
   */
  public get isSigned (): boolean {
    return this.inner.signature.isSigned;
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
  public get method (): CallBase<A> {
    return this.inner.method as unknown as CallBase<A>;
  }

  /**
   * @description The nonce for this extrinsic
   */
  public get nonce (): ICompact<INumber> {
    return this.inner.signature.nonce;
  }

  /**
   * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
   */
  public get signature (): EcdsaSignature | Ed25519Signature | Sr25519Signature {
    return this.inner.signature.signature;
  }

  /**
   * @description The [[Address]] that signed
   */
  public get signer (): Address {
    return this.inner.signature.signer;
  }

  /**
   * @description Forwards compat
   */
  public get tip (): ICompact<INumber> {
    return this.inner.signature.tip;
  }

  /**
   * @description Forward compat
   */
  public get assetId (): IOption<INumber | MultiLocation> {
    return this.inner.signature.assetId;
  }

  /**
   * @description Forward compat
   */
  public get metadataHash (): IOption<Hash> {
    return this.inner.signature.metadataHash;
  }

  /**
   * @description Forward compat
   */
  public get mode (): INumber {
    return this.inner.signature.mode;
  }

  /**
   * @description Returns the raw transaction version (not flagged with signing information)
  */
  public get type (): number {
    return this.inner.version;
  }

  public override get inner (): ExtrinsicVx {
    return this.unwrap();
  }

  /**
   * @description Returns the encoded version flag
  */
  public get version (): number {
    return this.type | (this.isSigned ? BIT_SIGNED : BIT_UNSIGNED);
  }

  /**
   * @description Checks if the source matches this in type
   */
  public is (other: IMethod<AnyTuple>): other is IMethod<A> {
    return this.method.is(other);
  }

  public override unwrap (): ExtrinsicVx {
    return super.unwrap() as ExtrinsicVx;
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
export class GenericExtrinsic<A extends AnyTuple = AnyTuple> extends ExtrinsicBase<A> implements IExtrinsic<A> {
  #hashCache?: CodecHash | undefined;

  static LATEST_EXTRINSIC_VERSION = LATEST_EXTRINSIC_VERSION;

  constructor (registry: Registry, value?: GenericExtrinsic | ExtrinsicValue | AnyU8a | Call, { version }: CreateOptions = {}) {
    super(registry, decodeExtrinsic(registry, value, version));
  }

  /**
   * @description returns a hash of the contents
   */
  public override get hash (): CodecHash {
    if (!this.#hashCache) {
      this.#hashCache = super.hash;
    }

    return this.#hashCache;
  }

  /**
   * @description Injects an already-generated signature into the extrinsic
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | HexString, payload: ExtrinsicPayloadValue | Uint8Array | HexString): GenericExtrinsic<A> {
    this.inner.addSignature(signer, signature, payload);
    this.#hashCache = undefined;

    return this;
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  override inspect (): Inspect {
    const encoded = u8aConcat(...this.toU8aInner());

    return {
      inner: this.isSigned
        ? this.inner.inspect().inner
        : this.inner.method.inspect().inner,
      outer: [compactToU8a(encoded.length), new Uint8Array([this.version])]
    };
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  public sign (account: IKeyringPair, options: SignatureOptions): GenericExtrinsic<A> {
    this.inner.sign(account, options);
    this.#hashCache = undefined;

    return this;
  }

  /**
   * @describe Adds a fake signature to the extrinsic
   */
  public signFake (signer: Address | Uint8Array | string, options: SignatureOptions): GenericExtrinsic<A> {
    this.inner.signFake(signer, options);
    this.#hashCache = undefined;

    return this;
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public override toHex (isBare?: boolean): HexString {
    return u8aToHex(this.toU8a(isBare));
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public override toHuman (isExpanded?: boolean, disableAscii?: boolean): AnyJson {
    return objectSpread<Record<string, AnyJson>>(
      {},
      {
        isSigned: this.isSigned,
        method: this.method.toHuman(isExpanded, disableAscii)
      },
      this.isSigned
        ? {
          assetId: this.assetId ? this.assetId.toHuman(isExpanded, disableAscii) : null,
          era: this.era.toHuman(isExpanded, disableAscii),
          metadataHash: this.metadataHash ? this.metadataHash.toHex() : null,
          mode: this.mode.toHuman(),
          nonce: this.nonce.toHuman(isExpanded, disableAscii),
          signature: this.signature.toHex(),
          signer: this.signer.toHuman(isExpanded, disableAscii),
          tip: this.tip.toHuman(isExpanded, disableAscii)
        }
        : null
    );
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public override toJSON (): string {
    return this.toHex();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return 'Extrinsic';
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value is not length-prefixed
   */
  public override toU8a (isBare?: boolean): Uint8Array {
    const encoded = u8aConcat(...this.toU8aInner());

    return isBare
      ? encoded
      : compactAddLength(encoded);
  }

  public toU8aInner (): Uint8Array[] {
    // we do not apply bare to the internal values, rather this only determines out length addition,
    // where we strip all lengths this creates an extrinsic that cannot be decoded
    return [
      new Uint8Array([this.version]),
      this.inner.toU8a()
    ];
  }
}
