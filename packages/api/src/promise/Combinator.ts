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
  private __$$_allHasFired = false;
  private __$$_callback: CombinatorCallback<T>;
  private __$$_fired: boolean[] = [];
  private __$$_fns: CombinatorFunction[] = [];
  private __$$_isActive = true;
  private __$$_results: unknown[] = [];
  private __$$_subscriptions: UnsubscribePromise[] = [];

  constructor (fns: (CombinatorFunction | [CombinatorFunction, ...unknown[]])[], callback: CombinatorCallback<T>) {
    this.__$$_callback = callback;

    // eslint-disable-next-line @typescript-eslint/require-await
    this.__$$_subscriptions = fns.map(async (input, index): UnsubscribePromise => {
      const [fn, ...args] = Array.isArray(input)
        ? input
        : [input];

      this.__$$_fired.push(false);
      this.__$$_fns.push(fn);

      // Not quite 100% how to have a variable number at the front here
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/ban-types
      return (fn as Function)(...args, this._createCallback(index));
    });
  }

  protected _allHasFired (): boolean {
    this.__$$_allHasFired ||= this.__$$_fired.filter((hasFired): boolean => !hasFired).length === 0;

    return this.__$$_allHasFired;
  }

  protected _createCallback (index: number): (value: any) => void {
    return (value: unknown): void => {
      this.__$$_fired[index] = true;
      this.__$$_results[index] = value;

      this._triggerUpdate();
    };
  }

  protected _triggerUpdate (): void {
    if (!this.__$$_isActive || !isFunction(this.__$$_callback) || !this._allHasFired()) {
      return;
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.__$$_callback(this.__$$_results as T);
    } catch {
      // swallow, we don't want the handler to trip us up
    }
  }

  public unsubscribe (): void {
    if (!this.__$$_isActive) {
      return;
    }

    this.__$$_isActive = false;

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.__$$_subscriptions.forEach(async (subscription): Promise<void> => {
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
