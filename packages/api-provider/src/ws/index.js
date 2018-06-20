// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ProviderInterface, ProviderInterface$Callback, ProviderInterface$Emitted, ProviderInterface$EmitCb } from '../types';

import './polyfill';

import connect from './connect';
import on from './on';
import send from './send';
import state from './state';
import subscribe from './subscribe';
import unsubscribe from './unsubscribe';

export default function wsProvider (endpoint: string, autoConnect: boolean = true): ProviderInterface {
  const self = state(endpoint, autoConnect);

  if (autoConnect) {
    connect(self);
  }

  return {
    connect: (): void =>
      connect(self),
    isConnected: (): boolean =>
      self.isConnected,
    on: (type: ProviderInterface$Emitted, sub: ProviderInterface$EmitCb): void =>
      on(self, type, sub),
    send: (method: string, params: Array<mixed>): Promise<mixed> =>
      send(self, method, params),
    subscribe: (method: string, params: Array<mixed>, cb: ProviderInterface$Callback): Promise<number> =>
      subscribe(self, method, params, cb),
    unsubscribe: (method: string, id: number): Promise<boolean> =>
      unsubscribe(self, method, id)
  };
}
