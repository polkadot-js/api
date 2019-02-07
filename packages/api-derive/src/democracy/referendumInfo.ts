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
  private _referendumIndex: ReferendumIndex;

  constructor (info: ReferendumInfo, referendumIndex: BN | number) {
    super(info);

    this._referendumIndex = new ReferendumIndex(referendumIndex);
  }

  /**
   * @description Convenience getter, returns the referendumIndex
   */
  get referendumIndex (): ReferendumIndex {
    return this._referendumIndex;
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
