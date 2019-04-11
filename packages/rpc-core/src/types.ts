// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export interface RpcInterface$Method {
  (...params: Array<any>): Promise<any>;

  subscription: string;
  unsubscribe: (id: number) => Promise<any>;
}

export type RpcInterface$Section = {
  [index: string]: RpcInterface$Method
};

export interface RpcInterface {
  readonly author: RpcInterface$Section;
  readonly chain: RpcInterface$Section;
  readonly state: RpcInterface$Section;
  readonly system: RpcInterface$Section;
}
