// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Address, Call, EcdsaSignature, Ed25519Signature, ExtrinsicEra, Hash, MultiLocation, Sr25519Signature } from '@polkadot/types/interfaces';
import type { AnyNumber, AnyU8a, ExtrinsicPayloadValue, ICompact, IExtrinsicEra, IKeyringPair, INumber, IOption, Registry, SignatureOptions } from '@polkadot/types/types';
import type { Enum } from '@polkadot/types-codec';
import type { AnyTuple, IMethod } from '@polkadot/types-codec/types';
import type { HexString } from '@polkadot/util/types';

import { Struct } from '@polkadot/types-codec';
import { compactAddLength, compactFromU8a, isHex, isObject, isU8a, objectSpread, stringify, u8aConcat, u8aToHex, u8aToU8a } from '@polkadot/util';

import { EMPTY_U8A, UNMASK_VERSION } from '../constants.js';
import { GenericExtrinsicSignatureV5 } from './ExtrinsicSignature.js';

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

export interface VerifySignature extends Enum {
  readonly isSigned: boolean;
  readonly asSigned: {
    readonly signature: Ed25519Signature | Sr25519Signature | EcdsaSignature;
    readonly account: Address;
  } & Struct;
  readonly isDisabled: boolean;
  readonly type: 'Signed' | 'Disabled';
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

export class GeneralExtrinsic extends Struct {
  #version: number;
  #preamble: number;

  constructor (registry: Registry, value?: GeneralExtrinsicValue | Uint8Array | HexString, opt?: { version: number }) {
    const extTypes = registry.getTransactionExtensionTypes();

    console.log('In GeneralExtrinsic class', extTypes);

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
        VerifySignature: registry.createType('PalletVerifySignatureExtensionVerifySignature'),
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
    console.log('About to read');
    const verifySignatureRaw = this.get('VerifySignature');

    console.log('Reading Raw', verifySignatureRaw);

    const verifySignature = verifySignatureRaw as VerifySignature;

    console.log('Reading Casted', verifySignatureRaw);

    return !!(verifySignature && (verifySignature).isSigned);
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
   * @description Sign the extrinsic with a specific keypair
   */
  public sign (account: IKeyringPair, options: SignatureOptions): GeneralExtrinsic {
    if (!account?.addressRaw) {
      throw new Error(`Expected a valid keypair for signing, found ${stringify(account)}`);
    }

    const sigClass = new GenericExtrinsicSignatureV5(this.registry, this.toU8a());

    sigClass.sign(this.method, account, options);

    this.set('VerifySignature', sigClass.get('VerifySignature') as VerifySignature);

    // Set the VerifySignature extension
    console.log('Creation successful:', (this.get('VerifySignature') as VerifySignature).toHuman());

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
        account: signer,
        signature: fakeSignature
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
        account: signer,
        signature
      }
    });

    // Set the VerifySignature extension
    this.set('VerifySignature', verifySignature);

    return this;
  }
}
