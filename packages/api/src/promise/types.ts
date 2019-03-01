// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '@polkadot/types/types';
import { QueryableStorageFunction as QueryableStorageFunctionBase, SubmittableExtrinsicFunction as SubmittableExtrinsicFunctionBase } from '../types';

import ApiBase from '../Base';
import { SubmittableExtrinsic as SubmittableExtrinsicBase } from '../SubmittableExtrinsic';

export type SubscriptionResult = Promise<() => any>;

export type CodecResult = Promise<Codec>;

export interface ApiPromiseInterface extends ApiBase<CodecResult, SubscriptionResult> {
  readonly isReady: Promise<ApiPromiseInterface>;
}

export type QueryableStorageFunction = QueryableStorageFunctionBase<CodecResult, SubscriptionResult>;
export type SubmittableExtrinsic = SubmittableExtrinsicBase<CodecResult, SubscriptionResult>;
export type SubmittableExtrinsicFunction = SubmittableExtrinsicFunctionBase<CodecResult, SubscriptionResult>;
