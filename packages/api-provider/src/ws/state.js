// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { WsState } from './types';

const assert = require('@polkadot/util/assert');
const l = require('@polkadot/util/logger')('ws-provider');

const coder = require('../jsonRpcCoder');

module.exports = function state (endpoint: string, autoConnect: boolean): $Shape<WsState> {
  assert(/^ws:\/\//.test(endpoint), `Endpoint should start with 'ws://', received '${endpoint}'`);

  return {
    autoConnect,
    coder: coder(),
    endpoint,
    handlers: {},
    isConnected: false,
    l,
    queued: {}
  };
};
