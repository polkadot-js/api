// ISC, Copyright 2017-2018 Jaco Greeff
// @flow

import type { JsonRpcRequest, JsonRpcResponse } from './types';

const assert = require('@polkadot/util/assert');
const isNumber = require('@polkadot/util/is/number');
const isUndefined = require('@polkadot/util/is/undefined');

module.exports = class JsonRpcCoder {
  _id: number = 0;

  decodeResponse (response: JsonRpcResponse): mixed {
    assert(response, 'Empty response object received');

    assert(response.jsonrpc === '2.0', 'Invalid jsonrpc field in decoded object');

    assert(isNumber(response.id), 'Invalid id field in decoded object');

    if (response.error) {
      const { code, message } = response.error;

      throw new Error(`[${code}]: ${message}`);
    }
    assert(!isUndefined(response.result), 'No result found in JsonRpc response');

    return response.result;
  }

  encodeObject (method: string, params: Array<mixed>): JsonRpcRequest {
    return {
      id: ++this._id,
      jsonrpc: '2.0',
      method,
      params
    };
  }

  encodeJson (method: string, params: Array<mixed>): string {
    return JSON.stringify(
      this.encodeObject(method, params)
    );
  }

  // flowlint-next-line unsafe-getters-setters:off
  get id (): number {
    return this._id;
  }
};
