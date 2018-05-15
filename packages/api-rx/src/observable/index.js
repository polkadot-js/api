// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ApiInterface$Section } from '@polkadot/api/types';

const { fromPromise } = require('rxjs/observable/fromPromise');
const isFunction = require('@polkadot/util/is/function');

const cached = require('./cached');

// flowlint-next-line unclear-type:off
module.exports = function observable (subName: string, name: string, section: ApiInterface$Section): (...params: Array<mixed>) => rxjs$Observable<any> | rxjs$BehaviorSubject<any> {
  if (isFunction(section[name].unsubscribe)) {
    return cached(subName, name, section);
  }

  // flowlint-next-line unclear-type:off
  return (...params: Array<mixed>): rxjs$Observable<any> =>
    fromPromise(
      section[name].apply(null, params)
    );
};
