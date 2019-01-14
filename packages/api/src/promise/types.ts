// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '@polkadot/types/types';

import ApiBase from '../Base';

export type OnCall = Promise<Codec | null | undefined> | PromiseSubscription;

export type PromiseSubscription = Promise<() => any>;

export interface ApiPromiseInterface extends ApiBase<OnCall> {
  readonly isReady: Promise<ApiPromiseInterface>;
}
