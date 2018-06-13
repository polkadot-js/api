// Copyright 2017-2018 @polkadot/api-provider authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { JsonRpcRequest, JsonRpcResponse } from '../../types';
import type { RpcCoder, RpcCoderState } from './types';

const decodeResponse = require('./decodeResponse');
const encodeJson = require('./encodeJson');
const encodeObject = require('./encodeObject');

module.exports = function rpcCoder (): RpcCoder {
  const self: RpcCoderState = {
    id: 0
  };

  return {
    decodeResponse: (response: JsonRpcResponse): mixed =>
      decodeResponse(self, response),
    encodeJson: (method: string, params: Array<mixed>): string =>
      encodeJson(self, method, params),
    encodeObject: (method: string, params: Array<mixed>): JsonRpcRequest =>
      encodeObject(self, method, params),
    getId: (): number =>
      self.id
  };
};
