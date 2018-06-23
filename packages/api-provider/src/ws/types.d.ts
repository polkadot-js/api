// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import E3 from 'eventemitter3';
import { Logger } from '@polkadot/util/types';
import { RpcCoder } from '../coder/json/types';
import { ProviderInterface$Callback } from '../types';

export type WsState$Awaiting = {
  callback: ProviderInterface$Callback,
  subscription?: ProviderInterface$Callback
};

export type WsState$Subscription = {
  callback: ProviderInterface$Callback
};

export type WsState = {
  autoConnect: boolean,
  coder: RpcCoder,
  endpoint: string,
  emitter: E3.EventEmitter,
  handlers: {
    [index: number]: WsState$Awaiting
  },
  isConnected: boolean,
  l: Logger,
  queued: {
    [index: string]: string
  },
  subscriptions: {
    [index: number]: WsState$Subscription
  },
  websocket: WebSocket | null
};
