// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BehaviorSubject, Observable } from 'rxjs';

import interfaces from '@polkadot/jsonrpc/types';

export type RxApiInterface$Method = (...params: Array<any>) => Observable<any> | BehaviorSubject<any>;

export type RxApiInterface$Section = {
  [index: string]: RxApiInterface$Method
};

type RxApiInterface$Keys = {
  readonly [key in keyof typeof interfaces]: RxApiInterface$Section;
};

export type RxApiInterface = RxApiInterface$Keys & {
  isConnected: () => BehaviorSubject<boolean>
}
