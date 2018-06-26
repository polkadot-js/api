// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Interfaces } from '@polkadot/jsonrpc/types';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Interface$Sections } from '@polkadot/jsonrpc/types';

export type RxApiInterface$Method = (...params: Array<any>) => Observable<any> | BehaviorSubject<any>;

export type RxApiInterface$Section = {
  [index: string]: RxApiInterface$Method
};

type RxApiInterface$Keys = {
  [key in keyof Interfaces]: RxApiInterface$Section;
};

export type RxApiInterface = RxApiInterface$Keys & {
  isConnected: () => BehaviorSubject<boolean>
}
