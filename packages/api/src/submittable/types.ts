// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Address, ExtrinsicStatus, EventRecord, Hash } from '@polkadot/types/interfaces';
import { AnyNumber, AnyU8a, Callback, IExtrinsic, IExtrinsicEra, IKeyringPair, SignatureOptions } from '@polkadot/types/types';
import { ApiTypes } from '../types';

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

export type SubmittableResultResult<ApiType extends ApiTypes> =
  ApiType extends 'rxjs'
    ? Observable<SubmittableResultImpl>
    : Promise<Hash>;

export type SubmittableResultSubscription<ApiType extends ApiTypes> =
  ApiType extends 'rxjs'
    ? Observable<SubmittableResultImpl>
    : Promise<() => void>;

export interface SignerOptions {
  blockHash: AnyU8a;
  era?: IExtrinsicEra | number;
  nonce: AnyNumber;
  tip?: AnyNumber;
}

export interface SubmittableExtrinsic<ApiType extends ApiTypes> extends IExtrinsic {
  send(): SubmittableResultResult<ApiType>;

  send(statusCb: Callback<SubmittableResultImpl>): SubmittableResultSubscription<ApiType>;

  sign(account: IKeyringPair, _options: Partial<SignatureOptions>): this;

  signAsync(account: IKeyringPair, _options: Partial<SignatureOptions>): Promise<this>;

  signAndSend(account: IKeyringPair | string | AccountId | Address, options?: Partial<SignerOptions>): SubmittableResultResult<ApiType>;

  signAndSend(account: IKeyringPair | string | AccountId | Address, statusCb: Callback<SubmittableResultImpl>): SubmittableResultSubscription<ApiType>;

  signAndSend(account: IKeyringPair | string | AccountId | Address, options: Partial<SignerOptions>, statusCb?: Callback<SubmittableResultImpl>): SubmittableResultSubscription<ApiType>;
}
