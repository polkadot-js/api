// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { JsonRpcRequest } from '../../types';
import { RpcCoderState } from './types';

export default function encodeObject (self: RpcCoderState, method: string, params: Array<any>): JsonRpcRequest {
  return {
    id: ++self.id,
    jsonrpc: '2.0',
    method,
    params: params && params.length
      ? params
      : null
  };
}
