// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataInterface } from './types';

import { assert, isUndefined } from '@plugnet/util';

import EnumType from '../codec/EnumType';
import Struct from '../codec/Struct';
import Null from '../primitive/Null';
import MagicNumber from './MagicNumber';
import MetadataV0 from './v0';
import MetadataV1 from './v1';
import MetadataV2 from './v2';
import MetadataV3 from './v3';
import MetadataV4 from './v4';
import v1ToV0 from './v1/toV0';
import v2ToV1 from './v2/toV1';
import v3ToV2 from './v3/toV2';
import v4ToV3 from './v4/toV3';

class MetadataDeprecated extends Null {
}

class MetadataEnum extends EnumType<MetadataDeprecated | MetadataV0 | MetadataV1 | MetadataV2 | MetadataV3 | MetadataV4> {
  constructor (value?: any) {
    super({
      MetadataV0, // once rolled-out, can replace this with MetadataDeprecated
      MetadataV1, // once rolled-out, can replace this with MetadataDeprecated
      MetadataV2, // once rolled-out, can replace this with MetadataDeprecated
      MetadataV3, // once rolled-out, can replace this with MetadataDeprecated
      MetadataV4
    }, value);
  }

  /**
   * @description Returns the wrapped values as a V0 object
   */
  get asV0 (): MetadataV0 {
    assert(this.isV0, `Cannot convert '${this.type}' via asV0`);

    return this.value as MetadataV0;
  }

  /**
   * @description Returns the wrapped values as a V1 object
   */
  get asV1 (): MetadataV1 {
    assert(this.isV1, `Cannot convert '${this.type}' via asV1`);

    return this.value as MetadataV1;
  }

  /**
   * @description Returns the wrapped values as a V2 object
   */
  get asV2 (): MetadataV2 {
    assert(this.isV2, `Cannot convert '${this.type}' via asV2`);

    return this.value as MetadataV2;
  }

  /**
   * @description Returns the wrapped values as a V3 object
   */
  get asV3 (): MetadataV3 {
    assert(this.isV3, `Cannot convert '${this.type}' via asV3`);

    return this.value as MetadataV3;
  }

  /**
   * @description Returns the wrapped values as a V4 object
   */
  get asV4 (): MetadataV4 {
    assert(this.isV4, `Cannot convert '${this.type}' via asV4`);

    return this.value as MetadataV4;
  }

  /**
   * @description `true` if Deprecated
   */
  get isDeprecated (): boolean {
    return this.type === 'MetadataDeprectated';
  }

  /**
   * @description `true` if V0
   */
  get isV0 (): boolean {
    return this.type === 'MetadataV0';
  }

  /**
   * @description `true` if V1
   */
  get isV1 (): boolean {
    return this.type === 'MetadataV1';
  }

  /**
   * @description `true` if V2
   */
  get isV2 (): boolean {
    return this.type === 'MetadataV2';
  }

  /**
   * @description `true` if V3
   */
  get isV3 (): boolean {
    return this.type === 'MetadataV3';
  }

  /**
   * @description `true` if V4
   */
  get isV4 (): boolean {
    return this.type === 'MetadataV4';
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
  private _convertedV3?: MetadataV3;

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

    assert([2, 3, 4].includes(this.metadata.version), `Cannot convert metadata from v${this.metadata.version} to v1`);

    if (isUndefined(this._convertedV1)) {
      this._convertedV1 = v2ToV1(this.asV2);
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

    assert([3, 4].includes(this.metadata.version), `Cannot convert metadata from v${this.metadata.version} to v2`);

    if (isUndefined(this._convertedV2)) {
      this._convertedV2 = v3ToV2(this.asV3);
    }

    return this._convertedV2;
  }

  /**
   * @description Returns the wrapped values as a V3 object
   */
  get asV3 (): MetadataV3 {
    if (this.metadata.version === 3) {
      return this.metadata.asV3;
    }

    assert([4].includes(this.metadata.version), `Cannot convert metadata from v${this.metadata.version} to v3`);

    if (isUndefined(this._convertedV3)) {
      this._convertedV3 = v4ToV3(this.asV4);
    }

    return this._convertedV3;
  }

  getUniqTypes (throwError: boolean): Array<string> {
    return (this.metadata.value as any as MetadataInterface).getUniqTypes(throwError);
  }

  /**
   * @description Returns the wrapped values as a V3 object
   */
  get asV4 (): MetadataV4 {
    assert(this.metadata.version === 4, `Cannot convert metadata from v${this.metadata.version} to v4`);

    return this.metadata.asV4;
  }
}
