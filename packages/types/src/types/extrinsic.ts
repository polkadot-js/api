// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtrinsicStatus } from '../interfaces/author';
import { EcdsaSignature, Ed25519Signature, Sr25519Signature } from '../interfaces/extrinsics';
import { Address, Balance, Call, H256, Index } from '../interfaces/runtime';
import { EventRecord } from '../interfaces/system';
import { Codec } from './codec';
import { AnyJson, AnyNumber, AnyU8a } from './helpers';
import { ICompact, IKeyringPair, IMethod, IRuntimeVersion } from './interfaces';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ISubmittableResult {
  readonly events: EventRecord[];
  readonly status: ExtrinsicStatus;
  readonly isCompleted: boolean;
  readonly isError: boolean;
  readonly isFinalized: boolean;
  readonly isInBlock: boolean;
  readonly isWarning: boolean;

  filterRecords (section: string, method: string): EventRecord[];
  findRecord (section: string, method: string): EventRecord | undefined;
  toHuman (isExtended?: boolean): AnyJson;
}

export interface SignerResult {
  /**
   * @description The id for this request
   */
  id: number;

  /**
   * @description The resulting signature in hex
   */
  signature: string;
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

export interface SignatureOptions {
  blockHash: AnyU8a;
  era?: IExtrinsicEra;
  genesisHash: AnyU8a;
  nonce: AnyNumber;
  runtimeVersion: IRuntimeVersion;
  signer?: Signer;
  tip?: AnyNumber;
}

interface ExtrinsicSignatureBase {
  readonly isSigned: boolean;
  readonly era: IExtrinsicEra;
  readonly nonce: ICompact<Index>;
  readonly signature: EcdsaSignature | Ed25519Signature | Sr25519Signature;
  readonly signer: Address;
  readonly tip: ICompact<Balance>;
}

export interface ExtrinsicPayloadValue {
  blockHash: AnyU8a;
  era: AnyU8a | IExtrinsicEra;
  genesisHash: AnyU8a;
  method: AnyU8a | IMethod;
  nonce: AnyNumber;
  specVersion: AnyNumber;
  tip: AnyNumber;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IExtrinsicSignature extends ExtrinsicSignatureBase, Codec {
  addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: Uint8Array | string): IExtrinsicSignature;
  sign (method: Call, account: IKeyringPair, options: SignatureOptions): IExtrinsicSignature;
  signFake (method: Call, address: Address | Uint8Array | string, options: SignatureOptions): IExtrinsicSignature;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IExtrinsicEra extends Codec {
  asImmortalEra: Codec;
  asMortalEra: Codec;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IExtrinsicSignable<T> {
  addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: ExtrinsicPayloadValue | Uint8Array | string): T;
  sign (account: IKeyringPair, options: SignatureOptions): T;
  signFake (address: Address | Uint8Array | string, options: SignatureOptions): T;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IExtrinsicImpl extends IExtrinsicSignable<IExtrinsicImpl>, Codec {
  readonly method: Call;
  readonly signature: IExtrinsicSignature;
  readonly version: number;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IExtrinsic extends IExtrinsicSignable<IExtrinsic>, ExtrinsicSignatureBase, IMethod {
  readonly length: number;
  readonly method: Call;
  readonly type: number;
  readonly version: number;
}

export interface SignerPayloadJSON {
  /**
   * @description The ss-58 encoded address
   */
  address: string;

  /**
   * @description The checkpoint hash of the block, in hex
   */
  blockHash: string;

  /**
   * @description The checkpoint block number, in hex
   */
  blockNumber: string;

  /**
   * @description The era for this transaction, in hex
   */
  era: string;

  /**
   * @description The genesis hash of the chain, in hex
   */
  genesisHash: string;

  /**
   * @description The encoded method (with arguments) in hex
   */
  method: string;

  /**
   * @description The nonce for this transaction, in hex
   */
  nonce: string;

  /**
   * @description The current spec version for  the runtime
   */
  specVersion: string;

  /**
   * @description The tip for this transaction, in hex
   */
  tip: string;

  /**
   * @description The version of the extrinsic we are dealing with
   */
  version: number;
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

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ISignerPayload {
  toPayload (): SignerPayloadJSON;
  toRaw (): SignerPayloadRaw;
}
