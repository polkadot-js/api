// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ApiInterface$Section } from '@polkadot/api/types';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

type CachedMap = {
  [index: string]: {
    [index: string]: BehaviorSubject<any>
  }
};

import subject from './subject';

const cacheMap: CachedMap = {};

export default function cached (subName: string, name: string, section: ApiInterface$Section): (...params: Array<any>) => BehaviorSubject<any> {
  if (!cacheMap[subName]) {
    cacheMap[subName] = {};
  }

  return (...params: Array<any>): BehaviorSubject<any> => {
    const paramStr = JSON.stringify(params);

    if (!cacheMap[subName][paramStr]) {
      cacheMap[subName][paramStr] = subject(name, params, section);
    }

    return cacheMap[subName][paramStr];
  };
}
