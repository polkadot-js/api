// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BehaviorSubject, Observable } from 'rxjs';

import interfaces from '@polkadot/jsonrpc/types';

export type RxApiInterface$Method = (...params: Array<any>) => Observable<any> | BehaviorSubject<any>;

export type RxApiInterface$Section = {
  [index: string]: RxApiInterface$Method
};

export type RxApiInterface = {
  readonly author: RxApiInterface$Section;
  readonly chain: RxApiInterface$Section;
  readonly state: RxApiInterface$Section;
  readonly system: RxApiInterface$Section;

  isConnected: () => BehaviorSubject<boolean>
}
