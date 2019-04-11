// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name promisify
 * @summary Wraps an async callback into a `Promise`
 * @description
 * Wraps the supplied async function `fn` that has a standard JS callback `(error: Error, result: any)` into a `Promise`, passing the supplied parameters. When `error` is set, the Promise is rejected, else the Promise resolves with the `result` value.
 * @example
 * <BR>
 *
 * ```javascript
 * const { promisify } from '@plugnet/util';
 *
 * await promisify(null, ((a, cb) => cb(null, a), true); // resolves with `true`
 * await promisify(null, (cb) => cb(new Error('error!'))); // rejects with `error!`
 * ```
 */
export default function promisify (self: any, fn: Function, ...params: Array<any>): Promise<any> {
  return new Promise((resolve, reject) => {
    fn.apply(self, params.concat([
      (error: Error | null, result: any): void => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    ]));
  });
}
