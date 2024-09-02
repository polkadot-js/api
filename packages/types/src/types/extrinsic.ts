// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyJson, AnyNumber, AnyTuple, AnyU8a, Codec } from '@polkadot/types-codec/types';
import type { HexString } from '@polkadot/util/types';
import type { ExtrinsicStatus } from '../interfaces/author/index.js';
import type { EcdsaSignature, Ed25519Signature, Sr25519Signature } from '../interfaces/extrinsics/index.js';
import type { Address, Call, H256, Hash } from '../interfaces/runtime/index.js';
import type { DispatchError, DispatchInfo, EventRecord } from '../interfaces/system/index.js';
import type { ICompact, IKeyringPair, IMethod, INumber, IRuntimeVersionBase } from './interfaces.js';
import type { Registry } from './registry.js';

export interface ISubmittableResult {
  readonly dispatchError?: DispatchError | undefined;
  readonly dispatchInfo?: DispatchInfo | undefined;
  readonly events: EventRecord[];
  readonly internalError?: Error | undefined;
  readonly status: ExtrinsicStatus;
  readonly isCompleted: boolean;
  readonly isError: boolean;
  readonly isFinalized: boolean;
  readonly isInBlock: boolean;
  readonly isWarning: boolean;
  readonly txHash: Hash;
  readonly txIndex?: number | undefined;

  filterRecords (section: string, method: string): EventRecord[];
  findRecord (section: string, method: string): EventRecord | undefined;
  toHuman (isExtended?: boolean): AnyJson;
}

export interface SignerPayloadJSON {
  /**
   * @description The ss-58 encoded address
   */
  address: string;

  /**
   * @description The id of the asset used to pay fees, in hex
   */
  assetId?: HexString;

  /**
   * @description The checkpoint hash of the block, in hex
   */
  blockHash: HexString;

  /**
   * @description The checkpoint block number, in hex
   */
  blockNumber: HexString;

  /**
   * @description The era for this transaction, in hex
   */
  era: HexString;

  /**
   * @description The genesis hash of the chain, in hex
   */
  genesisHash: HexString;

  /**
   * @description The metadataHash for the CheckMetadataHash SignedExtension, as hex
   */
  metadataHash?: HexString;

  /**
   * @description The encoded method (with arguments) in hex
   */
  method: string;

  /**
   * @description The mode for the CheckMetadataHash SignedExtension, in hex
   */
  mode?: number;

  /**
   * @description The nonce for this transaction, in hex
   */
  nonce: HexString;

  /**
   * @description The current spec version for the runtime
   */
  specVersion: HexString;

  /**
   * @description The tip for this transaction, in hex
   */
  tip: HexString;

  /**
   * @description The current transaction version for the runtime
   */
  transactionVersion: HexString;

  /**
   * @description The applicable signed extensions for this runtime
   */
  signedExtensions: string[];

  /**
   * @description The version of the extrinsic we are dealing with
   */
  version: number;

  /**
   * @description Optional flag that enables the use of the `signedTransaction` field in
   * `singAndSend`, `signAsync`, and `dryRun`.
   */
  withSignedTransaction?: boolean;
}

export interface SignerPayloadRawBase {
  /**
   * @description The hex-encoded data for this request
   */
  data: string;

  /**
   * @description The type of the contained data
   */
  type?: 'bytes' | 'payload';
}

export interface SignerPayloadRaw extends SignerPayloadRawBase {
  /**
   * @description The ss-58 encoded address
   */
  address: string;

  /**
   * @description The type of the contained data
   */
  type: 'bytes' | 'payload';
}

export interface ISignerPayload {
  toPayload (): SignerPayloadJSON;
  toRaw (): SignerPayloadRaw;
}

export interface SignerResult {
  /**
   * @description The id for this request
   */
  id: number;

  /**
   * @description The resulting signature in hex
   */
  signature: HexString;

  /**
   * @description The payload constructed by the signer. This allows the
   * inputted signed transaction to bypass `signAndSend` from adding the signature to the payload,
   * and instead broadcasting the transaction directly. There is a small validation layer. Please refer
   * to the implementation for more information. If the inputted signed transaction is not actually signed, it will fail with an error.
   *
   * This will also work for `signAsync`. The new payload will be added to the Extrinsic, and will be sent once the consumer calls `.send()`.
   *
   * NOTE: This is only implemented for `signPayload`, and will only work when the `withSignedTransaction` option is enabled as an option.
   */
  signedTransaction?: HexString | Uint8Array;
}

export interface Signer {
  /**
   * @description signs an extrinsic payload from a serialized form
   */
  signPayload?: (payload: SignerPayloadJSON) => Promise<SignerResult>;

  /**
   * @description signs a raw payload, only the bytes data as supplied
   */
  signRaw?: (raw: SignerPayloadRaw) => Promise<SignerResult>;

  /**
   * @description Receives an update for the extrinsic signed by a `signer.sign`
   */
  update?: (id: number, status: H256 | ISubmittableResult) => void;
}

export interface IExtrinsicEra extends Codec {
  asImmortalEra: Codec;
  asMortalEra: Codec;
}

export interface SignatureOptions {
  blockHash: Uint8Array | string;
  era?: IExtrinsicEra;
  genesisHash: Uint8Array | string;
  nonce: AnyNumber;
  runtimeVersion: IRuntimeVersionBase;
  signedExtensions?: string[];
  signer?: Signer;
  tip?: AnyNumber;
  assetId?: AnyNumber | object;
  mode?: AnyNumber;
  metadataHash?: Uint8Array | string;
  withSignedTransaction?: boolean;
}

interface ExtrinsicSignatureBase {
  readonly isSigned: boolean;
  readonly era: IExtrinsicEra;
  readonly nonce: ICompact<INumber>;
  readonly signature: EcdsaSignature | Ed25519Signature | Sr25519Signature;
  readonly signer: Address;
  readonly tip: ICompact<INumber>;
}

export interface ExtrinsicPayloadValue {
  blockHash: AnyU8a;
  era: AnyU8a | IExtrinsicEra;
  genesisHash: AnyU8a;
  method: AnyU8a | IMethod<AnyTuple>;
  nonce: AnyNumber;
  specVersion: AnyNumber;
  tip: AnyNumber;
  transactionVersion: AnyNumber;
  assetId?: AnyNumber | object;
  mode?: AnyNumber;
  metadataHash?: AnyU8a;
}

export interface IExtrinsicSignature extends ExtrinsicSignatureBase, Codec {
  addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | HexString, payload: Uint8Array | HexString): IExtrinsicSignature;
  sign (method: Call, account: IKeyringPair, options: SignatureOptions): IExtrinsicSignature;
  signFake (method: Call, address: Address | Uint8Array | string, options: SignatureOptions): IExtrinsicSignature;

  readonly registry: Registry;
}

interface IExtrinsicSignable<T> extends Codec {
  addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | HexString, payload: ExtrinsicPayloadValue | Uint8Array | HexString): T;
  sign (account: IKeyringPair, options: SignatureOptions): T;
  signFake (address: Address | Uint8Array | string, options: SignatureOptions): T;

  readonly registry: Registry;
}

export interface IExtrinsicImpl extends IExtrinsicSignable<IExtrinsicImpl> {
  readonly method: Call;
  readonly signature: IExtrinsicSignature;
  readonly version: number;
}

export interface IExtrinsic<A extends AnyTuple = AnyTuple> extends IExtrinsicSignable<IExtrinsic<A>>, ExtrinsicSignatureBase, IMethod<A> {
  readonly length: number;
  readonly method: IMethod<A>;
  readonly type: number;
  readonly version: number;
}
