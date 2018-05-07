// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ApiInterface$Section } from '@polkadot/api/types';

type Cached$Name = string;
type Cached$ParamJson = string;

type CachedMap = {
  [Cached$Name]: {
    [Cached$ParamJson]: rxjs$BehaviorSubject<*>
  }
};

const subject = require('./subject');

const cacheMap: CachedMap = {};

module.exports = function cached (subName: string, name: string, section: ApiInterface$Section): (...params: Array<mixed>) => rxjs$BehaviorSubject<*> {
  if (!cacheMap[subName]) {
    cacheMap[subName] = {};
  }

  return (...params: Array<mixed>): rxjs$BehaviorSubject<*> => {
    const paramStr = JSON.stringify(params);

    if (!cacheMap[subName][paramStr]) {
      cacheMap[subName][paramStr] = subject(name, params, section);
    }

    return cacheMap[subName][paramStr];
  };
};
