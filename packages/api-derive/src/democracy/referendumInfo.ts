// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { Option, ReferendumInfo, ReferendumIndex } from '@polkadot/types/index';

import { drr } from '../util/drr';

/**
 * @name ReferendumInfoExtended
 * @description
 * A [[ReferendumInfo]] with an additional `index` field
 */
export class ReferendumInfoExtended extends ReferendumInfo {
  constructor (value: ReferendumInfo) {
    super(value);

    this.set('index', value.get('index') as ReferendumIndex);
  }

  /**
   * @description Convenience getter, returns the referendumIndex
   */
  get index (): ReferendumIndex {
    return this.get('index') as ReferendumIndex;
  }
}

export function referendumInfo (api: ApiInterface$Rx) {
  return (index: BN | number): Observable<Option<ReferendumInfoExtended>> => {
    return (api.query.democracy.referendumInfoOf(index) as Observable<Option<ReferendumInfo>>)
      .pipe(
        map((optionInfo) => {
          const info = optionInfo.unwrapOr(null);

          if (info) {
            info.set('index', new ReferendumIndex(index));
          }

          return new Option<ReferendumInfoExtended>(ReferendumInfoExtended, info);
        }),
        drr()
      );
  };

}
