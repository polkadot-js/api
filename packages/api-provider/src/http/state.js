// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { HttpState } from './types';

import assert from '@polkadot/util/assert';
import logger from '@polkadot/util/logger';

import coder from '../coder/json';

const l = logger('api-http');

export default function state (endpoint: string): HttpState {
  assert(/^(https|http):\/\//.test(endpoint), `Endpoint should start with 'http://', received '${endpoint}'`);

  return {
    coder: coder(),
    endpoint,
    l
  };
}
