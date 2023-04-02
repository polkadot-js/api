// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { RpcErrorInterface } from '../types.js';

import { isFunction } from '@polkadot/util';

const UNKNOWN = -99999;

function extend<Data, K extends keyof RpcError<Data>> (that: RpcError<Data>, name: K, value: RpcError<Data>[K]): void {
  Object.defineProperty(that, name, {
    configurable: true,
    enumerable: false,
    value
  });
}

/**
 * @name RpcError
 * @summary Extension to the basic JS Error.
 * @description
 * The built-in JavaScript Error class is extended by adding a code to allow for Error categorization. In addition to the normal `stack`, `message`, the numeric `code` and `data` (any types) parameters are available on the object.
 * @example
 * <BR>
 *
 * ```javascript
 * const { RpcError } from '@polkadot/util');
 *
 * throw new RpcError('some message', RpcError.CODES.METHOD_NOT_FOUND); // => error.code = -32601
 * ```
 */
export default class RpcError<Data = never> extends Error implements RpcErrorInterface<Data> {
  public code!: number;

  public data?: Data;

  public override message!: string;

  public override name!: string;

  public override stack!: string;

  public constructor (message = '', code: number = UNKNOWN, data?: Data) {
    super();

    extend(this, 'message', String(message));
    extend(this, 'name', this.constructor.name);
    extend(this, 'data', data);
    extend(this, 'code', code);

    if (isFunction(Error.captureStackTrace)) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      const { stack } = new Error(message);

      stack && extend(this, 'stack', stack);
    }
  }

  public static CODES = {
    ASSERT: -90009,
    INVALID_JSONRPC: -99998,
    METHOD_NOT_FOUND: -32601, // Rust client
    UNKNOWN
  };
}
