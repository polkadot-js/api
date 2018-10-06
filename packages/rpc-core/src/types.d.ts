// Copyright 2017-2018 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import interfaces from '@polkadot/jsonrpc/index';

export interface ApiInterface$Section$Method {
  (...params: Array<any>): Promise<any>;

  subscription: string;
  unsubscribe: (id: number) => Promise<any>;
}

export type ApiInterface$Section = {
  [index: string]: ApiInterface$Section$Method
};

export type ApiInterface = {
  readonly [key in keyof typeof interfaces]: ApiInterface$Section
}
