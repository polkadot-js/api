// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceTypes } from '@polkadot/api-jsonrpc/types';

export type ApiInterface$Section$Method = (...params: Array<mixed>) => Promise<mixed>;

export type ApiInterface$Section = {
  [string]: ApiInterface$Section$Method,

  subscribe: (name: string, ...params: Array<mixed>) => Promise<number>,
  unsubscribe: (id: number) => Promise<boolean>
};

export type ApiInterface = {
  [InterfaceTypes]: ApiInterface$Section
}
