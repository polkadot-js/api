// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isFunction } from '@polkadot/util';

export type CombinatorCallback = (value: Array<any>) => any;
export type CombinatorFunction = {
  (cb: (value: any) => void): Promise<number>,
  unsubscribe (subscriptionsId: number): Promise<any>
};

export default class Combinator {
  protected _allHasFired: boolean = false;
  protected _callback: CombinatorCallback;
  protected _fired: Array<boolean> = [];
  protected _fns: Array<CombinatorFunction> = [];
  protected _results: Array<any> = [];
  protected _subscriptionIds: Array<number> = [];

  constructor (fns: Array<CombinatorFunction>, callback: CombinatorCallback) {
    this._callback = callback;
    this._fns = fns;

    Promise
      .all(fns.map((fn, index): Promise<number> => {
        this._fired.push(false);

        return fn(this.createCallback(index));
      }))
      .then((subscriptionIds) => {
        this._subscriptionIds = subscriptionIds;
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
    if (!isFunction(this._callback) || !this.allHasFired()) {
      return;
    }

    try {
      this._callback(this._results);
    } catch (error) {
      // swallow, we don't want the handler to trip us up
    }
  }

  unsubscribe (): Promise<any> {
    return Promise.all(
      this._subscriptionIds.map((subscriptionId, index) =>
        this._fns[index]
          .unsubscribe(subscriptionId)
          .catch(() => {
            // ignore
          })
      )
    );
  }
}
