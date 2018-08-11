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
