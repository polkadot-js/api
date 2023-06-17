// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Callback } from '@polkadot/types/types';
import type { UnsubscribePromise } from '../types/index.js';

import { isFunction } from '@polkadot/util';

export type CombinatorCallback <T extends unknown[]> = Callback<T>;

export interface CombinatorFunction {
  (cb: Callback<any>): UnsubscribePromise;
}

export class Combinator<T extends unknown[] = unknown[]> {
  #allHasFired = false;
  #callback: CombinatorCallback<T>;
  #fired: boolean[] = [];
  #fns: CombinatorFunction[] = [];
  #isActive = true;
  #results: unknown[] = [];
  #subscriptions: UnsubscribePromise[] = [];

  constructor (fns: (CombinatorFunction | [CombinatorFunction, ...unknown[]])[], callback: CombinatorCallback<T>) {
    this.#callback = callback;

    // eslint-disable-next-line @typescript-eslint/require-await
    this.#subscriptions = fns.map(async (input, index): UnsubscribePromise => {
      const [fn, ...args] = Array.isArray(input)
        ? input
        : [input];

      this.#fired.push(false);
      this.#fns.push(fn);

      // Not quite 100% how to have a variable number at the front here
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/ban-types
      return (fn as Function)(...args, this._createCallback(index));
    });
  }

  protected _allHasFired (): boolean {
    this.#allHasFired ||= this.#fired.filter((hasFired): boolean => !hasFired).length === 0;

    return this.#allHasFired;
  }

  protected _createCallback (index: number): (value: any) => void {
    return (value: unknown): void => {
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
      Promise
        .resolve(this.#callback(this.#results as T))
        .catch(() => {
          // swallow
        });
    } catch {
      // swallow, we don't want the handler to trip us up
    }
  }

  public unsubscribe (): void {
    if (!this.#isActive) {
      return;
    }

    this.#isActive = false;

    this.#subscriptions.map(async (subscription): Promise<void> => {
      try {
        const unsubscribe = await subscription;

        if (isFunction(unsubscribe)) {
          unsubscribe();
        }
      } catch {
        // ignore
      }
    });
  }
}
