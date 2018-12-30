// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isFunction } from '@polkadot/util';

export type CombinatorCallback = (value: Array<any>) => any;
export type CombinatorFunction = {
  (cb: (value: any) => void): Promise<number>,
  unsubscribe?: (subscriptionsId: number) => Promise<any>
};

let combinatorId = 5000;
const allCombinators: { [index: number]: Combinator } = {};

export default class Combinator {
  protected _allHasFired: boolean = false;
  protected _callback: CombinatorCallback;
  protected _fired: Array<boolean> = [];
  protected _fns: Array<CombinatorFunction> = [];
  protected _id: number = ++combinatorId;
  protected _results: Array<any> = [];
  protected _subscriptionIds: Array<Promise<number>> = [];

  constructor (fns: Array<CombinatorFunction>, callback: CombinatorCallback) {
    allCombinators[this._id] = this;

    this._callback = callback;
    this._fns = fns;
    this._subscriptionIds = fns.map((fn, index): Promise<number> => {
      this._fired.push(false);

      return fn(this.createCallback(index));
    });
  }

  static lookup (id: number): Combinator {
    return allCombinators[id];
  }

  get id (): number {
    return this._id;
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
    delete allCombinators[this._id];

    return Promise.all(
      this._subscriptionIds.map((subscriptionPromise, index) => {
        const unsubscribe = this._fns[index].unsubscribe;

        return !unsubscribe
          ? Promise.resolve(true)
          : subscriptionPromise
            .then((subscriptionId) =>
              unsubscribe(subscriptionId)
            )
            .then(() => true)
            .catch(() => false);
      })
    );
  }
}
