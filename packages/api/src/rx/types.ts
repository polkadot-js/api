// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { Codec } from '@polkadot/types/types';

import ApiBase from '../Base';

export type OnCall = Observable<Codec | null | undefined>;

export interface ApiRxInterface extends ApiBase<OnCall> {
  readonly isConnected: Observable<boolean>;
  readonly isReady: Observable<ApiRxInterface>;
}
