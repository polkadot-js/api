// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceTypes } from '@polkadot/api-jsonrpc/types';
import type { ProviderInterface$Emitted, ProviderInterface$EmitCb } from '@polkadot/api-provider/types';

export type ApiInterface$Section$Method = {
  (...params: Array<mixed>): Promise<mixed>;
  unsubscribe: (id: number) => Promise<mixed>;
}

export type ApiInterface$Section = {
  [string]: ApiInterface$Section$Method
};

export type ApiInterface = {
  isConnected: () => boolean,
  on: (type: ProviderInterface$Emitted, callback: ProviderInterface$EmitCb) => void,
  [InterfaceTypes]: ApiInterface$Section
}
