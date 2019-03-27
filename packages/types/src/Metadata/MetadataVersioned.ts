// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataInterface } from './types';

import { assert, isUndefined } from '@polkadot/util';

import EnumType from '../codec/EnumType';
import Struct from '../codec/Struct';
import Null from '../primitive/Null';
import MagicNumber from './MagicNumber';
import MetadataV0 from './v0';
import MetadataV1 from './v1';
import MetadataV2 from './v2';
import MetadataV3 from './v3';
import v1ToV0 from './v1/toV0';
import v2ToV1 from './v2/toV1';
import v3ToV2 from './v3/toV2';

class MetadataEnum extends EnumType<Null | MetadataV1 | MetadataV2> {
  constructor (value?: any) {
    super({
      Null, // V0 support has been removed
      MetadataV1, // once rolled-out, can replace this with Null
      MetadataV2, // once rolled-out, can replace this with Null
      MetadataV3
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
   * @description Returns the wrapped values as a V2 object
   */
  get asV2 (): MetadataV2 {
    return this.value as MetadataV2;
  }

  /**
   * @description Returns the wrapped values as a V3 object
   */
  get asV3 (): MetadataV3 {
    return this.value as MetadataV3;
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
  private _convertedV1?: MetadataV1;
  private _convertedV2?: MetadataV2;

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

    if (isUndefined(this._convertedV0)) {
      this._convertedV0 = v1ToV0(this.asV1);
    }

    return this._convertedV0;
  }

  /**
   * @description Returns the wrapped values as a V1 object
   */
  get asV1 (): MetadataV1 {
    if (this.metadata.version === 1) {
      return this.metadata.asV1;
    }

    assert([2, 3].includes(this.metadata.version), `Cannot convert metadata from v${this.metadata.version} to v1`);

    if (isUndefined(this._convertedV1)) {
      this._convertedV1 = v2ToV1(this.metadata.asV2);
    }

    return this._convertedV1;
  }

  /**
   * @description Returns the wrapped values as a V2 object
   */
  get asV2 (): MetadataV2 {
    if (this.metadata.version === 2) {
      return this.metadata.asV2;
    }

    assert(this.metadata.version === 3, `Cannot convert metadata from v${this.metadata.version} to v1`);

    if (isUndefined(this._convertedV2)) {
      this._convertedV2 = v3ToV2(this.metadata.asV3);
    }

    return this._convertedV2;
  }

  /**
   * @description Returns the wrapped values as a V3 object
   */
  get asV3 (): MetadataV3 {
    assert(this.metadata.version === 3, `Cannot convert metadata from v${this.metadata.version} to v3`);

    return this.metadata.asV3;
  }

  getUniqTypes (throwError: boolean): Array<string> {
    return (this.metadata.value as any as MetadataInterface).getUniqTypes(throwError);
  }
}
