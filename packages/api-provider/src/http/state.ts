// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { HttpState } from './types';

const assert = require('@polkadot/util/assert');
const l = require('@polkadot/util/logger')('api-http');

const coder = require('../coder/json');

module.exports = function state (endpoint: string): HttpState {
  assert(/^(https|http):\/\//.test(endpoint), `Endpoint should start with 'http://', received '${endpoint}'`);

  return {
    coder: coder(),
    endpoint,
    l
  };
};
