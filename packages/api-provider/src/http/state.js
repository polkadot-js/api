// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { HttpState } from './types';

const assert = require('@polkadot/util/assert');
const l = require('@polkadot/util/logger')('http-provider');

const coder = require('../jsonRpcCoder');

module.exports = function state (endpoint: string): HttpState {
  assert(/^http:\/\//.test(endpoint), `Endpoint should start with 'http://', received '${endpoint}'`);

  return {
    coder: coder(),
    endpoint,
    l
  };
};
