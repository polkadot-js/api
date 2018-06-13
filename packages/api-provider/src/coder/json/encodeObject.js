// Copyright 2017-2018 @polkadot/api-provider authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { JsonRpcRequest } from '../../types';
import type { RpcCoderState } from './types';

module.exports = function encodeObject (self: RpcCoderState, method: string, params: Array<mixed>): JsonRpcRequest {
  return {
    id: ++self.id,
    jsonrpc: '2.0',
    method,
    params
  };
};
