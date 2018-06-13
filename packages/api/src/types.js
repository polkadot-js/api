// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { Interface$Sections } from '@polkadot/jsonrpc/types';

export type ApiInterface$Section$Method = {
  (...params: Array<mixed>): Promise<mixed>;
  unsubscribe: (id: number) => Promise<mixed>;
}

export type ApiInterface$Section = {
  [string]: ApiInterface$Section$Method
};

export type ApiInterface = {
  [Interface$Sections]: ApiInterface$Section
}
