// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { JsonRpcResponse, JsonRpcResponseBase$Error } from '../../types';
import type { RpcCoderState } from './types';

const assert = require('@polkadot/util/assert');
const isNumber = require('@polkadot/util/is/number');
const isUndefined = require('@polkadot/util/is/undefined');

function checkError (error?: JsonRpcResponseBase$Error) {
  if (!error) {
    return;
  }

  const { code, message } = error;

  throw new Error(`[${code}]: ${message}`);
}

module.exports = function decodeResponse (self: RpcCoderState, response: JsonRpcResponse): mixed {
  assert(response, 'Empty response object received');
  assert(response.jsonrpc === '2.0', 'Invalid jsonrpc field in decoded object');

  const isSubscription = !isUndefined(response.params) && !isUndefined(response.method);

  assert(isNumber(response.id) || (isSubscription && isNumber(response.params.subscription)), 'Invalid id field in decoded object');

  checkError(response.error);

  assert(!isUndefined(response.result) || isSubscription, 'No result found in JsonRpc response');

  if (isSubscription) {
    checkError(response.params.error);

    return response.params.result;
  }

  return response.result;
};
