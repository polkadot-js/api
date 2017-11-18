// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { JsonRpcRequest, JsonRpcResponse } from './types';

const { isNumber, isUndefined } = require('@polkadot/util/lib/is');

module.exports = class JsonRpcCoder {
  _id: number = 0;

  decodeResponse (response: JsonRpcResponse): any {
    if (!response) {
      throw new Error('Empty response object received');
    }

    if (response.jsonrpc !== '2.0') {
      throw new Error('Invalid jsonrpc field in decoded object');
    }

    if (!isNumber(response.id)) {
      throw new Error('Invalid id field in decoded object');
    }

    if (response.error) {
      const { code, message } = response.error;

      throw new Error(`[${code}]: ${message}`);
    }

    if (isUndefined(response.result)) {
      throw new Error('No result found in JsonRpc response');
    }

    return response.result;
  }

  encodeObject (method: string, params: Array<any>): JsonRpcRequest {
    return {
      id: ++this._id,
      jsonrpc: '2.0',
      method,
      params
    };
  }

  encodeJson (method: string, params: Array<any>): string {
    return JSON.stringify(
      this.encodeObject(method, params)
    );
  }

  get id (): number {
    return this._id;
  }
};
