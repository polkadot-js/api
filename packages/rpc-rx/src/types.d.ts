// Copyright 2017-2018 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ReplaySubject, Observable } from 'rxjs';
import interfaces from '@polkadot/jsonrpc/types';

export type RpcRxInterface$Method = (...params: Array<any>) => Observable<any> | ReplaySubject<any>;

export type RpcRxInterface$Section = {
  [index: string]: RpcRxInterface$Method
};

export type RpcRxInterface$Events = 'connected' | 'disconnected';

export type RpcRxInterface = {
  readonly author: RpcRxInterface$Section;
  readonly chain: RpcRxInterface$Section;
  readonly state: RpcRxInterface$Section;
  readonly system: RpcRxInterface$Section;

  isConnected: () => Observable<boolean>
  on: (type: RpcRxInterface$Events, handler: (...args: Array<any>) => any) => void;
}
