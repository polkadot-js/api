// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { UnsubFunction } from './types';

import { isFunction } from '@polkadot/util';

export type CombinatorCallback = (value: Array<any>) => any;
export type CombinatorFunction = {
  (cb: (value: any) => any): UnsubFunction | any
};

export default class Combinator {
  protected _allHasFired: boolean = false;
  protected _callback: CombinatorCallback;
  protected _fired: Array<boolean> = [];
  protected _fns: Array<CombinatorFunction> = [];
  protected _isActive: boolean = true;
  protected _results: Array<any> = [];
  protected _unsubscriptions: Array<UnsubFunction | any> = [];

  constructor (fns: Array<CombinatorFunction | [CombinatorFunction, ...Array<any>]>, callback: CombinatorCallback) {
    this._callback = callback;
    this._unsubscriptions = fns.map((input, index) => {
      const [fn, ...args] = Array.isArray(input)
        ? input
        : [input];

      this._fired.push(false);
      this._fns.push(fn);

      // @ts-ignore Not quite 100% how to have a variable number at the front here
      return fn(...args, this.createCallback(index));
    });
  }

  protected allHasFired (): boolean {
    if (!this._allHasFired) {
      this._allHasFired = this._fired.filter((hasFired) => !hasFired).length === 0;
    }

    return this._allHasFired;
  }

  protected createCallback (index: number) {
    return (value: any): void => {
      this._fired[index] = true;
      this._results[index] = value;

      this.triggerUpdate();
    };
  }

  protected triggerUpdate (): void {
    if (!this._isActive || !isFunction(this._callback) || !this.allHasFired()) {
      return;
    }

    try {
      this._callback(this._results);
    } catch (error) {
      // swallow, we don't want the handler to trip us up
    }
  }

  unsubscribe (): void {
    this._isActive = false;

    this._unsubscriptions.forEach((unsubscribe) => {
      if (isFunction(unsubscribe)) {
        unsubscribe();
      }
    });
  }
}
