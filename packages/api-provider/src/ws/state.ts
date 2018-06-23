// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { WsState } from './types';

const EventEmitter = require('eventemitter3');
const assert = require('@polkadot/util/assert');
const l = require('@polkadot/util/logger')('api-ws');

const coder = require('../coder/json');

module.exports = function state (endpoint: string, autoConnect: boolean): $Shape<WsState> {
  assert(/^(wss|ws):\/\//.test(endpoint), `Endpoint should start with 'ws://', received '${endpoint}'`);

  return {
    autoConnect,
    coder: coder(),
    emitter: new EventEmitter(),
    endpoint,
    handlers: {},
    isConnected: false,
    l,
    queued: {},
    subscriptions: {}
  };
};
