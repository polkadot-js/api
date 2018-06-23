// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ApiInterface$Section } from '@polkadot/api/types';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

export default function subscription (name: string, params: Array<any>, section: ApiInterface$Section, unsubCallback?: () => void): BehaviorSubject<any> {
  const subject = new BehaviorSubject(undefined);

  Observable
    .create((observer: Subscriber<any>): Function => {
      const callback = (error: Error | null, result: any) => {
        if (error) {
          return;
        }

        observer.next(result);
      };

      const fn = section[name];
      // @ts-ignore slicing and dicing these things in true JS fashion... well, not sure how to go about fixing the TS complaints here
      const subParams: Array<any> = [].concat(params, [callback]);
      const subscribe = fn.apply(null, subParams);

      return (): void => {
        subscribe
          .then((subscriptionId: number) => fn.unsubscribe(subscriptionId))
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
