// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceTypes } from '@polkadot/api-jsonrpc/types';

export type RxApiInterface$Method = (...params: Array<mixed>) => rxjs$Observable<*> | rxjs$BehaviorSubject<*>;

export type RxApiInterface$Section = {
  [string]: RxApiInterface$Method
};

export type RxApiInterface = {
  isConnected: () => rxjs$BehaviorSubject<boolean>;
  [InterfaceTypes]: RxApiInterface$Section;
};
