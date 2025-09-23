// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MultiLocation } from '@polkadot/types/interfaces';
import type { HexString } from '@polkadot/util/types';
import type { EcdsaSignature, Ed25519Signature, ExtrinsicEra, ExtrinsicSignature, Sr25519Signature } from '../../interfaces/extrinsics/index.js';
import type { Address, Call, Hash } from '../../interfaces/runtime/index.js';
import type { ExtrinsicPayloadValue, ICompact, IExtrinsicSignature, IKeyringPair, INumber, IOption, Registry, SignatureOptions } from '../../types/index.js';
import type { ExtrinsicSignatureOptions } from '../types.js';
import type { VerifySignature } from './GeneralExtrinsic.js';

import { Struct } from '@polkadot/types-codec';
import { isU8a, isUndefined, objectProperties, objectSpread, stringify, u8aConcat, u8aToHex } from '@polkadot/util';

import { EMPTY_U8A } from '../constants.js';
import { GenericExtrinsicPayloadV5 } from './ExtrinsicPayload.js';

// Ensure we have enough data for all types of signatures
const FAKE_SIGNATURE = new Uint8Array(256).fill(1);

function toAddress (registry: Registry, address: Address | Uint8Array | string): Address {
  return registry.createTypeUnsafe('Address', [isU8a(address) ? u8aToHex(address) : address]);
}

/**
 * @name GenericExtrinsicSignatureV5
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */
export class GenericExtrinsicSignatureV5 extends Struct implements IExtrinsicSignature {
  #signKeys: string[];

  constructor (registry: Registry, value?: GenericExtrinsicSignatureV5 | Uint8Array, { isSigned }: ExtrinsicSignatureOptions = {}) {
    const signTypes = registry.getTransactionExtensionTypes();

    console.log('in ExtrinsicSignature', value, signTypes);

    super(
      registry,
      objectSpread(
        { transactionExtensionVersion: 'u8' },
        signTypes
      ),
      GenericExtrinsicSignatureV5.decodeExtrinsicSignature(value, isSigned)
    );

    this.#signKeys = Object.keys(signTypes);

    objectProperties(this, this.#signKeys, (k) => this.get(k));
  }

  /** @internal */
  public static decodeExtrinsicSignature (value?: GenericExtrinsicSignatureV5 | Uint8Array, isSigned = false): GenericExtrinsicSignatureV5 | Uint8Array {
    if (!value) {
      return EMPTY_U8A;
    } else if (value instanceof GenericExtrinsicSignatureV5) {
      return value;
    }

    console.log('decoding signature here', isSigned, value.toString());

    return isSigned
      ? value
      : EMPTY_U8A;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override get encodedLength (): number {
    return this.isSigned
      ? super.encodedLength
      : 0;
  }

  /**
   * @description `true` if the signature is valid
   */
  public get isSigned (): boolean {
    return !this.signature.isEmpty;
  }

  /**
   * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
   */
  public get era (): ExtrinsicEra {
    return this.getT('era');
  }

  /**
   * @description The [[Index]] for the signature
   */
  public get nonce (): ICompact<INumber> {
    return this.getT('nonce');
  }

  /**
   * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
   */
  public get signature (): EcdsaSignature | Ed25519Signature | Sr25519Signature {
    // the second case here is when we don't have an enum signature, treat as raw
    return (this.multiSignature.value || this.multiSignature) as Sr25519Signature;
  }

  /**
   * @description The raw [[ExtrinsicSignature]]
   */
  public get multiSignature (): ExtrinsicSignature {
    const verifySignature = this.get('VerifySignature') as VerifySignature;

    if (verifySignature.isSigned) {
      return verifySignature.asSigned.signature as unknown as ExtrinsicSignature;
    }

    return this.registry.createType('ExtrinsicSignature');
  }

  /**
   * @description The [[Address]] that signed
   */
  public get signer (): Address {
    const verifySignature = this.get('VerifySignature') as VerifySignature;

    if (verifySignature.isSigned) {
      return verifySignature.asSigned.account;
    }

    return this.registry.createType('Address');
  }

  /**
   * @description The [[Balance]] tip
   */
  public get tip (): ICompact<INumber> {
    return this.getT('tip');
  }

  /**
   * @description The [[u32]] or [[MultiLocation]] assetId
   */
  public get assetId (): IOption<INumber | MultiLocation> {
    return this.getT('assetId');
  }

  /**
   * @description the [[u32]] mode
   */
  public get mode (): INumber {
    return this.getT('mode');
  }

  /**
   * @description The (optional)  [[Hash]] for the metadata proof
   */
  public get metadataHash (): IOption<Hash> {
    return this.getT('metadataHash');
  }

  /**
   * @description The [[u8]] for the TransactionExtension version
   */
  public get transactionExtensionVersion (): INumber {
    return this.getT('transactionExtensionVersion');
  }

  /**
   * [Disabled for ExtrinsicV5]
   */
  protected _injectSignature (signer: Address, signature: ExtrinsicSignature, payload: GenericExtrinsicPayloadV5): IExtrinsicSignature {
    for (let i = 0, count = this.#signKeys.length; i < count; i++) {
      const k = this.#signKeys[i];
      const v = payload.get(k);

      if (!isUndefined(v)) {
        this.set(k, v);
      }
    }

     this.registry.createType('PalletVerifySignatureExtensionVerifySignature', {
      Signed: {
        account: signer.toHex(),
        signature
      }
    });


    return this;
  }

  /**
   * @description Adds a raw signature
   *
   * [Disabled for ExtrinsicV5]
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | HexString, payload: ExtrinsicPayloadValue | Uint8Array | HexString): IExtrinsicSignature {
    return this._injectSignature(
      toAddress(this.registry, signer),
      this.registry.createTypeUnsafe('ExtrinsicSignature', [signature]),
      new GenericExtrinsicPayloadV5(this.registry, payload)
    );
  }

  /**
   * @description Creates a payload from the supplied options
   */
  public createPayload (method: Call, options: SignatureOptions): GenericExtrinsicPayloadV5 {
    // Create payload with all transaction extensions except VerifySignature
    const payloadData = {
      assetId: options.assetId,
      blockHash: options.blockHash,
      era: options.era?.toHex() || '0x00',
      genesisHash: options.genesisHash,
      metadataHash: options.metadataHash,
      method: method.toHex(),
      mode: options.mode,
      nonce: options.nonce,
      specVersion: options.runtimeVersion.specVersion,
      tip: options.tip || 0,
      transactionVersion: options.runtimeVersion.transactionVersion
    };

    // Encode the payload data
    const methodBytes = this.registry.createType('Bytes', payloadData.method);
    const eraBytes = this.registry.createType('ExtrinsicEra', payloadData.era);
    const nonceBytes = this.registry.createType('Compact<u32>', payloadData.nonce);
    const tipBytes = this.registry.createType('Compact<u128>', payloadData.tip);
    const txVersionBytes = this.registry.createType('u32', payloadData.transactionVersion);
    const specVersionBytes = this.registry.createType('u32', payloadData.specVersion);
    const genesisHashBytes = this.registry.createType('Hash', payloadData.genesisHash);
    const blockHashBytes = this.registry.createType('Hash', payloadData.blockHash);

    return new GenericExtrinsicPayloadV5(this.registry, objectSpread<ExtrinsicPayloadValue>({}, u8aConcat(
      methodBytes.toU8a(true),
      eraBytes.toU8a(),
      nonceBytes.toU8a(),
      tipBytes.toU8a(),
      txVersionBytes.toU8a(),
      specVersionBytes.toU8a(),
      genesisHashBytes.toU8a(),
      blockHashBytes.toU8a()
    )));
  }

  /**
   * @description Generate a payload and applies the signature from a keypair
   *
   * [Disabled for ExtrinsicV5]
   */
  public sign (method: Call, account: IKeyringPair, options: SignatureOptions): IExtrinsicSignature {
    if (!account?.addressRaw) {
      throw new Error(`Expected a valid keypair for signing, found ${stringify(account)}`);
    }

    const payload = this.createPayload(method, options);

    return this._injectSignature(
      toAddress(this.registry, account.addressRaw),
      this.registry.createType('ExtrinsicSignature', payload.sign(account)),
      payload
    );
  }

  /**
   * @description Generate a payload and applies a fake signature
   *
   * [Disabled for ExtrinsicV5]
   */
  public signFake (method: Call, address: Address | Uint8Array | string, options: SignatureOptions): IExtrinsicSignature {
    if (!address) {
      throw new Error(`Expected a valid address for signing, found ${stringify(address)}`);
    }

    const payload = this.createPayload(method, options);

    return this._injectSignature(
      toAddress(this.registry, address),
      this.registry.createTypeUnsafe('ExtrinsicSignature', [FAKE_SIGNATURE]),
      payload
    );
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public override toU8a (isBare?: boolean): Uint8Array {
    return this.isSigned
      ? super.toU8a(isBare)
      : EMPTY_U8A;
  }
}
