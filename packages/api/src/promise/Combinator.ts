// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Callback } from '@polkadot/types/types';
import { UnsubscribePromise } from '../types';

import { isFunction } from '@polkadot/util';

export type CombinatorCallback = Callback<any[]>;
export interface CombinatorFunction {
  (cb: Callback<any>): UnsubscribePromise;
}

export default class Combinator {
  protected _allHasFired: boolean = false;
  protected _callback: CombinatorCallback;
  protected _fired: boolean[] = [];
  protected _fns: CombinatorFunction[] = [];
  protected _isActive: boolean = true;
  protected _results: any[] = [];
  protected _subscriptions: UnsubscribePromise[] = [];

  public constructor (fns: (CombinatorFunction | [CombinatorFunction, ...any[]])[], callback: CombinatorCallback) {
    this._callback = callback;
    this._subscriptions = fns.map(async (input, index) => {
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
      this._allHasFired = this._fired.filter((hasFired): boolean => !hasFired).length === 0;
    }

    return this._allHasFired;
  }

  protected createCallback (index: number): (value: any) => void {
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

  public unsubscribe (): void {
    if (!this._isActive) {
      return;
    }

    this._isActive = false;

    this._subscriptions.forEach(async (subscription): Promise<void> => {
      try {
        const unsubscribe = await subscription;

        if (isFunction(unsubscribe)) {
          unsubscribe();
        }
      } catch (error) {
        // ignore
      }
    });
  }
}
