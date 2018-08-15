// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ApiInterface$Section } from '@polkadot/api/types';

import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import isUndefined from '@polkadot/util/is/undefined';

export default function subscription (name: string, params: Array<any>, section: ApiInterface$Section, unsubCallback?: () => void): BehaviorSubject<any> {
  const subject = new BehaviorSubject(undefined);

  Observable
    .create((observer: Subscriber<any>): Function => {
      let cachedResult: any;

      const callback = (error: Error | null, result: any) => {
        if (error) {
          console.error(error);
          observer.next();
          return;
        }

        if (isUndefined(cachedResult) || !Array.isArray(cachedResult)) {
          cachedResult = result;
        } else {
          const resultArray = (result as Array<any>) || [];

          cachedResult = cachedResult.map((cachedValue, index) =>
            isUndefined(resultArray[index])
              ? cachedValue
              : resultArray[index]
          );
        }

        observer.next(cachedResult);
      };

      try {
        const fn = section[name];
        const subscribe = fn(...params, callback);

        return (): void => {
          subscribe
            .then((subscriptionId: number) =>
              fn.unsubscribe(subscriptionId)
            )
            .then(() => {
              if (unsubCallback) {
                unsubCallback();
              }
            });
        };
      } catch (error) {
        console.error(error);

        return (): void => {
          console.error('Unsubscribe called on previously failed subscription', error);
        };
      }
    })
    .subscribe(subject);

  return subject;
}
