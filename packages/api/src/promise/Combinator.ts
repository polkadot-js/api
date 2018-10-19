// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { isFunction } from '@polkadot/util';

export type CombinatorCallback = (value: Array<any>) => any;

type CombinatorFunction = (value: any) => void;

export default class Combinator {
  protected _callback?: CombinatorCallback;
  protected _results: Array<any>;

  constructor (callback?: CombinatorCallback) {
    this._callback = callback;
    this._results = [];
  }

  next (): CombinatorFunction {
    const index = this._results.length;

    // Add an empty value, so we are not operating a sparse array
    this._results[index] = undefined;

    return (value: any): void => {
      this._results[index] = value;

      this.triggerUpdate();
    };
  }

  subscribe (callback: CombinatorCallback): void {
    this._callback = callback;

    this.triggerUpdate();
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
