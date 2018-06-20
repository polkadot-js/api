// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ProviderInterface } from '@polkadot/api-provider/types';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export default function connected (provider: ProviderInterface): rxjs$BehaviorSubject<boolean> {
  const subject = new BehaviorSubject(provider.isConnected());

  provider.on('connected', () => subject.next(true));
  provider.on('disconnected', () => subject.next(false));

  return subject;
}
