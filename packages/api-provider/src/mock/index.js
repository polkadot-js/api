// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ProviderInterface, ProviderInterface$Emitted, ProviderInterface$EmitCb } from '../types';

import mocks from './mocks';
import on from './on';
import send from './send';
import state from './state';
import subscribe from './subscribe';
import unsubscribe from './unsubscribe';

export default function mockProvider (): ProviderInterface {
  const self = state();

  mocks(self);

  return {
    isConnected: (): boolean =>
      true,
    on: (type: ProviderInterface$Emitted, sub: ProviderInterface$EmitCb): void =>
      on(self, type, sub),
    send: (method: string, params: Array<mixed>): Promise<mixed> =>
      send(self, method, params),
    subscribe: (method: string, ...params: Array<mixed>): Promise<number> =>
      subscribe(self, method, params),
    unsubscribe: (method: string, id: number): Promise<boolean> =>
      unsubscribe(self, method, id)
  };
}
