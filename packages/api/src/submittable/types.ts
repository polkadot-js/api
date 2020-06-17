// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Address, Extrinsic, ExtrinsicStatus, EventRecord, Hash, RuntimeDispatchInfo } from '@polkadot/types/interfaces';
import { AnyNumber, AnyU8a, Callback, Codec, IExtrinsicEra, IKeyringPair, Signer, ISubmittableResult } from '@polkadot/types/types';
import { ApiTypes } from '../types';

import { Observable } from 'rxjs';

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
    ? Observable<ISubmittableResult>
    : Promise<Hash>;

export type SubmittableResultSubscription<ApiType extends ApiTypes> =
  ApiType extends 'rxjs'
    ? Observable<ISubmittableResult>
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

export interface SubmittableExtrinsic<ApiType extends ApiTypes> extends Extrinsic {
  paymentInfo (account: AddressOrPair, options?: Partial<SignerOptions>): SubmittablePaymentResult<ApiType>;

  send(): SubmittableResultResult<ApiType>;

  send(statusCb: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;

  sign(account: IKeyringPair, _options?: Partial<SignerOptions>): this;

  signAsync(account: AddressOrPair, _options?: Partial<SignerOptions>): SubmittableThis<ApiType, this>;

  signAndSend(account: AddressOrPair, options?: Partial<SignerOptions>): SubmittableResultResult<ApiType>;

  signAndSend(account: AddressOrPair, statusCb: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;

  signAndSend(account: AddressOrPair, options: Partial<SignerOptions>, statusCb?: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;
}
