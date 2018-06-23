// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Interface$Sections } from '@polkadot/jsonrpc/types';

export type RxApiInterface$Method = (...params: Array<any>) => Observable<any> | BehaviorSubject<any>;

export type RxApiInterface$Section = {
  [index: string]: RxApiInterface$Method
};

export type RxApiInterface = {
  // @ts-ignore this is the odd one out... doesn't quite match index sig
  isConnected: () => BehaviorSubject<boolean>;
  [index: string]: RxApiInterface$Section;
};
