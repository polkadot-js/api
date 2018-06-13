// Copyright 2017-2018 @polkadot/api-rx authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ApiInterface$Section } from '@polkadot/api/types';

const { BehaviorSubject } = require('rxjs/BehaviorSubject');
const { Observable } = require('rxjs/Observable');

// flowlint-next-line unclear-type:off
module.exports = function subscription (name: string, params: Array<mixed>, section: ApiInterface$Section, unsubCallback?: () => void): rxjs$BehaviorSubject<any> {
  const subject = new BehaviorSubject();

  Observable
    // flowlint-next-line unclear-type:off
    .create((observer: rxjs$IObserver<any>): Function => {
      const callback = (error, result) => {
        if (error) {
          return;
        }

        observer.next(result);
      };

      const fn = section[name];
      const subParams: Array<mixed> = [].concat(params, [callback]);
      const subscribe = fn.apply(null, subParams);

      return (): void => {
        subscribe
          // flowlint-next-line unclear-type:off
          .then((subscriptionId) => fn.unsubscribe(((subscriptionId: any): number)))
          .then(() => {
            if (unsubCallback) {
              unsubCallback();
            }
          });
      };
    })
    .subscribe(subject);

  return subject;
};
