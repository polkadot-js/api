// Copyright 2017-2022 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { JsonRpcRequest, JsonRpcResponse, JsonRpcResponseBaseError } from '../types';

import { assert, isNumber, isString, isUndefined, stringify } from '@polkadot/util';

import RpcError from './error';

function formatErrorData (data?: string | number): string {
  if (isUndefined(data)) {
    return '';
  }

  const formatted = `: ${isString(data)
    ? data.replace(/Error\("/g, '').replace(/\("/g, '(').replace(/"\)/g, ')').replace(/\(/g, ', ').replace(/\)/g, '')
    : stringify(data)}`;

  // We need some sort of cut-off here since these can be very large and
  // very nested, pick a number and trim the result display to it
  return formatted.length <= 256
    ? formatted
    : `${formatted.substr(0, 255)}…`;
}

/** @internal */
export class RpcCoder {
  #id = 0;

  public decodeResponse (response: JsonRpcResponse): unknown {
    assert(response, 'Empty response object received');
    assert(response.jsonrpc === '2.0', 'Invalid jsonrpc field in decoded object');

    const isSubscription = !isUndefined(response.params) && !isUndefined(response.method);

    assert(isNumber(response.id) || (isSubscription && (isNumber(response.params.subscription) || isString(response.params.subscription))), 'Invalid id field in decoded object');

    this._checkError(response.error);

    assert(!isUndefined(response.result) || isSubscription, 'No result found in JsonRpc response');

    if (isSubscription) {
      this._checkError(response.params.error);

      return response.params.result;
    }

    return response.result;
  }

  public encodeJson (method: string, params: unknown[]): string {
    return stringify(
      this.encodeObject(method, params)
    );
  }

  public encodeObject (method: string, params: unknown[]): JsonRpcRequest {
    return {
      id: ++this.#id,
      jsonrpc: '2.0',
      method,
      params
    };
  }

  public getId (): number {
    return this.#id;
  }

  private _checkError (error?: JsonRpcResponseBaseError): void {
    if (error) {
      const { code, data, message } = error;
      const fmtMessage = `${code}: ${message}${formatErrorData(data)}`;

      throw new RpcError(fmtMessage, code, data);
    }
  }
}
