// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { JsonRpcResponse } from '../../types';
import type { RpcCoderState } from './types';

const assert = require('@polkadot/util/assert');
const isNumber = require('@polkadot/util/is/number');
const isUndefined = require('@polkadot/util/is/undefined');

module.exports = function decodeResponse (self: RpcCoderState, response: JsonRpcResponse): mixed {
  assert(response, 'Empty response object received');

  assert(response.jsonrpc === '2.0', 'Invalid jsonrpc field in decoded object');

  assert(isNumber(response.id), 'Invalid id field in decoded object');

  if (response.error) {
    const { code, message } = response.error;

    throw new Error(`[${code}]: ${message}`);
  }

  assert(!isUndefined(response.result), 'No result found in JsonRpc response');

  return response.result;
};
