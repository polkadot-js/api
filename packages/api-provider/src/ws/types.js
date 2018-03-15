// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { Logger } from '@polkadot/util/types';
import type { RpcCoder } from '../jsonRpcCoder';

export type WsState$Awaiting = {
  callback: (error: ?Error, result: mixed) => void
};

export type WsState = {
  autoConnect: boolean,
  coder: RpcCoder,
  endpoint: string,
  handlers: { [number]: WsState$Awaiting },
  isConnected: boolean,
  l: Logger,
  queued: { [number]: string },
  websocket: WebSocket
};
