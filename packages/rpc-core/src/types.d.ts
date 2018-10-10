// Copyright 2017-2018 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import interfaces from '@polkadot/jsonrpc/index';

export interface RpcInterface$Section$Method {
  (...params: Array<any>): Promise<any>;

  subscription: string;
  unsubscribe: (id: number) => Promise<any>;
}

export type RpcInterface$Section = {
  [index: string]: RpcInterface$Section$Method
};

export interface RpcInterface {
  readonly author: RpcInterface$Section;
  readonly chain: RpcInterface$Section;
  readonly state: RpcInterface$Section;
  readonly system: RpcInterface$Section;

  on: (type: 'metadata', handler: (...args: Array<any>) => any) => void;
}
