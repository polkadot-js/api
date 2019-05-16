// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@plugnet/api/types';
import { Option, ReferendumInfo, ReferendumIndex } from '@plugnet/types';
import { isNull } from '@plugnet/util';

import { drr } from '../util/drr';

/**
 * @name ReferendumInfoExtended
 * @description
 * A [[ReferendumInfo]] with an additional `index` field
 */
export class ReferendumInfoExtended extends ReferendumInfo {
  private _index: ReferendumIndex;

  constructor (value: ReferendumInfo | ReferendumInfoExtended, index?: BN | number) {
    super(value);

    this._index = value instanceof ReferendumInfoExtended
      ? value.index
      : new ReferendumIndex(index);
  }

  /**
   * @description Convenience getter, returns the referendumIndex
   */
  get index (): ReferendumIndex {
    return this._index;
  }

  /**
   * @description Creates the JSON representation
   */
  toJSON (): any {
    return {
      ...super.toJSON(),
      index: this.index.toJSON()
    };
  }
}

export function constructInfo (index: BN | number, optionInfo?: Option<ReferendumInfo>): Option<ReferendumInfoExtended> {
  const info = optionInfo
    ? optionInfo.unwrapOr(null)
    : null;

  return new Option<ReferendumInfoExtended>(
    ReferendumInfoExtended,
    isNull(info)
      ? null
      : new ReferendumInfoExtended(info, index)
  );
}

export function referendumInfo (api: ApiInterface$Rx) {
  return (index: BN | number): Observable<Option<ReferendumInfoExtended>> => {
    return (api.query.democracy.referendumInfoOf(index) as Observable<Option<ReferendumInfo>>)
      .pipe(
        map((optionInfo) =>
          constructInfo(index, optionInfo)
        ),
        drr()
      );
  };

}
