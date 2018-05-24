// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { Interface$Sections } from '@polkadot/jsonrpc/types';

// flowlint-next-line unclear-type:off
export type RxApiInterface$Method = (...params: Array<mixed>) => rxjs$Observable<any> | rxjs$BehaviorSubject<any>;

export type RxApiInterface$Section = {
  [string]: RxApiInterface$Method
};

export type RxApiInterface = {
  isConnected: () => rxjs$BehaviorSubject<boolean>;
  [Interface$Sections]: RxApiInterface$Section;
};
