// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/api-provider/types';

import { BehaviorSubject } from 'rxjs';

export default function connected (provider: ProviderInterface): BehaviorSubject<boolean> {
  const subject = new BehaviorSubject(provider.isConnected());

  provider.on('connected', () => subject.next(true));
  provider.on('disconnected', () => subject.next(false));

  return subject;
}
