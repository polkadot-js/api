// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ApiInterface$Section } from '@polkadot/api/types';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export default function subscription (name: string, params: Array<any>, section: ApiInterface$Section, unsubCallback?: () => void): rxjs$BehaviorSubject<any> {
  const subject = new BehaviorSubject();

  Observable
    .create((observer: rxjs$IObserver<any>): Function => {
      const callback = (error, result) => {
        if (error) {
          return;
        }

        observer.next(result);
      };

      const fn = section[name];
      const subParams: Array<any> = [].concat(params, [callback]);
      const subscribe = fn.apply(null, subParams);

      return (): void => {
        subscribe
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
}
