// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ApiInterface$Section } from '@polkadot/api/types';

const { fromPromise } = require('rxjs/observable/fromPromise');
const isFunction = require('@polkadot/util/is/function');

const cached = require('./cached');

module.exports = function observable (subName: string, name: string, section: ApiInterface$Section): (...params: Array<any>) => rxjs$Observable<any> | rxjs$BehaviorSubject<any> {
  if (isFunction(section[name].unsubscribe)) {
    return cached(subName, name, section);
  }

  return (...params: Array<any>): rxjs$Observable<any> =>
    fromPromise(
      section[name].apply(null, params)
    );
};
