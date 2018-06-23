// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { WsState } from './types';

import E3 from 'eventemitter3';
import assert from '@polkadot/util/assert';
import logger from '@polkadot/util/logger';

import coder from '../coder/json';

const l = logger('api-ws');

export default function state (endpoint: string, autoConnect: boolean): WsState {
  assert(/^(wss|ws):\/\//.test(endpoint), `Endpoint should start with 'ws://', received '${endpoint}'`);

  return {
    autoConnect,
    coder: coder(),
    emitter: new E3.EventEmitter(),
    endpoint,
    handlers: {},
    isConnected: false,
    l,
    queued: {},
    subscriptions: {},
    websocket: null
  };
};
