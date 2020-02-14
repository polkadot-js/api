// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Address, ExtrinsicStatus, EventRecord, Hash, RuntimeDispatchInfo } from '@polkadot/types/interfaces';
import { AnyNumber, AnyU8a, Callback, Codec, IExtrinsic, IExtrinsicEra, IKeyringPair, SignatureOptions } from '@polkadot/types/types';
import { ApiTypes, Signer } from '../types';

import { Observable } from 'rxjs';

export interface SubmittableResultImpl {
  readonly events: EventRecord[];
  readonly status: ExtrinsicStatus;
  readonly isCompleted: boolean;
  readonly isError: boolean;
  readonly isFinalized: boolean;

  filterRecords (section: string, method: string): EventRecord[];
  findRecord (section: string, method: string): EventRecord | undefined;
}

export interface SubmittableResultValue {
  events?: EventRecord[];
  status: ExtrinsicStatus;
}

export type SubmittablePaymentResult<ApiType extends ApiTypes> =
  ApiType extends 'rxjs'
    ? Observable<RuntimeDispatchInfo>
    : Promise<RuntimeDispatchInfo>;

export type SubmittableResultResult<ApiType extends ApiTypes> =
  ApiType extends 'rxjs'
    ? Observable<SubmittableResultImpl>
    : Promise<Hash>;

export type SubmittableResultSubscription<ApiType extends ApiTypes> =
  ApiType extends 'rxjs'
    ? Observable<SubmittableResultImpl>
    : Promise<() => void>;

export type SubmittableThis<ApiType extends ApiTypes, THIS> =
  ApiType extends 'rxjs'
    ? Observable<THIS>
    : Promise<THIS>;

export interface SignerOptions {
  blockHash: AnyU8a;
  era?: IExtrinsicEra | number;
  nonce: AnyNumber | Codec;
  signer?: Signer;
  tip?: AnyNumber;
}

export type AddressOrPair = IKeyringPair | string | AccountId | Address;

export interface SubmittableExtrinsic<ApiType extends ApiTypes> extends IExtrinsic {
  paymentInfo (account: AddressOrPair, options?: Partial<SignerOptions>): SubmittablePaymentResult<ApiType>;

  send(): SubmittableResultResult<ApiType>;

  send(statusCb: Callback<SubmittableResultImpl>): SubmittableResultSubscription<ApiType>;

  sign(account: IKeyringPair, _options: Partial<SignatureOptions>): this;

  signAsync(account: AddressOrPair, _options: Partial<SignatureOptions>): SubmittableThis<ApiType, this>;

  signAndSend(account: AddressOrPair, options?: Partial<SignerOptions>): SubmittableResultResult<ApiType>;

  signAndSend(account: AddressOrPair, statusCb: Callback<SubmittableResultImpl>): SubmittableResultSubscription<ApiType>;

  signAndSend(account: AddressOrPair, options: Partial<SignerOptions>, statusCb?: Callback<SubmittableResultImpl>): SubmittableResultSubscription<ApiType>;
}
