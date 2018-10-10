// Copyright 2017-2018 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BehaviorSubject, Observable } from 'rxjs';

import interfaces from '@polkadot/jsonrpc/types';

export type RxRpcInterface$Method = (...params: Array<any>) => Observable<any> | BehaviorSubject<any>;

export type RxRpcInterface$Section = {
  [index: string]: RxRpcInterface$Method
};

export type RxRpcInterface = {
  readonly author: RxRpcInterface$Section;
  readonly chain: RxRpcInterface$Section;
  readonly state: RxRpcInterface$Section;
  readonly system: RxRpcInterface$Section;

  isConnected: () => BehaviorSubject<boolean>
  on: (type: 'metadata', handler: (...args: Array<any>) => any) => void;
}
