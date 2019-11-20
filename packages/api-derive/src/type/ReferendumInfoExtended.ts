// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ReferendumIndex, ReferendumInfo } from '@polkadot/types/interfaces/democracy';
import { AnyJsonObject, Constructor, Registry } from '@polkadot/types/types';

import BN from 'bn.js';
import democracyTypes from '@polkadot/types/interfaces/democracy/definitions';
import { Struct, createType } from '@polkadot/types';

// We can ignore the properties, added via Struct.with
const _ReferendumInfo: Constructor<ReferendumInfo> = Struct.with(democracyTypes.types.ReferendumInfo as any) as any;

/**
 * @name ReferendumInfoExtended
 * @description
 * A [[ReferendumInfo]] with an additional `index` field
 */
export default class ReferendumInfoExtended extends _ReferendumInfo {
  private _index: ReferendumIndex;

  constructor (registry: Registry, value: ReferendumInfo | ReferendumInfoExtended, index?: BN | number) {
    super(registry, value);

    this._index = value instanceof ReferendumInfoExtended
      ? value.index
      : createType(registry, 'ReferendumIndex', index);
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
