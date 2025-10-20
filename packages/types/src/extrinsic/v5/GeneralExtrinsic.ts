// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Address, Call, EcdsaSignature, Ed25519Signature, ExtrinsicEra, Hash, MultiLocation, Sr25519Signature } from '@polkadot/types/interfaces';
import type { AnyNumber, AnyU8a, ICompact, IExtrinsicEra, INumber, IOption, Registry } from '@polkadot/types/types';
import type { AnyTuple, IMethod } from '@polkadot/types-codec/types';
import type { HexString } from '@polkadot/util/types';
import type { ExtrinsicPayloadValue, IKeyringPair, SignatureOptions } from '../../types/index.js';

import { Enum, Struct } from '@polkadot/types-codec';
import { compactAddLength, compactFromU8a, isHex, isObject, isU8a, objectSpread, u8aConcat, u8aToHex, u8aToU8a } from '@polkadot/util';

import { EMPTY_U8A, UNMASK_VERSION } from '../constants.js';
import { sign } from '../util.js';

function toAddress (registry: Registry, address: Address | Uint8Array | string): Address {
  return registry.createTypeUnsafe('Address', [isU8a(address) ? u8aToHex(address) : address]);
}

interface TransactionExtensionValues {
  era: AnyU8a | IExtrinsicEra;
  nonce: AnyNumber;
  tip: AnyNumber;
  transactionVersion: AnyNumber;
  assetId?: HexString;
  mode?: AnyNumber;
  metadataHash?: AnyU8a;
}

interface GeneralExtrinsicPayloadValues extends TransactionExtensionValues {
  method: AnyU8a | IMethod<AnyTuple>;
}

interface GeneralExtrinsicValue {
  payload?: GeneralExtrinsicPayloadValues;
  transactionExtensionVersion?: number;
}

interface VerifySignature extends Enum {
    isSigned: boolean;
    asSigned: {
      signature: Ed25519Signature | Sr25519Signature | EcdsaSignature;
      account: Address;
    } & Struct;
    isDisabled: boolean;
    type: 'Signed' | 'Disabled';
  }

function decodeU8a (u8a: Uint8Array) {
  if (!u8a.length) {
    return new Uint8Array();
  }

  const [offset, length] = compactFromU8a(u8a);
  const total = offset + length.toNumber();

  if (total > u8a.length) {
    throw new Error(`Extrinsic: length less than remainder, expected at least ${total}, found ${u8a.length}`);
  }

  const data = u8a.subarray(offset, total);

  // 69 denotes 0b01000101 which is the version and preamble for this Extrinsic
  if (data[0] !== 69) {
    throw new Error(`Extrinsic: incorrect version for General Transactions, expected 5, found ${data[0] & UNMASK_VERSION}`);
  }

  return data.subarray(1);
}

export class GeneralExtrinsic extends Struct{
  #version: number;
  #preamble: number;

  constructor (registry: Registry, value?: GeneralExtrinsicValue | Uint8Array | HexString, opt?: { version: number }) {
    const extTypes = registry.getTransactionExtensionTypes();
    console.log("in general")

    super(registry, objectSpread(
      {
        transactionExtensionVersion: 'u8'
      },
      extTypes,
      {
        method: 'Call'
      }
    ), GeneralExtrinsic.decodeExtrinsic(registry, value));

    this.#version = opt?.version || 0b00000101;
    this.#preamble = 0b01000000;
  }

  public static decodeExtrinsic (registry: Registry, value?: GeneralExtrinsicValue | Uint8Array | HexString) {
    if (!value) {
      return EMPTY_U8A;
    } else if (value instanceof GeneralExtrinsic) {
      return value;
    } else if (isU8a(value) || Array.isArray(value) || isHex(value)) {
      return decodeU8a(u8aToU8a(value));
    } else if (isObject(value)) {
      const { payload, transactionExtensionVersion } = value;

      return objectSpread(payload || {}, {
        transactionExtensionVersion: transactionExtensionVersion || registry.getTransactionExtensionVersion()
      });
    }

    return {};
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override get encodedLength (): number {
    return super.encodedLength;
  }

  /**
   * @description The [[ExtrinsicEra]]
   */
  public get era (): ExtrinsicEra {
    return this.getT('era');
  }

  /**
   * @description The [[Index]]
   */
  public get nonce (): ICompact<INumber> {
    return this.getT('nonce');
  }

  /**
   * @description The tip [[Balance]]
   */
  public get tip (): ICompact<INumber> {
    return this.getT('tip');
  }

  /**
   * @description The (optional) asset id for this signature for chains that support transaction fees in assets
   */
  public get assetId (): IOption<INumber | MultiLocation> {
    return this.getT('assetId');
  }

  /**
   * @description The mode used for the CheckMetadataHash TransactionExtension
   */
  public get mode (): INumber {
    return this.getT('mode');
  }

  /**
   * @description The (optional) [[Hash]] for the metadata proof
   */
  public get metadataHash (): IOption<Hash> {
    return this.getT('metadataHash');
  }

  /**
   * @description The version of the TransactionExtensions used in this extrinsic
   */
  public get transactionExtensionVersion (): INumber {
    return this.getT('transactionExtensionVersion');
  }

  /**
   * @description The [[Call]] this extrinsic wraps
   */
  public get method (): Call {
    return this.getT('method');
  }

  /**
   * @description The extrinsic's version
   */
  public get version () {
    return this.#version;
  }

  /**
   * @description The [[Preamble]] for the extrinsic
   */
  public get preamble () {
    return this.#preamble;
  }

  /**
   * @description Check if this extrinsic is signed
   */
  public get isSigned (): boolean {
    // Check if VerifySignature extension is present and signed
    const verifySignatureRaw = this.get('VerifySignature') ;

    const verifySignature = verifySignatureRaw as VerifySignature
    return !!(verifySignature && (verifySignature ).isSigned);
  }

  /**
   * @description Get the signature from the VerifySignature extension
   */
  public get signature () {
    const verifySignature = this.get('VerifySignature') as VerifySignature;
    return verifySignature?.isSigned ? verifySignature.asSigned.signature : null;
  }

  /**
   * @description Get the signer from the VerifySignature extension
   */
  public get signer () {
    const verifySignature = this.get('VerifySignature') as VerifySignature;
    return verifySignature?.isSigned ? verifySignature.asSigned.account as unknown as Address : null;
  }

  public override toHex (isBare?: boolean): HexString {
    return u8aToHex(this.toU8a(isBare));
  }

  public override toU8a (isBare?: boolean): Uint8Array {
    return isBare
      ? this.encode()
      : compactAddLength(this.encode());
  }

  public override toRawType () {
    return 'GeneralExt';
  }

  /**
   *
   * @description Returns an encoded GeneralExtrinsic
   */
  public encode () {
    return u8aConcat(new Uint8Array([this.version | this.preamble]), super.toU8a());
  }

  /**
   * @description Create a payload for signing (excluding VerifySignature extension)
   */
  private createSignPayload (options: SignatureOptions): Uint8Array {
    // Create payload with all transaction extensions except VerifySignature
    const payloadData = {
      method: this.method.toHex(),
      era: options.era?.toHex() || '0x00',
      nonce: options.nonce,
      tip: options.tip || 0,
      transactionVersion: options.runtimeVersion.transactionVersion,
      specVersion: options.runtimeVersion.specVersion,
      genesisHash: options.genesisHash,
      blockHash: options.blockHash,
      assetId: options.assetId,
      mode: options.mode,
      metadataHash: options.metadataHash
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

    // Concatenate all the transaction extension values (excluding VerifySignature)
    return u8aConcat(
      methodBytes.toU8a(true), // Critical: method without length prefix
      eraBytes.toU8a(),
      nonceBytes.toU8a(),
      tipBytes.toU8a(),
      txVersionBytes.toU8a(),
      specVersionBytes.toU8a(),
      genesisHashBytes.toU8a(),
      blockHashBytes.toU8a()
    );
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  public sign (account: IKeyringPair, options: SignatureOptions): GeneralExtrinsic {
    if (!account?.addressRaw) {
      throw new Error(`Expected a valid keypair for signing, found ${account}`);
    }

    // Create the payload for signing (excluding VerifySignature)
    const payload = this.createSignPayload(options);

    // Sign the payload
    const signature = sign(this.registry, account, payload, {withType:true});
    const signatureType =  this.registry.createType('ExtrinsicSignature', signature);

    // Create the VerifySignature extension with the signature
    this.registry.createType('PalletVerifySignatureExtensionVerifySignature', {
      Signed: {
        signature: signatureType,
        account: toAddress(this.registry, account.addressRaw ).toHex(),
      }
    });

    console.log(this.toHuman())
    return this;
  }

  /**
   * @description Add a fake signature to the extrinsic
   */
  public signFake (signer: string | Uint8Array | Address, _options: SignatureOptions): GeneralExtrinsic {
    if (!signer) {
      throw new Error(`Expected a valid address for signing, found ${signer}`);
    }

    // Create a fake signature
    const fakeSignature = new Uint8Array(256).fill(1);

    // Create the VerifySignature extension with the fake signature
    const verifySignature = this.registry.createType('PalletVerifySignatureExtensionVerifySignature', {
      Signed: {
        signature: fakeSignature,
        account: signer
      }
    });

    // Set the VerifySignature extension
    this.set('VerifySignature', verifySignature);

    return this;
  }

  /**
   * @description Add an already-generated signature to the extrinsic
   */
  public addSignature (signer: string | Uint8Array | Address, signature: Uint8Array | HexString, _payload: ExtrinsicPayloadValue | Uint8Array | HexString): GeneralExtrinsic {
    // Create the VerifySignature extension with the provided signature
    const verifySignature = this.registry.createType('PalletVerifySignatureExtensionVerifySignature', {
      Signed: {
        signature: signature,
        account: signer
      }
    });

    // Set the VerifySignature extension
    this.set('VerifySignature', verifySignature);

    return this;
  }
}
