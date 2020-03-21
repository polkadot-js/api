// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ReferendumIndex, ReferendumInfo } from '@polkadot/types/interfaces/democracy';
import { AnyJson, Constructor, Registry } from '@polkadot/types/types';

import BN from 'bn.js';
import democracyTypes from '@polkadot/types/interfaces/democracy/definitions';
import { Struct } from '@polkadot/types';

// We can ignore the properties, added via Struct.with
const _ReferendumInfo: Constructor<ReferendumInfo> = Struct.with(democracyTypes.types.ReferendumInfo as any) as any;

/**
 * @name ReferendumInfoExtended
 * @description
 * A [[ReferendumInfo]] with an additional `index` field
 */
export default class ReferendumInfoExtended extends _ReferendumInfo {
  readonly #index: ReferendumIndex;

  constructor (registry: Registry, value: ReferendumInfo | ReferendumInfoExtended, index?: BN | number) {
    super(registry, value);

    this.#index = value instanceof ReferendumInfoExtended
      ? value.index
      : registry.createType('ReferendumIndex', index);
  }

  /**
   * @description Convenience getter, returns the referendumIndex
   */
  public get index (): ReferendumIndex {
    return this.#index;
  }

  /**
   * @description Creates a human-friendly JSON representation
   */
  public toHuman (isExtended?: boolean): AnyJson {
    return {
      ...super.toHuman(isExtended) as { [index: string]: AnyJson },
      index: this.index.toHuman(isExtended)
    };
  }

  /**
   * @description Creates the JSON representation
   */
  public toJSON (): AnyJson {
    return {
      ...super.toJSON() as { [index: string]: AnyJson },
      index: this.index.toJSON()
    };
  }
}
