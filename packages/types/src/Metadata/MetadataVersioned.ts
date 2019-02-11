// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataInterface } from './types';

import { assert, isUndefined } from '@polkadot/util';

import EnumType from '../codec/EnumType';
import Struct from '../codec/Struct';
import Null from '../primitive/Null';
import MetadataV0 from './v0';
import MetadataV1 from './v1';
import MetadataV2 from './v2';
import v1ToV0 from './v1/toV0';
import v2ToV0 from './v2/toV0';
import MagicNumber from './MagicNumber';

class MetadataEnum extends EnumType<Null | MetadataV1 | MetadataV2> {
  constructor (value?: any) {
    super({
      MetadataV0, // once rolled-out, can replace this with Null
      MetadataV1,
      MetadataV2
    }, value);
  }

  /**
   * @description Returns the wrapped values as a V0 object
   */
  get asV0 (): MetadataV0 {
    return this.value as MetadataV0;
  }

  /**
   * @description Returns the wrapped values as a V1 object
   */
  get asV1 (): MetadataV1 {
    return this.value as MetadataV1;
  }

  /**
   * @description Returns the wrapped values as a V1 object
   */
  get asV2 (): MetadataV2 {
    return this.value as MetadataV2;
  }

  /**
   * @description The version this metadata represents
   */
  get version (): number {
    return this.index;
  }
}

/**
 * @name MetadataVersioned
 * @description
 * The versioned runtime metadata as a decoded structure
 */
export default class MetadataVersioned extends Struct implements MetadataInterface {
  private _convertedV0?: MetadataV0;

  constructor (value?: any) {
    super({
      magicNumber: MagicNumber,
      metadata: MetadataEnum
    }, value);
  }

  /**
   * @description
   */
  get magicNumber (): MagicNumber {
    return this.get('magicNumber') as MagicNumber;
  }

  /**
   * @description the metadata wrapped
   */
  private get metadata (): MetadataEnum {
    return this.get('metadata') as MetadataEnum;
  }

  /**
   * @description the metadata version this structure represents
   */
  get version (): number {
    return this.metadata.index;
  }

  /**
   * @description Returns the wrapped metadata as a V0 object
   */
  get asV0 (): MetadataV0 {
    if (this.metadata.version === 0) {
      return this.metadata.asV0;
    }

    assert(this.metadata.version <= 2, `Cannot convert metadata from v${this.metadata.version} to v0`);

    if (isUndefined(this._convertedV0)) {
      if (this.metadata.version === 1) {
        this._convertedV0 = v1ToV0(this.metadata.asV1);
      } else {
        this._convertedV0 = v2ToV0(this.metadata.asV2);
      }
    }

    return this._convertedV0;
  }

  /**
   * @description Returns the wrapped values as a V1 object
   */
  get asV1 (): MetadataV1 {
    assert(this.metadata.version === 1, `Cannot convert metadata from v${this.metadata.version} to v1`);

    return this.metadata.asV1;
  }

  /**
   * @description Returns the wrapped values as a V1 object
   */
  get asV2 (): MetadataV2 {
    assert(this.metadata.version === 2, `Cannot convert metadata from v${this.metadata.version} to v2`);
    return this.metadata.asV2;
  }

  getUniqTypes (throwError: boolean): Array<string> {
    return (this.metadata.value as any as MetadataInterface).getUniqTypes(throwError);
  }
}
