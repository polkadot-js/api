// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { isFunction } from '@polkadot/util';

export type CombinatorCallback = (value: Array<any>) => any;
export type CombinatorFunction = (cb: (value: any) => void) => any;

export default class Combinator {
  protected _callback: CombinatorCallback;
  protected _results: Array<any>;

  constructor (fns: Array<CombinatorFunction>, callback: CombinatorCallback) {
    this._callback = callback;
    this._results = fns.map(() =>
      // Be very clear on intent - initialise results
      // array with [undefined, undefined, ...]
      undefined
    );

    fns.forEach((fn, index) =>
      fn(this.createCallback(index))
    );
  }

  protected createCallback (index: number) {
    return (value: any): void => {
      this._results[index] = value;

      this.triggerUpdate();
    };
  }

  protected triggerUpdate (): void {
    if (!isFunction(this._callback) || !this._results.length) {
      return;
    }

    try {
      this._callback(this._results);
    } catch (error) {
      // swallow, we don't want the handler to trip us up
    }
  }
}
