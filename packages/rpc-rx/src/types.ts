// Copyright 2017-2019 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ReplaySubject, Observable } from 'rxjs';
import { ProviderInterface$Emitted } from '@polkadot/rpc-provider/types';

export interface RpcRxObervable {
  (...params: Array<any>): Observable<any> | ReplaySubject<any>;
  isSubscription: boolean;
}

export type RpcRxInterface$Section = {
  [index: string]: RpcRxObervable
};

export type RpcRxInterface$Events = ProviderInterface$Emitted;

export type RpcRxInterface = {
  readonly author: RpcRxInterface$Section;
  readonly chain: RpcRxInterface$Section;
  readonly state: RpcRxInterface$Section;
  readonly system: RpcRxInterface$Section;

  isConnected: () => Observable<boolean>
  on: (type: RpcRxInterface$Events, handler: (...args: Array<any>) => any) => void;
};
