// Copyright 2017-2020 @polkadot/api authors & contributors
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
  #allHasFired = false;

  #callback: CombinatorCallback;

  #fired: boolean[] = [];

  #fns: CombinatorFunction[] = [];

  #isActive = true;

  #results: any[] = [];

  #subscriptions: UnsubscribePromise[] = [];

  constructor (fns: (CombinatorFunction | [CombinatorFunction, ...any[]])[], callback: CombinatorCallback) {
    this.#callback = callback;

    // eslint-disable-next-line @typescript-eslint/require-await
    this.#subscriptions = fns.map(async (input, index): UnsubscribePromise => {
      const [fn, ...args] = Array.isArray(input)
        ? input
        : [input];

      this.#fired.push(false);
      this.#fns.push(fn);

      // Not quite 100% how to have a variable number at the front here
      return (fn as Function)(...args, this.createCallback(index));
    });
  }

  protected allHasFired (): boolean {
    if (!this.#allHasFired) {
      this.#allHasFired = this.#fired.filter((hasFired): boolean => !hasFired).length === 0;
    }

    return this.#allHasFired;
  }

  protected createCallback (index: number): (value: any) => void {
    return (value: any): void => {
      this.#fired[index] = true;
      this.#results[index] = value;

      this.triggerUpdate();
    };
  }

  protected triggerUpdate (): void {
    if (!this.#isActive || !isFunction(this.#callback) || !this.allHasFired()) {
      return;
    }

    try {
      this.#callback(this.#results);
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
