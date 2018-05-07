// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ApiInterface$Section } from '@polkadot/api/types';

const { fromPromise } = require('rxjs/observable/fromPromise');
const isFunction = require('@polkadot/util/is/function');

const cached = require('./cached');

module.exports = function observable (subName: string, name: string, section: ApiInterface$Section): (...params: Array<mixed>) => rxjs$Observable<*> | rxjs$BehaviorSubject<*> {
  if (isFunction(section[name].unsubscribe)) {
    return cached(subName, name, section);
  }

  return (...params: Array<mixed>): rxjs$Observable<*> =>
    fromPromise(
      section[name].apply(null, params)
    );
};
