// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { ReferendumInfo, ReferendumIndex } from '@polkadot/types/index';

import { drr } from '../util/drr';

/**
 * @name ReferendumInfoExtended
 * @description
 * A [[ReferendumInfo]] with an additional `referendumIndex` field
 */
export class ReferendumInfoExtended extends ReferendumInfo {
  private _index: ReferendumIndex;

  constructor (info: ReferendumInfo, index: BN | number) {
    super(info);

    this._index = new ReferendumIndex(index);
  }

  /**
   * @description Convenience getter, returns the referendumIndex
   */
  get index (): ReferendumIndex {
    return this._index;
  }
}

export function referendumInfo (api: ApiInterface$Rx) {
  return (id: BN | number): Observable<ReferendumInfoExtended> => {
    return (api.query.democracy.referendumInfoOf(id) as Observable<ReferendumInfo>)
      .pipe(
        map((info) => new ReferendumInfoExtended(info, id)),
        drr()
      );
  };

}
