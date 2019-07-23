// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ReferendumIndex, ReferendumInfo as IReferendumInfo } from '@polkadot/types/srml/democracy/types';

import BN from 'bn.js';
import { createType } from '@polkadot/types';
import ReferendumInfo from '@polkadot/types/type/ReferendumInfo';
import { AnyJsonObject } from '@polkadot/types/types';

// FIXME Here is black-magic going on here. Basically we have not removed the original
// class impl. since we first need it, but this class is already needed right at the
// start of api-derive. Basically, for a proper fix, we need to re-work this ciompletely
// so it implements the interface only (but don't want to duplicate the getters here
// as well - well, we may now, since at least that is one class then, instead of 2)
/**
 * @name ReferendumInfoExtended
 * @description
 * A [[ReferendumInfo]] with an additional `index` field
 */
export default class ReferendumInfoExtended extends ReferendumInfo implements IReferendumInfo {
  private _index: ReferendumIndex;

  public constructor (value: ReferendumInfo | ReferendumInfoExtended, index?: BN | number) {
    super(value);

    this._index = value instanceof ReferendumInfoExtended
      ? value.index
      : createType<ReferendumIndex>('ReferendumIndex', index);
  }

  /**
   * @description Convenience getter, returns the referendumIndex
   */
  public get index (): ReferendumIndex {
    return this._index;
  }

  /**
   * @description Creates the JSON representation
   */
  public toJSON (): AnyJsonObject {
    return {
      ...super.toJSON() as AnyJsonObject,
      index: this.index.toJSON()
    };
  }
}
