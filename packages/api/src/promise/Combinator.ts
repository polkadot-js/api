// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Callback } from '@polkadot/types/types';
import { UnsubscribePromise } from '../types';

import { isFunction } from '@polkadot/util';

export type CombinatorCallback <T extends any[]> = Callback<T>;

export interface CombinatorFunction {
  (cb: Callback<any>): UnsubscribePromise;
}

export default class Combinator<T extends any[] = any[]> {
  #allHasFired = false;

  #callback: CombinatorCallback<T>;

  #fired: boolean[] = [];

  #fns: CombinatorFunction[] = [];

  #isActive = true;

  #results: any[] = [];

  #subscriptions: UnsubscribePromise[] = [];

  constructor (fns: (CombinatorFunction | [CombinatorFunction, ...any[]])[], callback: CombinatorCallback<T>) {
    this.#callback = callback;

    // eslint-disable-next-line @typescript-eslint/require-await
    this.#subscriptions = fns.map(async (input, index): UnsubscribePromise => {
      const [fn, ...args] = Array.isArray(input)
        ? input
        : [input];

      this.#fired.push(false);
      this.#fns.push(fn);

      // Not quite 100% how to have a variable number at the front here
      return (fn as Function)(...args, this._createCallback(index));
    });
  }

  protected _allHasFired (): boolean {
    if (!this.#allHasFired) {
      this.#allHasFired = this.#fired.filter((hasFired): boolean => !hasFired).length === 0;
    }

    return this.#allHasFired;
  }

  protected _createCallback (index: number): (value: any) => void {
    return (value: any): void => {
      this.#fired[index] = true;
      this.#results[index] = value;

      this._triggerUpdate();
    };
  }

  protected _triggerUpdate (): void {
    if (!this.#isActive || !isFunction(this.#callback) || !this._allHasFired()) {
      return;
    }

    try {
      this.#callback(this.#results as T);
    } catch (error) {
      // swallow, we don't want the handler to trip us up
    }
  }

  public unsubscribe (): void {
    if (!this.#isActive) {
      return;
    }

    this.#isActive = false;

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.#subscriptions.forEach(async (subscription): Promise<void> => {
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
