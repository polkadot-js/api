// Copyright 2017-2018 @polkadot/api-rx authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ApiInterface$Section } from '@polkadot/api/types';

type Cached$Name = string;
type Cached$ParamJson = string;

type CachedMap = {
  [Cached$Name]: {
    // flowlint-next-line unclear-type:off
    [Cached$ParamJson]: rxjs$BehaviorSubject<any>
  }
};

const subject = require('./subject');

const cacheMap: CachedMap = {};

// flowlint-next-line unclear-type:off
module.exports = function cached (subName: string, name: string, section: ApiInterface$Section): (...params: Array<mixed>) => rxjs$BehaviorSubject<any> {
  if (!cacheMap[subName]) {
    cacheMap[subName] = {};
  }

  // flowlint-next-line unclear-type:off
  return (...params: Array<mixed>): rxjs$BehaviorSubject<any> => {
    const paramStr = JSON.stringify(params);

    if (!cacheMap[subName][paramStr]) {
      cacheMap[subName][paramStr] = subject(name, params, section);
    }

    return cacheMap[subName][paramStr];
  };
};
