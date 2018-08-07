// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ApiInterface$Section } from '@polkadot/api/types';

import { BehaviorSubject, Observable, from } from 'rxjs';
import isFunction from '@polkadot/util/is/function';

import cached from './cached';

export default function observable (subName: string, name: string, section: ApiInterface$Section): (...params: Array<any>) => Observable<any> | BehaviorSubject<any> {
  if (isFunction(section[name].unsubscribe)) {
    return cached(subName, name, section);
  }

  return (...params: Array<any>): Observable<any> =>
    from(
      section[name].apply(null, params).catch((error: Error) =>
        console.error(error)
      )
    );
}
