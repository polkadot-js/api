// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ProviderInterface } from '@polkadot/api-provider/types';
import type { RxApiInterface } from '../types';

import createConnected from './connected';

export default function exposed (provider: ProviderInterface): RxApiInterface {
  const connected = createConnected(provider);

  return {
    isConnected: (): rxjs$BehaviorSubject<boolean> =>
      connected
  };
}
